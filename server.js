const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('client'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','hbs')
app.set('port', (process.env.PORT || 4000));


///Get Routes/////
app.get('/', function (req,res) {
  res.send(index.html)
})

///Post Routes/////
app.post('https://forms.hubspot.com/uploads/form/v2/4014783/b5bd028f-9547-40e0-af6e-95fae78fa1bf', function(req,res){
    res.redirect('/')
     })

///Listen Route///////
const port = process.env.PORT || 4000
app.listen(port, function(){
console.log('We have lift off on port ' + port)
})
