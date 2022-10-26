const url = require("url");

const urlToObject = url.parse("https://user:path@sub.host.com:8080/p/a/t/h?query=string#hash")

console.log(urlToObject)