var express=require('express');
var path=require('path');

var app=express();

app.use('/public/',express.static(path.join(__dirname,'./public/')));
app.engine('html',require('express-art-template'));


app.get('/',(req,res)=>{

	res.render('index.html');
	
});

app.listen(80,()=>{

	console.log('runing.....');

});
app.use((req,res,next)=>{
  console.log('错误');
  res.status(404).end('404');
  
});


