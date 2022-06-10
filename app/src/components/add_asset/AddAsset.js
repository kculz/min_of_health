import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AddAsset = () => {
  const initialState = {
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
      requests_status: ''
  }
  const [data,setData] = useState(initialState)
  const {asset_desc,asset_conditon,asset_gf,asset_sn,asset_status,department,custodian_name,date_issued,date_of_last_service,purchase_value,requests,requests_status} = data


  const handleChange = (e) => {
    setData({...data, [e.target.name]: [e.target.value]})
  }


  const navigate = useNavigate()
  const handleSubmit = async ()=> {
      const responce = await axios.post('http://localhost:5000/assets/add',{asset_desc:asset_desc,asset_sn:asset_sn,asset_gf:asset_gf,custodian_name:custodian_name,department:department,asset_conditon:asset_conditon,asset_status:asset_status,date_issued:date_issued,date_of_last_service:date_of_last_service,purchase_value:purchase_value,requests:requests,requests_status:requests_status})
      .then((responce)=>{
        navigate('/dashboard')
      })
      .catch(()=>{
        console.log(`something went wront`)
      })

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
       <button className='btn btn-info' onClick={()=> handleSubmit}>
           Add Asset
       </button>
        
      </form>
    </div>
  )
}

export default AddAsset
