//react+node.js+mysql
//mysql inner.join left/right.join 
//node.js->express->socket.io
//react class/function组件 hook钩子 生命周期

var mysql  = require('mysql');  
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json())                          //json化
app.use(bodyParser.urlencoded({ extended: false })) // 创建 application/x-www-form-urlencoded 编码解析
 

//第1步：连接数据库 确保连接运行。node src/mysql.js
let connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123',       
  port: '3306',                   
  database: 'db3' 
}); 
connection.connect();
connection.query('SELECT a_id,username,password FROM a1;', function (error, results, fields) {
  if (error) throw error;
  console.log('连接成功');
});

//第2步：先跨域，用到了express(http的封装包)
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
  });

//第3步：node.js暴露服务,
app.post('/login',function(req,res){
    let sql = 'SELECT * from a1';
    connection.query(sql,function(request,response){
        res.json(response)
    })
})
app.post('/user',function(req,res){
    // let user = req.body.user;
    let sql = 'SELECT username FROM a1;';
    connection.query(sql,function(request,response){
        res.json(response)
    })
})
app.post('/pass',function(req,res){
    // let pass = req.body.pass;
    let sql = 'SELECT password FROM a1;';
    connection.query(sql,function(request,response){
        res.json(response)
    })
})

//监听3000端口
app.listen(3000, function () {
  console.log('成功监听 3000 端口')
});






