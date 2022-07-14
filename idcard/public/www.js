const http = require('http')
const fs = require('fs')
const server = http.createServer(function (req, res) {

    const html = fs.readFileSync('./index.html')
    res.end(html)

})

server.listen(80, function () {
    console.log('listening port 80')
})