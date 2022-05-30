import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const initialState ={
    username:'',
    password:''
}
const RequestLogin = () => {
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
        navigate('/requests')        
       }
     })
     .catch((error)=>{
      console.log(error)
     })
  }
  return (
    <div>
      <div className='form-container'>
            <form action="/" method='post'>
                <div className="grid place-items-center">
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
                </div>
            </form>
        </div>
    </div>
  )
}

export default RequestLogin
