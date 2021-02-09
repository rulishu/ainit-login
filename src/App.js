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
      list:[],
    };
  }
 
  componentDidMount(){
    axios.get('http://localhost:3000/login').then(res=>{console.log(res)});
  }

  handleChange(event, type){
    this.setState({[type]: event.target.value});
  }

  sub(){
    let data = {list:this.state};
    console.log(data);
    console.log(this.state.user+":"+this.state.pass);
    axios.post('http://localhost:3000/user', {
      user: this.state.user,
      pass: this.state.pass
    })
    .then(res=>{
      console.log(res);
      console.log(res.data);
      if (res.data[0].num!=1) {
        console.log("重新输入...");
        alert("用户名密码错误，请重新输入。");
      }else{
        console.log("跳转....");
        window.open("http://localhost:3000/login");
      }
      this.setState({user:res.data});
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
           <button className='sub' onClick={this.sub.bind(this)}>submit</button>
           <button className='exit' onClick={this.exit.bind(this)}>exit</button>
         </ul>
      </div>
    </div>
    );
  }
}

export default App;


