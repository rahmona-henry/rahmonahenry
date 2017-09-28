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

app.post('https://forms.hubspot.com/uploads/form/v2/3939197/0a73a010-469c-4fcd-a45f-d3b02bcbaea7', function(req,res){
   console.log('this is,req.body',req.body)

                           .then(function(data){
                            //  console.log('this is data', data)
                           res.send(index.html)
                         })
                         .catch(function(error){
                           console.log('Error', error)
                           res.redirect('/')
                         })
})


///Listen Route///////
const port = process.env.PORT || 3000
app.listen(port, function(){
console.log('We have lift off on port ' + port)
})
