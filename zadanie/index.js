const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "people"), function (err) {
  if (err) {
    if (err.code === "EEXIST") {
      console.log("Folder juz istnieje");
      return;
    }
    console.log(err);
  } else {
    console.log("Stworzono folder");
  }
});
fs.readFile(
  path.join(__dirname, "2-read-write-users.json"),
  "utf-8",
  function (err, data) {
    if (err) console.log(err);
    else {
      let users = JSON.parse(data);

      for (let user of users) {
        let exist = false;
        let fileName = user.id + "-" + user.name;
        let id = user.id;
        let name = user.name.split(" ")[0];
        let surname = user.name.split(" ")[1];
        let phoneNumber = user.phone.split(" ")[0];
        let street = user.address.street;
        let zipCode = user.address.zipcode;
        let city = user.address.city;

        fs.readFile(
          path.join(__dirname, "people", `${fileName}.txt`),
          "utf-8",
          function (err) {
            if (err.code ==="ENOENT") {
              console.log(err);
              exist = false;
              if(exist === false){
                fs.writeFile(
                  path.join(__dirname, "people", `${fileName}.txt`),
                  `name: ${name},\nsurname: ${surname},\nstreet: ${street},\nZip Code: ${zipCode},\nCity: ${city}\nphone number: ${phoneNumber}`,
                );
              }
            } else {
              exist = true;
              console.log("pliki juz istnieja")
            }
          }
        );
      }
    }
  }
);

// fs.writeFile(
//   path.join(__dirname, "people", `${fileName}.txt`),
//   `name: ${name},\nsurname: ${surname},\nstreet: ${street},\nZip Code: ${zipCode},\nCity: ${city}\nphone number: ${phoneNumber}`,
// );