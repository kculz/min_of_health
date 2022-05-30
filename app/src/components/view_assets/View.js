import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
  const [getdata,setGetData] = useState([])


  const loadData = async() =>{
    const responce = await axios.get('http://localhost:5000/assets')
      setGetData(responce.getdata)
      console.log(responce.getdata)
      console.log("Hello")
  }
  
  useEffect(()=>{
    loadData()
  },[])

  return (
    <div className='container'>
      <table cellPadding={10}>
          <thead className='bg-slate-400 p-5'>
              <tr>
              <th>#</th>
              <th>Custodian Name</th>
              <th>Asset Desc</th>
              <th>Asset S/N#</th>
              <th>Asset G/F#</th>
              <th>Date Received</th>
              <th>Date Issued</th>
              <th>Condition</th>
              <th>Last Serviced</th>
              <th>Comment</th>
              <th>Request</th>
              <th colSpan={2}>Action</th>
              </tr>
          </thead>
          <tbody className='bg-slate-300'>
            
            {
             getdata && getdata.map((asset,index)=>{
                return(
                  <tr className='hover:bg-slate-200' key={index}>
                  <td>{asset.id}</td>
                  <td>{asset.asset_desc}</td>
                  <td>{asset.asset_sn}</td>
                  <td>{asset.asset_gf}</td>
                  <td>{asset.custodian_name}</td>
                  <td>{asset.department}</td>
                  <td>{asset.asset_condition}</td>
                  <td>{asset.date_of_last_service}</td>
                  {/* <td>{asset.comment}</td> */}
                  <td>{asset.request}</td>
                  <td>
                      <button className='btn btn-info'>Edit</button>
                  </td>
                  <td>
                      <button className='btn btn-danger'>Delete</button>
                  </td>
              </tr> 
                )
               
              })
          
            }
          </tbody>
      </table>
    </div>
  )
}

export default View
