const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const apiRouter = require('./Routes/api.js')
const cors = require('cors');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');




const app = express();
require('./Db');

app.use(express.static(__dirname+'/admin-view/dist/admin-view'));
app.get('/*',function(req, res){
    res.sendFile(path.join(__dirname+'/admin-view/dist/admin-view/index.html'));
});

//Configuraciones CORS
const corsOptions = { origin: "https://adminecommerce.herokuapp.com/" }
app.use(cors({
    origin: "https://adminecommerce.herokuapp.com/",
    credentials: true
}))
app.use(cookieParser());
app.use(bodyParser());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter);

app.use(express.static(__dirname + '/admin-view'));
app.listen(port, ()  => {
    console.log("Servidor iniciado en el puerto "+port);
})