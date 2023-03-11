import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css'

export default function Update() {
        let {id}=useParams();
         const[name,setname]=useState('')
         const[email,setemail]=useState('')
         const[mobile,setmobile]=useState('')
         const[password,setpassword]=useState('')
         const[city,setcity]=useState('')
         const[pincode,setpincode]=useState('')
         const[refferl,setrefferl]=useState('')

         useEffect(()=>{
            console.warn(id);
            fetch('http://localhost:3001/getdetails/'+id)
            .then((res)=>res.json())
            .then((response)=>{
                setname(response[0].name)
                setemail(response[0].email)
                setmobile(response[0].mobile)
                setpassword(response[0].password)
                setcity(response[0].city)
                setpincode(response[0].pincode)
                setrefferl(response[0].refferl)
            })
           
         },[])
    return (
        <>
            <div className='container-fluid  bg-warning'>
                <div className='row'>
                    <div className='col-lg-12 text-center'><h1>UPDATE PAGE</h1></div>
                    <div className='col-lg-4'>
                        &nbsp;
                    </div>

                    <div className='col-lg-4 bg-white p-5'>
                        <form>
                            <div className='mt-3'>
                                <input type="text" name="name" id='name' className='form-control '  value={name}
                                  onChange={(e)=>setname(e.target.value)}></input>
                            </div>
                            <div className='mt-3'>
                                <input type="text" name="email" id='name' className='form-control ' value={email}
                                onChange={(e)=>setemail(e.target.value)}></input>
                            </div>
                            <div className='mt-3'>
                                <input type="text" name="mobile" id='name' className='form-control '  value={mobile}
                                onChange={(e)=>setmobile(e.target.value)}></input>
                            </div>
                            <div className='mt-3'>
                                <input type="text" name="password" id='name' className='form-control ' value={password}
                                onChange={(e)=>setpassword(e.target.value)}></input>
                            </div>
                            <div className='mt-3'>
                                <input type="text" name="city" id='name' className='form-control '  value={city}
                                onChange={(e)=>setcity(e.target.value)}></input>
                            </div>
                            <div className='mt-3'>
                                <input type="text" name="pincode" id='name' className='form-control '  value={pincode}
                                onChange={(e)=>setpincode(e.target.value)}></input>
                            </div>
                            <div className='mt-3'>
                                <input type="text" name="referral" id='name' className='form-control'  value={refferl}
                                onChange={(e)=>setrefferl(e.target.value)}></input>
                            </div>
                               <div className='mt-5 text-center '>
                                <button type='submit' value="submit" className='btn  bg-primary col-lg-12 btn1'>UPDATE</button>

                            </div>
                        </form>


                    </div>

                    <div className='col-lg-4'>
                        &nbsp;
                    </div>


                </div>

            </div>












        </>
    );
}