import axios from 'axios';
import React, {useState,useEffect} from 'react';
import './editprofile.css';

export default function EditProfile(props) {

    const [id,setId]=useState(props.match.params.id);
    const [name,setName]=useState('');
    const [username,setUserame]=useState('');
    const [email,setEmail]=useState('');
    const [createdTime,setCreatedTime]=useState('');

    const [data,setData]=useState({});
  
    useEffect(() => {
        axios.get(`http://localhost/Project2_php_react_sql/backend/edit.php?id=${id}`)
       
        .then((res)=>
        {
            setName(res.data.name);
            setUserame(res.data.username);
            setEmail(res.data.email);
            setCreatedTime(res.data.createdTime); 
        })
        
    }, [])

    const updateUser=(e)=>{
        e.preventDefault();
        const datam={
            id:id,
            name:name,
            username:username,
            email:email,
        };
        console.log('ggggggggggggg',datam);
        axios.post(`http://localhost/Project2_php_react_sql/backend/edit.php?edit`,datam)
        .then((res)=>{console.log(res)
            window.location.href='/home';
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    

    return (
        <div>
            
            <div className="container1">
               
            <div className="titlebar">
                <button className='backbutton1 btn btn-success' href='/home'>Back</button>
            <h1>Edit details</h1>
            </div>
            <div className="innercont1">
            <div>
            <div className="logcontainer1">
                
                <form onSubmit={updateUser}>
                    <div className="formval mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" 
                            className="form-control" 
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            />
                    </div>
                    <div className="formval mb-3">
                        <label className="form-label">Email Address</label>
                        <input type="email" 
                            className="form-control" 
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            />
                    </div>
                    <div className="formval mb-3">
                        <label className="form-label">User Name</label>
                        <input type="text" 
                            className="form-control" 
                            value={username}
                            onChange={(e)=>{setUserame(e.target.value)}}

                            />
                    </div>
{/* 
                    {
                    data.map((item)=>{
                        <div key={item.id}>
                        <p>{item.name}</p>
                    </div>
                    })
                } */}
                
                    
                    <button type="submit" className="btn btn-success">Save Changes</button>
                </form>
            </div>
            
            </div>
            <div>
                <img src='https://media.istockphoto.com/vectors/woman-with-laptop-sitting-in-nature-and-leaves-concept-illustration-vector-id1139913278?k=6&m=1139913278&s=612x612&w=0&h=vDks140zgZAaCDrxSW0C4IabyHQI7aM8uw0MfM7gMrs='/>
            </div>
            </div>
            </div>
        
        </div>
    )
}
