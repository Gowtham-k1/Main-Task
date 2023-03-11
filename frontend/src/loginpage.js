import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './loginpage.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Login(){
     const  insertdata=(e)=>{
        e.preventDefault();
        var data=new FormData(e.target)
        var data2={Headers:{"enctype":"multipart/form-data"}}
       axios.post('http://localhost:3001/insert',data,data2)
        .then(function(response){
           if(response){
             alert('your data inserted')
             window.location.href='/'
           }
        })
        .catch(function(error){
           if(error){
             alert('error')
             window.location.reload()
           }
        })
     }

     function name1(){
        var name=document.getElementById('name').value;
         var divid1=document.getElementById('divid1')
         var test1=/^[(a-z A-Z)]+$/
         if(name==""|| name==null){
              divid1.innerHTML='please enter your name'
         }
         else if(!test1.test(name)){
             divid1.innerHTML='not format'
         }
         else{
             divid1.innerHTML=""
         }
     }
     function email1(){
      var email=document.getElementById('email').value;
      var divid2=document.getElementById('divid2')
      var test3=/^[(a-z A-Z 0-9)+\@+(a-z)+\.[a-z]+$/
      var test2=/^[A-Z a-z 0-9]+\@[(a-z)]+\.[(a-z)]+$/
      if(email==""|| email==null){
        divid2.innerHTML='please enter your email'
   }
   else if(!test2.test(email)){
       divid2.innerHTML='please enter correct format'
   }
   else{
       divid2.innerHTML=""
   }

     }
     function pass(){
        var password=document.getElementById('password').value;
        var divid3=document.getElementById('divid3');
        var test4=/^[(0-9)]{4}$/

        if(password==''|| password==null){
                divid3.innerHTML='enter password'            
        }
        else if(!test4.test(password)){
              divid3.innerHTML="invalid"
        }
        else{
             divid3.innerHTML=''
        }
     }
     function mobile1(){
      var mobile=document.getElementById('mobile').value;
      var divid4=document.getElementById('divid4');
      var test4=/^[(0-9)]{10}$/

      if(mobile==''||mobile==null){
              divid4.innerHTML='enter mobile number'            
      }
      else if(!test4.test(mobile)){
            divid4.innerHTML="invalid mobile number "
      }
      else{
           divid4.innerHTML=''
      }
   }


    return(<>
    <div className='container-fluid  bg-warning'>
        <div className='row'>
            <div className='col-lg-12 text-center'><h1>Spark<span className='head'>Redeem</span></h1></div>
             <div className='col-lg-4'>
                        &nbsp;
             </div>
            
             <div className='col-lg-4 bg-white p-5'>
             <form onSubmit={insertdata}>
                   <div className='mt-3'>
                     <input type="text" name="name" id='name' className='form-control box-input' placeholder='name' onKeyUp={name1}></input>
                     <span id='divid1'></span>
                   </div>
                   <div className='mt-3'>
                     <input type="text" name="email" id='email' className='form-control box-input' placeholder='Email' onKeyUp={email1}></input>
                     <span id='divid2'></span>
                   </div>
                   <div className='mt-3'>
                     <input type="text" name="mobile" id='mobile' className='form-control box-input' placeholder='Mobile number'  onKeyUp={mobile1}></input>
                     <span id='divid4'></span>                 
                   </div>

                   <div className='mt-3'>
                     <input type="text" name="password" id='password' className='form-control box-input' placeholder='Password*(min 4,max 6 Digits)' onKeyUp={pass}></input>
                     <span id='divid3'></span>
                   </div>
                   <div className='mt-3'>
                     <input type="text" name="city" id='name' className='form-control box-input' placeholder='City'></input>
                   </div>
                   <div className='mt-3'>
                     <input type="text" name="pincode" id='name' className='form-control box-input' placeholder='pin-code'></input>
                   </div>
                   <div className='mt-3'>
                     <input type="text" name="referral" id='name' className='form-control box-input' placeholder='Referral code'></input>
                   </div>
                  
                    <ul className='list mt-3'>
                         <li><input type='checkbox' className=''/></li>
                        <li><p>I accept  <span><a> Term & conditions</a></span></p></li>
                    </ul>
                    
                  
                   <div className='mt-2 text-center '>
                      <button  type='submit'  value="submit" className='btn  bg-primary col-lg-12 btn1'> register</button>

                   </div>
                   </form> 

                
             </div>
           
             <div className='col-lg-4'>
                        &nbsp;
             </div>
               <div className='col-lg-12 text-center'>
                <span>Are you register user ?<span className='head1'>Login</span> now!</span>

               </div>

        </div>

    </div>
    <Link to='/dashboard'>profile view</Link>
    <Link to='/delete'>profile delete</Link>
    

   

   
    
    
    
    
    
    
    
    
    
    
    
    
    </>)
}