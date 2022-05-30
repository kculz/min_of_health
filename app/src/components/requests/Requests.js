import React from 'react'

const Requests = () => {
  return (
    <div className='container'>
      <table cellPadding={10}>
          <thead className='bg-slate-400 p-5'>
              <tr>
              <th>#</th>
              <th>Asset Description</th>
              <th>Request Details</th>
              <th>Department</th>
              <th>Facility</th>
              <th colSpan={2}>Action</th>
              </tr>
          </thead>
          <tbody className='bg-slate-300'>
            <tr className='hover:bg-slate-200'>
                <td>1</td>
                <td>Lenovo IdeaPad</td>
                <td>Request Details</td>
                <td>Admin</td>
                <td>PMD</td>
                <td>
                    <button className="btn btn-info">Accept</button>
                </td>
                <td>
                    <button className="btn btn-danger">Decline</button>
                </td>
            </tr>
          </tbody>
          </table>
    </div>
  )
}

export default Requests
