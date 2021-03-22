//BASIC ROUTING and STATUS CODES
const http = require("http");
const fs = require('fs');

//const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    //console.log(req.url, req.method);
    
    res.setHeader("Content-Type", "text/html");

    let path = './';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/blog':
            path += 'blog.html';
            res.statusCode = 200;
            break;
        case '/contact':
            path += 'contact.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data)=>{
        if(err){
            console.error(err);
            res.end();
        }else{
            res.end(data); 
        }
    })
});

server.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}/`);
});














/* //BASIC REROUTING 
const http = require("http");
const fs = require('fs');
//const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    //console.log(req.url, req.method);
    
    res.setHeader("Content-Type", "text/html");

    let path = './';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/blog':
            path += 'blog.html';
            res.statusCode = 200;
            break;
        default:
            res.setHeader("Location", "/");
            res.statusCode = 301;
            break;
    }

    fs.readFile(path, (err, data)=>{
        if(err){
            console.error(err);
            res.end();
        }else{
            res.end(data); 
        }
    })
});

server.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}/`);
}); */


















//HTML FILES
/* const http = require("http");
const fs = require('fs');
//const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./index.html",(err, data)=>{
        if(err){
            console.error(err);
            res.end();
        }else{
            res.end(data); 
        }
    })
});

server.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}/`);
}); */




















//Using HTML instead of plain
/* const http = require("http");

//const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello World!</h1>");
});

server.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}/`);
});
 */
















//Here is a basic http server 
/* const http = require("http");

//const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write("Hello world");
    res.write("Hello world again");
    res.end("THE END");
});

server.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}/`);
});
 */




