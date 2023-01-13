
let http = require("http");

let server = http.createServer((req,res) => {

    let Name = {
        name : "Paresh",
        age : "24"
    }

    res.write(JSON.stringify(Name))
    res.end()
})

server.listen(5780,() => {
    console.log("server started")
})