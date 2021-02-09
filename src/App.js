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
      
    };
  }
 
  componentDidMount(){
    axios.get('http://localhost:3000/login').then(res=>{console.log(res)});
  }

  render() {
    return (
    <div className='parent'>
      <div className='son'>
         <ul className='grandson'>
            <li className='login'>账号登录</li>
            <li className='username'>
              <input type="text" placeholder='用户名'/>
            </li>
            <li className='password'>
              <input type="password" placeholder='密码'/>
            </li>
           <button className='sub' type="submit">submit</button>
           <button className='exit' >exit</button>
         </ul>
      </div>
    </div>
    
    );
  }
}


export default App;
