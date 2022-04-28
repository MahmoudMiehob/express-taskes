const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const PORT = 3200 ;


app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs',
}));

app.set("view engine", "hbs");

//**********************************************************************************

app.get('/', function(req, res) {
    res.render('home');
});



app.get('/contects', function(req, res) {
    res.render('contects',{
        contact: [{
            email: 'mahmoudmiehob@gmail.com',
            content: 'hello',
            
        }]
    });
});


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})