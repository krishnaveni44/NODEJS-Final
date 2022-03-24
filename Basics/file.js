const fs = require("fs");

const quote = " No beauty shines brighter than that of a good heart 🙁 !!!.";
fs.writeFile("./awesome.html", quote, (err) => {
    console.log("Completed writing !!");
});

const quote2 = "Live more, worry less 😃😃";

for(let i=1; i<=10; i++){
    fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
        console.log("Completed writing !!");
    });
}

const quote3 ="Happy Women's day 🎉🎉🎉";
const noOfFiles = process.argv[2];

for(let i=1; i<= noOfFiles; i++){
    fs.writeFile(`./backup/text-${i}.html`, quote3, (err) => {
        console.log("Completed writing !!!👍",`text-${i}.html`);
    });
}

fs.unlink("./delete-file.css",(err) => {
    console.log("Deleted file !!! ✨");
});

fs.readdir("./backup",(err, files) => {
    console.log(files);
});

// Delete all files in backup
