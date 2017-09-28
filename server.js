const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('client'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','hbs')
app.set('port', (process.env.PORT || 3000));

///Get Routes/////
app.get('/', function (req,res) {
  res.send(index.html)
})

///Post Routes/////
app.post('https://forms.hubspot.com/uploads/form/v2/3939197/0a73a010-469c-4fcd-a45f-d3b02bcbaea7', function(req,res){
    res.render('thankyou')
     })

///Listen Route///////
const port = process.env.PORT || 3000
app.listen(port, function(){
console.log('We have lift off on port ' + port)
})
