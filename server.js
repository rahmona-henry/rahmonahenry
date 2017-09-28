const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('client'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
 app.set('view engine','hbs')
app.set('port', (process.env.PORT || 3000));
// app.set('views',path.join(__dirname,'views'))


///Get Routes/////
app.get('/', function (req,res) {
  res.send(index.html)
})

///Post Routes/////
app.post('/signUp', function(req,res){
      //  console.log('this is the req.body',req.body)
      //  .then(function(data){
    //   //  console.log('this is the request',data)
    //   // const firstName = req.body.firstName
    //   // const secondName = req.body.secondName
    //   // const email = req.body.email
    //   //  res.send(firstName + ' ' + secondName + ' ' + email);
    res.render('thankyou')
     })
    //    .catch(function(error){
    //   //   console.log('error')
    //      res.redirect('thankyou')
    //    })
    // })


///Listen Route///////
const port = process.env.PORT || 3000
app.listen(port, function(){
console.log('We have lift off on port ' + port)
})
