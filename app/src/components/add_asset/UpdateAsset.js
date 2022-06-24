import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const initialState = {
  assetDesc:'',
  assetSn: '',
  assetGf:'',
  custodianName:'',
  department:'',
  assetCondition:'',
  assetStatus:'',
  dateIssued:'',
  dateOfLastService:'',
  purchaseValue:'',
  request:'',
  requestStatus:''

}

const UpdateAsset = () => {
  const [state,setState] = useState(initialState)
  const {assetCondition,assetDesc,assetGf,assetSn,assetStatus,custodianName,department,purchaseValue,request,requestStatus,dateIssued,dateOfLastService} = state

  const handleInputChange = (e) =>{
    setState({...state,[e.target.name]:[e.target.value]})
  }

   
  const {id} = useParams()
  useEffect(()=>{
    axios.post(`http://localhost:5000/assets/${id}`)
    .then((responce)=>{
      setState({...responce.data[0]})
      navigate('/assets')
    })
  },[id])
  const navigate = useNavigate()
  const handleSubmit = ()=> {
      axios.patch(`http://localhost:5000/assets/edit`,{
        assetDesc:assetDesc,
        assetSn:assetSn,
        assetGf:assetGf,
        custodianName:custodianName,
        department:department,
        assetCondition:assetCondition,
        assetStatus:assetStatus,
        dateIssued:dateIssued,
        dateOfLastService:dateOfLastService,
        purchaseValue:purchaseValue,
        request:request,
        requestStatus:requestStatus      
      }).then((Response)=>{
        navigate('/dashboard')
      }).catch(()=>{

      })
     
  }
  return (
    <div className='grid place-items-center'>
      <div className="flex flex-col mt-32" >
       <div className=''>
            <input type="text" name="asset_desc" placeholder='Asset Description' className='form-design mx-3' 
            value={assetDesc}
            onChange={handleInputChange}
            />
            <input type="text" name="asset_sn" placeholder='Asset SN #' className='form-design mx-3' 
           value={state.assetSn}
           onChange={handleInputChange}
            />
       </div>
       <div>
            <select name="department" className='form-design mx-3' 
            value={department}
            onChange={handleInputChange}
            >
                <option value="None" selected>Select Department</option>
                <option value="Admin">Admin</option>
                <option value="Registry">Accounts</option>
                <option value="HR">Human Resources</option>
                <option value="Procurement">Procurement</option>
                <option value="Nursing">Nursing</option>
                <option value="Transport">Transport</option>
                <option value="PMD Secretary">PMD Secretary</option>
                <option value="Reports and Info">Reports & Info</option>
                <option value="Environmental Health">Environmental Health</option>
                <option value="RNCH/VMC">RNCH/VMC</option>
                <option value="Nutruition">Nutruition</option>
                <option value="Store Room">Store Room</option>
                <option value="Lab Office">Lab Office</option>


            </select>
           <select name="asset_status" className='form-design mx-3' 
           value={assetStatus}
           onChange={handleInputChange}
           >
               <option value="None" selected>Select Status</option>
               <option value="Working">Working</option>
               <option value="Not Working">Not Working</option>
               <option value="Good">Good</option>
               <option value="Not Working">Dead</option>
               <option value="Not Working">10 years & Greater</option>
           </select>
       </div>
        <div>
            <input type="text" name="custodian_name" placeholder='Custodian Name' className='form-design mx-3' 
            value={custodianName}
            onChange={handleInputChange}
            />
            <input type="text" name="asset_condition" placeholder='Asset Condition E.g Good' className='form-design mx-3' 
           value={assetCondition}
           onChange={handleInputChange}
            disabled
            />
        </div>

      
       {/* <div>
            <input type="text" name="request_status" placeholder='Request Status' className='form-design mx-3' 
            value={assetDesc}
            onChange={handleInputChange}
            />
            <input type="text" name="request" placeholder='Request ' className='form-design mx-3' 
           value={request}
           onChange={handleInputChange}
            />
        </div> */}
       <div>
            <input type="number" name="purchase_value" placeholder='Purchase Value $00.00' className='form-design mx-3' 
            value={purchaseValue}
            onChange={handleInputChange}
            />
            <input type="text" name="asset_gf" placeholder='Asset GF #' className='form-design mx-3' 
           value={assetGf}
           onChange={handleInputChange}
            />
       </div>
       <div>
            <input type="date" name="date_issued"  className='form-design mx-3 '
            value={dateIssued}
            onChange={handleInputChange}
            />
            <input type="date" name="date_of_last_service" className='form-design mx-3 '
            value={dateOfLastService}
            onChange={handleInputChange}
            />
       </div>
       <button type="submit" className='btn btn-info' onClick={()=>handleSubmit()}>
           Add Asset
       </button>
        
      </div>
    </div>
  )
}

export default UpdateAsset
