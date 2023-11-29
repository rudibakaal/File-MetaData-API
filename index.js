var express = require('express');
var cors = require('cors');
require('dotenv').config()
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});



const multer = require('multer')
const bodyParser = require('body-parser');
const upload = multer({ dest: 'uploads/' })
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  let fileInfo = req.file
  res.json({ name: fileInfo.originalname, type: fileInfo.mimetype, size: fileInfo.size })

})





const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Your app is listening on port ' + port)
});
