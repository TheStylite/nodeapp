var http=require('http');
var app=http.createServer();

app.on('request',(req,res)=>{

	console.log('服务器接受到请求...');
	res.end('hello world');
});

app.listen(80,()=>{

	console.log('server is runing...');
});