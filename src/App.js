import React from 'react';
import './App.css';
import axios from 'axios';


// function App(props) {
//   return (
//     <div class='parent'>
//       <div class='son'>
//          <ul class='grandson'>
//            <li class='login'>账号登录</li>
//            <li class='username'><input type="text" placeholder='用户名'/></li>
//            <li class='password'><input type="password" placeholder='密码'/></li>
//            <button class='sub' type="submit">submit</button>
//            <button class='exit' >exit</button>
//          </ul>
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      list:[
      ],
    };
  }
 
  componentDidMount(){
  //   axios.get('http://localhost:3200/login').then(res=>{
  //   this.state.list = res.data ;
  //   console.log(this.state.list);
  // });
  }//接收监听的端口，打印查看是否监听成功,拿到参数

  handleChange(event, type){
    this.setState({[type]: event.target.value});
  }//获取页面参数，type类型为 user 和 pass

  sub(){
    let data = {list:this.state};
    console.log(this.state.user+":"+this.state.pass);
    //提交页面参数到后台
    axios.post('http://localhost:3200/user', {  //post返回参数写法
      user: this.state.user,
      pass: this.state.pass
    })
    .then(res=>{
      console.log(res.data);
      //后台返回参数校验
      if (res.data[0].num!=1) {
        console.log("重新输入...");
        alert("用户名密码错误，请重新输入。");
      }else{
        // debugger;
        console.log("跳转....");
        axios.get('http://localhost:3200/login', {params:{  //get返回参数写法
        user: this.state.user,
        pass: this.state.pass
      }})
      .then(res=>{
          this.state.list = res.data ;
          console.log(this.state.list);
          this.forceUpdate();
        });
        // this.forceUpdate();
      }
      // this.setState({user:res.data});
    })
    .catch(res=>{console.log('err')});
  };
  
  exit(){

  }

  render() {
    return (
    <div className='parent'>
      <div className='son'>
        <ul className='grandson'>
          <li className='login'>账号登录</li>
          <li className='username'>
            <input type="text" placeholder='用户名' name='user' onChange={(event) => this.handleChange(event, 'user')}/>
          </li>
          <li className='password'>
            <input type="password" placeholder='密码' name='pass' onChange={(event) => this.handleChange(event, 'pass')}/>
          </li>
          <button className='sub' onClick={this.sub.bind(this)}>
            submit
          </button>
          <button className='exit' onClick={this.exit.bind(this)}>exit</button>
         
        <table>
          <thead>
            <tr>
              <th>a_id</th>
              <th>username</th>
              <th>password</th>
            </tr>
          </thead>
          <tbody>
           {this.state.list.map((item,index) =>
            <tr key={index}>
              <td>{item.a_id}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
            </tr>
           )}
          </tbody>
          </table>
        </ul>
      </div>
    </div>
    );
  }
}

export default App;


