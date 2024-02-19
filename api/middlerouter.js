const express = require("express")
const reactapi = express.Router();
const nextrouter = require("./reactsend.js")

reactapi.use(express.json())
reactapi.use(express.urlencoded({ extended: true }))

reactapi.post('/', (req, res, next) => {

    //req.body.aaa = "자신의 값"
    next('route')
})

reactapi.use('/', nextrouter)

module.exports = reactapi;