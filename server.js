const express = require('express')
const app = express()

app.use(express.static('client'))

// app.use(bodyParser.urlencoded({extended:true}))
// app.set('view engine','hbs')
app.set('port', (process.env.PORT || 3000));

// const env = process.env.NODE_ENV || 'development'

///Routes/////
app.get('/', function (req,res) {
  res.send(index.html)
})


///Listen Route///////
const port = process.env.PORT || 3000
app.listen(port, function(){
console.log('We have lift off on port ' + port)
})
