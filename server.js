const express = require('express');
const app = express();
const db = require('./db');

const routes = require('./routes/orders.js');
const path = require('path');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

var port = process.env.port || 3000;


app.use('/vendor', express.static(path.join((__dirname, 'node_modules'))));

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json);

app.use(require('method-override')('_method'));


//a
db.sync()
.then(()=>{
  console.log('DB Synced')
})
.then(()=>{
  app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
  })
})

// app.get('/blob', function(req, res, next){
//   console.log('ay');
//   res.send('secret message');
// })

// app.use('/', routes)
