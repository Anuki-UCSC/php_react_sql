import React from 'react';
import './loginpage.css';
import { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

    const submit=(e)=>{
        e.preventDefault();
        const data={
            email:email,
            password:password,
        };
        axios.post('http://localhost/project2_php_react_sql/backend/login.php',data)
        .then((res)=>
        {
            console.log(res);
            if(res.status===201){
                window.sessionStorage.setItem('loggedin',true);
                setError('');
                window.location.href='/home';
            }else{
                setError('Invalid User Name and Password!');
            }
        })
        .catch((err)=>{console.log('error in connection',err)});

        console.log(data);
    }

    return (
        <div>
            
            <div className="container">
            <h1>Welcome to Biz.LK</h1>
            <div className="innercont">
            <div>
            <div className="logcontainer">
                
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" 
                            className="form-control" 
                            id="exampleInputEmail1"
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" 
                            className="form-control" 
                            id="exampleInputPassword1"
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                    </div>
                    <p className="error_test">{error}</p>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
            
            </div>
            <div>
                <img src='https://elements-cover-images-0.imgix.net/1957c72f-4b61-4c12-95ce-c60705c614cf?auto=compress%2Cformat&fit=max&w=710&s=dba60e945f8c7ae0eda4bab3dca54901'/>
            </div>
            </div>
            </div>
        </div>
    )
}
