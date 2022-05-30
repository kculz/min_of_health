import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

import Logo from '../../../images/min_logo.png'

let initialState = {
  username:'',
  password:''
}
const Login = () => {
  const [data,setData] = useState({initialState})
  const {username,password} = data
  const navigate = useNavigate()

  const handleChange = (e) => {
    setData({...data, [e.target.name]: [e.target.value]})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const sendData = {
      username:data.username,
      password:data.password
    }
     axios.post("http://localhost:5000/login",{username:username,password:password})
     .then((result)=> {
       if(result){
         navigate('/dashboard')
       }
     })
     .catch((error)=>{
      console.log(error)
     })
  }

  return (
    <div className='grid md:grid-cols-2 place-items-center md:mt-[150px]'>
      <div>
          <img src={Logo} alt="" />
          <div>
              <h1 className='font-bold text-2xl'>Lorem, ipsum.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
      </div>
      <div>
        <div className='form-container'>
            <form action="/" method='post'>
                <h1 className="text-center text-indigo-500 text-5xl mb-4 font-bold ">Sign in</h1>
                <div className="">
                    <input type="text" name="username" placeholder='Enter Username'class="form-design"
                    onChange={handleChange}
                    value={data.username}
                    />
                </div>

                <div className="">
                    <input type="password" name="password" placeholder='Enter Password'class="form-design"
                    onChange={handleChange}
                    value={data.password}
                    />
                </div>

                <button type='submit' className='btn btn-info' onClick={handleSubmit}>Sign in</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
