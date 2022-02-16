const express = require('express');
const app = express();
const mysql = require('mysql');
const myconn = require('express-myconnection')
const routes = require('./routes/routes')
const cors = require('cors');

// Settings
app.set('port', process.env.PORT || 8080);
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'life-control'
}

// Middlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

//routes
app.get('/', (req, res) => { 
    res.send('En el servidor')
})

app.use('/api', routes)

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });