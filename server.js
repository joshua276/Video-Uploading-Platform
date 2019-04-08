const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');
// const port = 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/ngApp/index.html'));
  // res.sendFile('/home/joshuareynold/Documents/VNIT/6th sem/Soft/E3/ngApp/dist/ngApp/index.html');
});
app.set('port', (process.env.PORT || 5002 ));
// var port=app.get('port'
app.listen(app.get('port'), function () {
  console.log("Server runin on localhost " + app.get('port'));

});
