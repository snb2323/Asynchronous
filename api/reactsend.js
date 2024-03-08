const express = require("express");  // Express 프레임워크를 사용하기 위한 모듈 가져오기
const mysql = require("mysql");  // MySQL 데이터베이스 연결을 위한 모듈 가져오기
const mydbinfo = require("../data/db.json");  // MySQL 데이터베이스 연결 정보를 저장한 JSON 파일 가져오기

const mysqlapi = express.Router();  // Express 라우터 생성

mysqlapi.use(express.json());  // JSON 파싱을 위한 미들웨어 설정
mysqlapi.use(express.urlencoded({ extended: true }));  // URL 인코딩을 위한 미들웨어 설정

const myconnection = mysql.createPool(mydbinfo);  // MySQL 연결 풀 생성

// /api/detail 경로로 요청이 오면, 해당 게시판의 전체 글 목록을 가져옵니다.
mysqlapi.get('/:tablenm', (req, res) => {
    const tablenm = req.params.tablenm;  // URL에서 게시판 이름을 가져오기
    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB 연결 오류: " + err);  // DB 연결 오류 처리
        connect.query(`select * from ${tablenm}`, (error, result) => {
            if (error) throw console.log("글 목록 쿼리 오류");  // 글 목록 조회 쿼리 오류 처리
            res.send(result);  // 조회 결과를 응답으로 보내기
            connect.release();  // DB 연결 풀에서 연결 해제
        });
    });
});

// /api/detail/:tablenm/:id 경로로 요청이 오면, 해당 게시판의 특정 글을 가져옵니다.
mysqlapi.get('/:tablenm/:id', (req, res) => {
    const tablenm = req.params.tablenm;  // URL에서 게시판 이름을 가져오기
    const pk = req.params.id;  // URL에서 글의 고유 식별자(ID)를 가져오기
    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB 연결 오류: " + err);  // DB 연결 오류 처리
        connect.query(`select * from ${tablenm} where id = ${pk}`, (error, result) => {
            if (error) throw console.log("글 보기 쿼리 오류");  // 글 보기 쿼리 오류 처리
            res.send(result);  // 조회 결과를 응답으로 보내기
            connect.release();  // DB 연결 풀에서 연결 해제
        });
    });
});

// /api/detail/:tablenm/:id/d 경로로 POST 요청이 오면, 특정 글을 삭제합니다.
mysqlapi.post('/:tablenm/:id/d', (req, res) => {
    const tablenm = req.params.tablenm;  // URL에서 게시판 이름을 가져오기
    const pk = req.params.id;  // URL에서 글의 고유 식별자(ID)를 가져오기
    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB 연결 오류: " + err);  // DB 연결 오류 처리
        connect.query(`DELETE FROM ${tablenm} WHERE id = ${pk}`, (error, result) => {
            if (error) throw console.log("삭제 쿼리 오류");  // 삭제 쿼리 오류 처리
            res.send({ msg: "d" });  // 응답으로 'd' 메시지 보내기
            connect.release();  // DB 연결 풀에서 연결 해제
        });
    });
});

// /api/detail/:tablenm 경로로 POST 요청이 오면, 새로운 글을 추가합니다.
mysqlapi.post('/:tablenm', (req, res) => {
    const tablenm = req.params.tablenm;  // URL에서 게시판 이름을 가져오기

    // 폼 데이터에서 필드와 값을 추출하여 정리합니다.
    const columns = Object.keys(req.body.body).join(', ');
    const values = Object.values(req.body.body).map(value => `'${value}'`).join(', ');

    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB 연결 오류: " + err);  // DB 연결 오류 처리
        connect.query(`INSERT INTO ${tablenm} (${columns})
        VALUES (${values})`, (error, result) => {
            if (error) throw console.log("글 삽입 쿼리 오류");  // 글 삽입 쿼리 오류 처리
            res.send({ msg: "i" });  // 응답으로 'i' 메시지 보내기
            connect.release();  // DB 연결 풀에서 연결 해제
        });
    });
});

// /api/detail/:tablenm/:id/m 경로로 POST 요청이 오면, 특정 글을 수정합니다.
mysqlapi.post('/:tablenm/:id/m', (req, res) => {
    const tablenm = req.params.tablenm;  // URL에서 게시판 이름을 가져오기
    const pk = req.params.id;  // URL에서 글의 고유 식별자(ID)를 가져오기
    const bodyData = req.body.body;  // 요청 본문에서 글의 수정 내용을 가져오기

    // 폼 데이터에서 필드와 값을 추출하여 정리합니다.
    const setClause = Object.keys(bodyData).map(key => `${key} = '${bodyData[key]}'`).join(', ');

    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB 연결 오류: " + err);  // DB 연결 오류 처리
        connect.query(`UPDATE ${tablenm} SET ${setClause} WHERE id = ${pk}`, (error, result) => {
            if (error) throw console.log("글 수정 쿼리 오류");  // 글 수정 쿼리 오류 처리
            res.send({ msg: "m" });  // 응답으로 'm' 메시지 보내기
            connect.release();  // DB 연결 풀에서 연결 해제
        });
    });
});

module.exports = mysqlapi;  // 모듈로 내보내기
