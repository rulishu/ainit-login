//react+node.js+mysql
//mysql inner.join left/right.join 
//node.js->express->socket.io npm-pm2全局状态管理
//react class/function组件 hook钩子 生命周期

var mysql  = require('mysql');  
var express = require('express');
var app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json())                          // json化
app.use(bodyParser.urlencoded({ extended: false })) // 编码解析
 

//第1步：连接数据库
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

//第2步：跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

//第3步：暴露服务,
app.get('/login',function(req,res){  //get请求用query传参
    let user = req.query.user; 
    let pass = req.query.pass;
    console.log("get 请求体："+req.body);
    console.log("get 请求参数："+user+":"+pass);
    let sql = 'SELECT * from a1 where username = \"'+user+'\" and password = \"'+pass+'\"';
    connection.query(sql,function(request,response){
        res.json(response)
    })
})
app.post('/user',function(req,res){  //post请求用body带参
    console.log(req);
    let user = req.body.user;
    let pass = req.body.pass;
    let sql = 'select count(1) as num from a1 where username = \"'+user+'\" and password = \"'+pass+'\"';
    connection.query(sql,function(error,result,filed){
        console.log("数据库查询结果:" + result);
        res.json(result);
    })
})

//监听3200端口
app.listen(3200, function () {
  console.log('成功监听 3200 端口')
});






