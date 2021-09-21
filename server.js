const express=require('express')
const app = express()
const path = require('path');
const port=5000
const dirname = path.resolve(path.dirname(""));

app.use(express.static(path.join(dirname, "public")));

app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(addActiveTime =(req, res, next)=> {
  let requestAt= new Date().getHours()
  
if((requestAt<=9)||(requestAt>=17))
{
  res.sendStatus(401)
}

next()
  })

  app.use(addActiveTime =(req, res, next)=> {
    let requestAd= new Date().getDay()
    console.log(`Date ${requestAd}`)
  if((requestAd==6) || (requestAd==7))
    
  {
   
    res.sendStatus(401)

  }
  
  next()
    })
  
  
  
  


// const midd = (req,res,next)=>{
//     console.log('this is from middelware')
//     next()
// }

//app.use(midd)
app.get('/',(req,res)=>{
    res.send('hello from server')
})
//app.get('/public/styles.css', function(req, res){ res.send('./public/styles.css'); res.end(); });
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/home.html')
})
app.get('/ourservices',(req,res)=>{
    res.sendFile(__dirname+'/public/ourservices.html')
})
app.get('/contactus',(req,res)=>{
  res.sendFile(__dirname+'/public/contactus.html')
})
app.get('*',(req,res)=>{
    res.sendStatus(404)
})
app.listen(port, err=>{
    err? console.log(err): console.log(`the server is runnig on ${port}`)
})