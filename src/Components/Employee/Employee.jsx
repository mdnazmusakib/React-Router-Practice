import React from 'react'
import { useLoaderData, useParams, Link, useNavigate } from 'react-router-dom'

function Employee() {
    const {id}= useParams();
    const employeeDetails = useLoaderData();
    console.log(employeeDetails)
    console.log(id)

    const navigate = useNavigate()
  return (
    <div>
        <h2>Employee: {id}</h2>
        <h2>Name: {employeeDetails.name}</h2>
        <h2>Username: {employeeDetails.username}</h2>
        <h2>Email: {employeeDetails.email}</h2>
        <h2>Phone: {employeeDetails.phone}</h2>
        <h2>Website: {employeeDetails.website}</h2>
        <h2>Company: {employeeDetails.company.name}</h2>

        {/* <button onClick={()=> navigate("/employees")}>Back</button> */}

        {/* if we use -1 in navigate it will back to the last page from where we come into this page */}

        <button onClick={()=> navigate(-1)}>Back</button>
    </div>
  )
}

export default Employee