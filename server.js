// Dependencies
const express = require('express');
// Import express-handlebars
// const exphbs = require('express-handlebars');

const handlebars = require('express-handlebars');
const path = require('path');
const routes = require('./controllers/calRoute');
const hbs = handlebars.create();


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;


//const hbs = handlebars.create({ helpers })
// Describe what the following two lines of code are doing.
// The following two lines of code are setting Handlebars.js as the default template engine.
app.engine('handlebars', hbs.engine);
//app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes)
//app.use(require('./controllers/dish-routes'));

  

// Starts the server to begin listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });

