import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default function Dash(){
      const [details,setdetails]=useState([])


      useEffect(()=>{
             fetch('http://localhost:3001/getdata')
             .then((res=>res.json()))
             .then(data=>setdetails(data))
      },[])
    return(
    <>
    <div className="conatiner-fluid bg-warning p-5 ">
        <div className="row">
            <div className="col-lg-12  table-responsive mt-5">
              <table className="table table-bordered" width='100%'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>mobile number</th>
                        <th>password</th>
                        <th>city</th>
                        <th>pin code </th>
                        <th>referral code</th>

                    </tr>

                </thead>
                <tbody>
                  {
                     details.map((value,index)=>(
                          <tr>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.mobile}</td>
                            <td>{value.password}</td>
                            <td>{value.city}</td>
                            <td>{value.pincode}</td>
                            <td>{value.referral}</td>
                          
                          </tr>
                     )) 
                  }
                </tbody>
              </table>

            </div>

        </div>

    </div>
    
    
    
    
    
    
    
    </>)
}