var express = require('express');
const Swapi = require('swapi-node');
var router = express.Router();
var app = express();

var count = 0;
var personagem = [{}];

Swapi.get('https://swapi.co/api/people/').then(async (result) => {

    count = result.count;

    for(let i = 0; i < 10; i++) {
        
        personagem[i] =  {
            name: result.results[i].name,
            color: result.results[i].eye_color
        }

    }

    function compare(a,b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    }

    personagem.sort(compare);
    
    console.log(personagem, '\n');

return personagem; 

}).catch((err) => {
    console.log("Erro", err);
});

app.get('/', function(req, res) {
    res.render('index', { title: personagem });
});
        
module.exports = app;