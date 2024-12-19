import React, { useEffect, useState } from 'react'
import { data, useLoaderData, Link } from 'react-router-dom';
import './Employees.css'
function Employees() {

    //One of the way to load data from API

    // const [employees,setEmployees]=useState([]);

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res=> res.json())
    //     .then(data => setEmployees(data))
    // },[])
    const employees = useLoaderData()
    // console.log(employees)

  return (
    <div>
        <h1>Our Employees</h1>
        <h2>Total Employees: {employees.length}</h2>
        <div className='employee-container'>
            {
                employees.map((employee) =>{
                    return(
                        <div className='employee' key={employee.id}>
                            <h1>Name : {employee.name}</h1>
                            <p>E-mail : {employee.email}</p>
                            <Link to = {`${employee.id}`}>
                                <button>Show Details</button>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Employees