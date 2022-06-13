const http = require('http');

const server = http.createServer((request, response) => {
    // console.log("headers",request.headers)    
    console.log("method",request.method)    
    console.log("url",request.url)
    const user = {
        name: "Josh Howard",
        profile: "JHoward12",
        id: "5576"
    };
    
    response.setHeader('Content-type', 'application/JSON')
    response.end(JSON.stringify(user))
})

server.listen(3000);