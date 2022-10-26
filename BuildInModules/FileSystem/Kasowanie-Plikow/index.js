const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "data-temp"), function (err) {
  if (err) {
    if (err.code === "EEXIST") {
      console.log("folder juz istnieje!");
      return;
    }
    console.log(err);
  } else {
    console.log("stworzono folder");
  }
});
fs.readdir(path.join(__dirname, "data"), function (err, files) {
  if (err) {
    console.log(err);
    return;
  }
  files.forEach(function (file) {
    fs.renameSync(
      path.join(__dirname, "data", file),
      path.join(__dirname, "data-temp", "temp-" + file),
      function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("zmieniono lub przeniesiono");
        }
      }
    );
  });
});
fs.rmdir(path.join(__dirname, "data"), function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("usunieto folder");
  }
});
fs.rm(path.join(__dirname, "cos.txt"), function(err){
    if (err) {
        console.log(err);
      } else {
        console.log("usunieto plik");
      }
})