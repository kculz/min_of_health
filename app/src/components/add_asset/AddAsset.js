import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AddAsset = () => {
  const [assetDesc,setAssetDesc] = useState("")
  const [assetSn, setAssetSn] = useState("")
  const [assetGf, setAssetGF] = useState("")
  const [custodianName, setCustodianName] = useState("")
  const [department, setDepartment] = useState("")
  const [assetCondition, setAssetCondition] = useState("")
  const [assetStatus, setAssetStatus] = useState("")
  const [dateIssued, setDateIssued] = useState("")
  const [dateOfLastService, setDateOfLastService] = useState("")
  const [purchaseValue, setPurchaseValue] = useState(0)
  const [request, setRequest] = useState("")
  const [requestStatus, setRequestStatus] = useState("")

  const navigate = useNavigate()
  const handleSubmit = ()=> {
      axios.post('http://localhost:5000/assets/add',{
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
      }).then((responce)=>{
        console.log(responce.data)
      }).catch(()=>{

      })
      

  }
  return (
    <div className='grid place-items-center'>
      <div className="flex flex-col mt-32" >
       <div className=''>
            <input type="text" name="asset_desc" placeholder='Asset Description' className='form-design mx-3' 
            onChange={(e)=>{
              setAssetDesc(e.target.value)
            }}
            />
            <input type="text" name="asset_sn" placeholder='Asset SN #' className='form-design mx-3' 
            onChange={(e)=>{
              setAssetSn(e.target.value)
            }}
            />
       </div>
       <div>
            <select name="department" className='form-design mx-3' 
            onChange={(e)=>{
              setDepartment(e.target.value)
            }}
            >
                <option value="None" selected>Select Department</option>
                <option value="Admin">Admin</option>
                <option value="Registry">Registry</option>
                <option value="I.T">I.T</option>
            </select>
           <select name="asset_status" className='form-design mx-3' 
           onChange={(e)=>{
            setAssetStatus(e.target.value)
           }}
           >
               <option value="None" selected>Select Status</option>
               <option value="Working">Working</option>
               <option value="Not Working">Not Working</option>
           </select>
       </div>
        <div>
            <input type="text" name="custodian_name" placeholder='Custodian Name' className='form-design mx-3' 
            onChange={(e)=>{
              setCustodianName(e.target.value)
            }}
            />
            <input type="text" name="asset_condition" placeholder='Asset Condition E.g Good' className='form-design mx-3' 
            onChange={(e)=>{
              setAssetCondition(e.target.value)
            }}
            />
        </div>

       <div>
            <input type="date" name="date_issued"  className='form-design mx-3 '
            onChange={(e)=>{
              setDateIssued(e.target.value)
            }}
            />
            <input type="date" name="date_of_last_service" className='form-design mx-3 '
            onChange={(e)=>{
              setDateOfLastService(e.target.value)
            }}
            />
       </div>
       <div>
            <input type="text" name="request_status" placeholder='Request Status' className='form-design mx-3' 
            onChange={(e)=>{
              setRequestStatus(e.target.value)
            }}
            />
            <input type="text" name="request" placeholder='Request Details' className='form-design mx-3' 
            onChange={(e)=>{
              setRequest(e.target.value)
            }}
            />
        </div>
       <div>
            <input type="number" name="purchase_value" placeholder='Purchase Value $00.00' className='form-design mx-3' 
            onChange={(e)=>{
              setPurchaseValue(e.target.value)
            }}
            />
            <input type="text" name="asset_gf" placeholder='Asset GF #' className='form-design mx-3' 
            onChange={(e)=>{
              setAssetGF(e.target.value)
            }}
            />
       </div>
       <button type="submit" className='btn btn-info' onClick={()=>handleSubmit()}>
           Add Asset
       </button>
        
      </div>
    </div>
  )
}

export default AddAsset
