import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const View = () => {
  const [data, setData] = useState([])
  const loadData = async () => {
    const responce = await axios.post('http://localhost:5000/assets')
      setData(responce.data)
      console.log(responce.data)
  }
  const handleDelete = (id) =>{
    if(window.confirm("Are you sure you want to delete?")){
      axios.delete(`http://localhost:5000/assets/delete/${id}`)
      setTimeout(()=>{
        loadData()
      },500)
    }
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
              <th>Status</th>
              <th>Last Serviced</th>
              <th>Request</th>
              <th colSpan={2}>Action</th>
              </tr>
          </thead>
          <tbody className='bg-slate-300'>
            
            {
              data && data.map((item,index)=>{
                return(
                  <>
                    <tr className='hover:bg-slate-200' key={index}>
                  <td>{item.id}</td>
                  <td>{item.custodian_name}</td>
                  <td>{item.asset_desc}</td>
                  <td>{item.asset_sn}</td>
                  <td>{item.asset_gf}</td>
                  <td>{item.date_issued}</td>
                  <td>{item.date_issued}</td>
                  <td>{item.asset_condition}</td>
                  <td>{item.asset_status}</td>
                  <td>{item.date_of_last_service}</td>
                  <td>{item.requests}</td>
                  <td>
                      <Link to={`/assets/edit/${item.id}`}className='btn btn-info'>Edit</Link>
                  </td>
                  <td>
                      <button className='btn btn-danger'
                        onClick={()=> handleDelete(item.id)}
                      >Delete</button>
                  </td>
              </tr> 
                  </>
                )
              })
            }
             
                  
               
          </tbody>
      </table>
    </div>
  )
}

export default View
