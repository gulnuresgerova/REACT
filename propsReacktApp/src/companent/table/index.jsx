import React from 'react'
import "./index.css"
const Table = ({users}) => {
  return (
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>street</th>
                <th>Phone</th>
                <th>Company name</th>
            </tr>
        </thead>
        <tbody>
            {
              users.map((e)=>{
                return(
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.address.street}</td>
                    <td>{e.phone}</td>
                    <td>{e.company.name}</td>
                  </tr>
                )
              })
            }
        </tbody>
    </table>
  )
}

export default Table