const express = require("express");
const mysql = require("mysql");
const mydbinfo = require("../data/db.json")

const mysqlapi = express.Router();

mysqlapi.use(express.json())
// mysqlapi.use(express.urlencoded({ extended: true }))

const myconnection = mysql.createPool(mydbinfo)

// localhost:8001/api/detail
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


module.exports = mysqlapi;