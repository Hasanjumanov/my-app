import axios from 'axios';
import React, { useState } from 'react';

import '../style/sign.scss'
function Sign() {

  const [msg, setMsg] = useState([])

  function app() {
    const { email, password } = msg
    axios.post('/user/login', {email, password}).then(res => {
      const { succes, message } = res.data
      if (!succes) {
        alert(message)
      } else {
        alert(message)
      }
    })
  }
  return (
    <>
      <div className="main1">
        <div className="menu1">
          <div className="logo1">
            <h1>Sign in</h1>
          </div>
          <div className="inp1">
            <input type="email" name="" id="" placeholder='Emile'
              onChange={e => setMsg({ ...msg, email: e.target.value })} value={msg.email} />
            <input type="password" name="" id="" placeholder='Pasword'
              onChange={e => setMsg({ ...msg, password: e.target.value })} value={msg.password} />
          </div>
          <div className="ch1">
            <div className="che1"><input type="checkbox" name="" id="" /></div>
            <div className="p1"><p>Rember me</p></div>
          </div>
          <div className="btn1">
            <button variant='outlined' onClick={() => app()}><h3>Login in</h3></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sign;