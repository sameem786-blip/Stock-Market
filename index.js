const express = require(`express`);
const app = express();
const path = require(`path`);
const PORT = process.env.PORT || 5000;
const exphbs = require('express-handlebars');
//set hanlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherStuff = `This is other stuff`;
//set handlebar route
app.get('/', function(req, res) {
    res.render('home', {
        stuff: otherStuff
    });
});
//set static folder
app.use(express.static(path.join(__dirname, 'public')));

console.log(`Server active at ${PORT}`);

app.listen(PORT);