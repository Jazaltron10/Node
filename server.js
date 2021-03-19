
// console.log(__filename);
// console.log(__dirname);



//WRITING TO FILES
const {writeFile, writeFileSync, write} = require('fs');

const newContent = "This is some new text"

writeFile("text.txt", newContent, (err)=>{
    if (err){
        console.error(err);
        return;
    }
    console.log("Content Written!");
});




//READING FILES ASYNCHRONOUSLY
/* const fs = require('fs');
fs.readFile('text.txt', "utf8", (err, data)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(data); // OR console.log(data.toString());
});

console.log("Log from Outside even though this code comes last => Asynchronicity at work"); */





//SYNCHRONOUS VERSION
/* try {
    const data = fs.readFileSync("text.txt","utf8");
    console.log(data);
}catch(err){
    console.error(err);
}
console.log("Log from Outside even though this code comes last => Asynchronicity at work");
 */












