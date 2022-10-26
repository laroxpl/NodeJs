const path = require("path");

const filename = path.basename(__dirname + "/tmp/index.html");
const filenameNoExt = path.basename(__dirname + "/tmp/index.html", ".html");

console.log(filename); //index.html
console.log(filenameNoExt); //index (bez roszrzezenia (4linijka))

const dirname = path.dirname(__dirname + "tmp/index.html");
console.log(dirname); // C:\\NodeProjects\\BuildInModules\\Path/tmp  (smieszna sciezka)

const ext = path.extname(__dirname + "tmp/index.html");
console.log(ext); //.html

const parseFile = path.parse(__dirname + "/tmp/index.html");
console.group(parseFile); //obiekt sciezki

const newPath = path.join(__dirname,"tmp");
console.log(newPath);
