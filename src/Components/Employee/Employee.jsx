import React from 'react'
import { useLoaderData, useParams, Link } from 'react-router-dom'

function Employee() {
    const {id}= useParams();
    const employeeDetails = useLoaderData();
    console.log(employeeDetails)
    console.log(id)
  return (
    <div>
        <h2>Employee: {id}</h2>
        <h2>Name: {employeeDetails.name}</h2>
        <h2>Username: {employeeDetails.username}</h2>
        <h2>Email: {employeeDetails.email}</h2>
        <h2>Phone: {employeeDetails.phone}</h2>
        <h2>Website: {employeeDetails.website}</h2>
        <h2>Company: {employeeDetails.company.name}</h2>

        
    </div>
  )
}

export default Employee