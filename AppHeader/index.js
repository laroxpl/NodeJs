const express = require("express");
const app = express();

const hbs = require('express-handlebars');

app.use(express.static('public'));

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
    res.render('home',{
        title: "Tytul z Express",
        content: "czesc programisto",
    });
});

app.get('blog/:id?', function(res,req){
    res.reder('blog',{
        title: "Tytul posta",
        content: "Tresc posta",
        id: req.params.id
    });
});

app.listen(8080, function(){
    console.log('Serwer Node.js dziala');
});