


const http = require("http");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response)=>{
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello world");
});

server.listen(PORT, HOSTNAME,()=>{
    console.log(`Server is running at http://${HOSTNAME}:${PORT}/`);
});



// console.log(__filename);
// console.log(__dirname);



//DELETING FILES
const {unlink} = require('fs');

unlink("Hello.md", (err) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log('File Deleted!');
});



//RENAMING FILES 
const {rename} = require('fs');

rename("text.txt", "Hello.md", (err) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log('File Renamed!');
});




//APPENDING FILES
const {appendFile} = require('fs');

const newContent = "\nThis is some more new text"

appendFile('text.txt', newContent, (err) => {
    if (err){
        console.error(err)
        return
    }
    console.log('Content Written!');
});





//WRITING TO FILES
const {writeFile, writeFileSync, write} = require('fs');

const newContent = "\nThis is some new text"

writeFile("text.txt", newContent, (err)=>{
    if (err){
        console.error(err);
        return;
    }
    console.log("Content Written!");
});




//READING FILES ASYNCHRONOUSLY
const fs = require('fs');
fs.readFile('text.txt', "utf8", (err, data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data); // OR console.log(data.toString());
});

console.log("Log from Outside even though this code comes last => Asynchronicity at work");





//SYNCHRONOUS VERSION
try {
    const data = fs.readFileSync("text.txt","utf8");
    console.log(data);
}catch(err){
    console.error(err);
}
console.log("Log from Outside even though this code comes last => Asynchronicity at work");

