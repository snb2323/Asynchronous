const express = require('express')
const path = require('path')
const port = 8002
const bookdata = require("./api/middlerouter");

const app = express();

app.use(express.static(path.join(__dirname, './portfolio/build')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, './portfolio/build/index.html'))
})

app.use("/api", bookdata);
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, './www/nopage.html'))
}
)

app.listen(port, () => {
    console.log(`localhost:${port} 서버정상구동`)
})