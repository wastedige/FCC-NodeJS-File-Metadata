var express = require('express');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.post('/api/fileanalyse', upload.single('the-file'),  function(req, res, next) {
  console.log({fileSize: JSON.stringify(req.file.size)} )
//  res.status(200).send({success: true}, {fileSize: JSON.stringify(req.file.size)} )
  //res.json({success: true});
  res.end( JSON.stringify ( { fileSize: req.file.size } ) )

})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
