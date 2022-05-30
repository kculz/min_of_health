import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddAsset = () => {
  const [data,setData] = useState({
    asset_desc:'',
    asset_sn:'',
    asset_gf:'',
    custodian_name: '',
    department: '',
    asset_conditon:'',
    asset_status:'',
    date_issued: '',
    date_of_last_service: '',
    purchase_value: '',
    requests: '',
    request_status: ''
  })

  const handleChange = (e) => {
    setData({...data, [e.target.name]: [e.target.value]})
  }
  const navigate = useNavigate()
  const redirect = () =>{
    navigate('/dashboard')
  }
  const handleSubmit = ()=> {
      

  }
  return (
    <div className='grid place-items-center'>
      <form className="flex flex-col mt-32" action='/' method='post' onSubmit={handleSubmit}>
       <div className=''>
            <input type="text" name="asset_desc" placeholder='Asset Description' className='form-design mx-3' onChange={handleChange} value={data.asset_desc}/>
            <input type="text" name="asset_sn" placeholder='Asset SN #' className='form-design mx-3' onChange={handleChange} value={data.asset_sn}/>
       </div>
       <div>
            <select name="department" className='form-design mx-3' onChange={handleChange} value={data.department}>
                <option value="" selected>Select Department</option>
                <option value="">Admin</option>
                <option value="">Registry</option>
                <option value="">I.T</option>
            </select>
           <select name="asset_status" className='form-design mx-3' onChange={handleChange} value={data.asset_status}>
               <option value="" selected>Select Status</option>
               <option value="">Working</option>
               <option value="">Not Working</option>
           </select>
       </div>
        <div>
            <input type="text" name="custodian_name" placeholder='Custodian Name' className='form-design mx-3' onChange={handleChange} value={data.custodian_name}/>
            <input type="text" name="asset_condition" placeholder='Asset Condition E.g Good' className='form-design mx-3' onChange={handleChange} value={data.asset_conditon}/>
        </div>

       <div>
            <input type="date" name="date_issued"  className='form-design mx-3 ' onChange={handleChange} value={data.date_issued}/>
            <input type="date" name="date_of_last_service" className='form-design mx-3 ' onChange={handleChange} value={data.date_of_last_service}/>
       </div>
       <div>
            <input type="text" name="request_status" placeholder='Request Status' className='form-design mx-3' onChange={handleChange} value={data.request_status}/>
            <input type="text" name="request" placeholder='Request Details' className='form-design mx-3' onChange={handleChange} value={data.request}/>
        </div>
       <div>
            <input type="number" name="value" placeholder='Purchase Value $00.00' className='form-design mx-3' onChange={handleChange} value={data.value}/>
            <input type="text" name="asset_gf" placeholder='Asset GF #' className='form-design mx-3' onChange={handleChange} value={data.asset_gf}/>
       </div>
       <button className='btn btn-info' onClick={redirect}>
           Add Asset
       </button>
        
      </form>
    </div>
  )
}

export default AddAsset
