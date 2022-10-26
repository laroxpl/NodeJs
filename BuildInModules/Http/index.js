const http = require("http");
const server = http.createServer((request, response) =>{
    console.log(request);

    response.write("<h1>siema</h1>");

    response.end();
})

server.listen(3000);