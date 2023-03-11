import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import { Link } from "react-router-dom";
export default function Dele() {
    const [data, getdata] = useState([]);

    useEffect(() => {
        load_data();
    }, [])
    const load_data = () => {
        axios.post('http://localhost:3001/getdata')
            .then(function (res) {
                getdata(res.data)
            })
    }

     const deletedata=(a)=>{
          var add={id:a};
          var config={Headers:{"enctype":"multipart/form-data"}}
          axios.post('http://localhost:3001/delete',add,config)
          .then((Response)=>{
             if(Response){
                  alert('your information deleted')
                  window.location.href='/'
             }
          })
          .catch((error)=>{
             if(error){
                  alert('error')
                  window.location.href='/'
             }
          })
     }




    return (<>
        <div className="contanier-fluid bg-warning">
            <div className="row">
                <div className="col-lg-12 table-responsive mt-5">
                    <form>
                        <table className="table table-bordered responsive" >
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <td>email</td>
                                    <td>mobile number</td>
                                    <td>password</td>
                                    <td>city</td>
                                    <td>pin-code </td>
                                    <td>refferl-code</td>
                                    <td>action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((value, index) => (
                                        <tr key={index}>
                                            <td>{value.id}</td>
                                            <td>{value.name}</td>
                                            <td>{value.email}</td>
                                            <td>{value.mobile}</td>
                                            <td>{value.password}</td>
                                            <td>{value.city}</td>
                                            <td>{value.pincode}</td>
                                            <td>{value.referral}</td>
                                           <td><button type="button" id="data_del" name="data_del" onClick={()=>deletedata(value.id)} className="btn btn-danger">
                                        Delete
                                        </button></td> 
                                        <td><Link to={'/updatepage/'+value.id}><button type="button"  className="btn bg-success">update</button></Link></td>
                                        </tr>
                                    ))
                                }

                            </tbody>

                        </table>
                    </form>

                </div>

            </div>

        </div>











    </>)
}