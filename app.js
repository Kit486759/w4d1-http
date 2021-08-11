const http = require('http');
const port = 3333;
const fs = require('fs')

const app = http.createServer((req, res) => {

    fs.readFile('index.html', (err, data) => {
        if (err) {
            throw err
        }
        res.end(data)
    })
})

app.listen(port)