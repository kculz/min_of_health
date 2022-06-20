import React from 'react'
import { useNavigate } from 'react-router-dom'
import {MdManageAccounts, MdAdminPanelSettings, MdHealthAndSafety} from 'react-icons/md'
import {BiHealth} from 'react-icons/bi'


import Header from '../header/Header'



const Dashboard = () => {
const navigate = useNavigate()
const  redirect = ()=>{
    navigate('/assets')
}
const redirectRequest = ()=>{
    navigate('/requests/login')
}
const redirectAddAssets = ()=>{
    navigate('/add/asset')
}
  return (
    <div>
        <Header />
        
        <div className='bg-indigo-500 py-8 h-auto'>
            <h1 className="text-3xl text-white text-center font-bold md:mt-20">Min of Health Asset Management </h1>
            <div className="flex flex-col md:flex-row md:justify-center items-center gap-5 mt-4">
                <button className='btn btn-light' onClick={redirectAddAssets}>Add New Asset</button>
                <button className='btn btn-light' onClick={redirectRequest}>View REQUESTS</button>
            </div>
        </div>
        <div>
            <h1 className="text-3xl text-indigo-500 text-center font-bold md:mt-11 mb-4">Departments</h1>
            <div className="container">
                <div className='grid grid-row md:grid-cols-4 place-items-center items-center'>
                   <div className="card " onClick={redirect}>
                        <MdAdminPanelSettings size={50} color="#6366f1"/>
                        <h1 className="text-xl">Adminstration</h1>
                   </div>

                   <div className="card " onClick={redirect}>
                        <MdManageAccounts size={50} color="#6366f1"/>
                        <h1 className="text-xl">Accounts</h1>
                   </div>

                   <div className="card " onClick={redirect}>
                        <MdHealthAndSafety size={50} color="#6366f1"/>
                        <h1 className="text-xl">Phamatical</h1>
                   </div>

                   <div className="card " onClick={redirect}>
                        <BiHealth size={50} color="#6366f1"/>
                        <h1 className="text-xl">Health</h1>
                   </div>
                </div>
              
            </div>
        </div>
        
    </div>
  )
}

export default Dashboard
