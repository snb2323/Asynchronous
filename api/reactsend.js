const express = require("express");
const mysql = require("mysql");
const mydbinfo = require("../data/db.json")

const mysqlapi = express.Router();

mysqlapi.use(express.json())
mysqlapi.use(express.urlencoded({ extended: true }))

const myconnection = mysql.createPool(mydbinfo)

// localhost:8002/api/detail
// 위 주소를 가지고 postman에서 확인할 것 get방식이 아니라 주소창으로 접근할 수 없음
mysqlapi.post('/:tablenm', (req, res) => {
    const tablenm = req.params.tablenm
    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB접속정보확인 " + err)
        connect.query(`select * from ${tablenm}`, (error, result) => {
            if (error) throw console.log("쿼리문 오류")
            res.send(result)
        })
    })
})

mysqlapi.post('/:tablenm/:id', (req, res) => {
    // const tablenm = req.params.tablenm
    // const id = req.params.id
    const { tablenm, id } = req.params
    myconnection.getConnection((err, connect) => {
        if (err) throw console.log("DB접속정보확인 " + err)
        connect.query(`select * from ${tablenm} where id=${id}`, (error, result) => {
            if (error) throw console.log("쿼리문 오류")
            res.send(result)
        })
    })
})


module.exports = mysqlapi;