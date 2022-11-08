import React, { useState } from 'react';
import '../style/login.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [state, setState] = useState({})

  function Back() {
    axios.post('/user/register', state).then(res => {
      const { success, message } = res.data
      if (!success) {
        alert(message)
      }
      else {
        setTimeout(() => {
          alert(message)
          window.location.pathname = '/sign'

        }, 1500)
      }
    })
  }



  return (
    <>
      <div className="main">
        <div className="menu">
          <div className="logo">
            <h1>Sign up</h1>
          </div>
          <div className="inp">
            <input type="text" placeholder='Name'
              onChange={e => setState({ ...state, firtName: e.target.value })} value={state.firtName} />
            <input type="email" name="" id="" placeholder='Emile'
              onChange={e => setState({ ...state, email: e.target.value })} value={state.email} />
            <input type="password" name="" id="" placeholder='Password'
              onChange={e => setState({ ...state, password: e.target.value })} value={state.password} />
            <input type="password" name="" id="" placeholder='Password' />
          </div>
          <div className="ch">
            <div className="che"><input type="checkbox" name="" id="" /></div>
            <div className="p"><p>I agree all  statements in <a href="/">Terms of servise</a></p></div>
          </div>
          <div className="btn">
            <button variant='outlined' onClick={Back}><h3>Register</h3></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;