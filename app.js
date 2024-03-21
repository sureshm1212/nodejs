let express = require('express');
let app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
});

app.get('/greeting', function (req, res) {
   res.send('Hello World');
});
 var server = app.listen(8080, function () {
   console.log("Express App running at http://127.0.0.1:8080/");
});
