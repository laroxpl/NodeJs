const fs = require("fs");

fs.mkdir("./data", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Stworzono folder");
  }
});

fs.writeFile("./data/message.txt", "Witaj programisto!", function(err){
    if(err){
        console.log(err);
    } else {
        console.log("Plik stworzony");
    }
});

fs.readFile("./data/message.txt", "utf-8", function(err,data){
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});