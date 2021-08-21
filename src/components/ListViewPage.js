import React from 'react';
import './listViewPage.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function ListViewPage() {

    const [userList,setUserList]=useState([
        // {id:'1',name:"Mithula", email:'aaaa', createdTime:'fff'},
        // {id:'2',name:"Thilini", school:"Kandy Central College", age:'13'},
        // {id:'3',name:"Roshaika", school:"Prathibha College", age:'11'},
        // {id:'4',name:"lithuli", school:"Kandy Central College", age:'14'},

    ]);


    useEffect(() => {
      axios.get('http://localhost/project2_php_react_sql/backend/list.php')
      .then((res)=>{
          console.log(res);
        setUserList(res.data);
    
    })
      .catch((err)=>{console.log('errars',err)})
    }, [])


    const loggout=()=>{
        window.sessionStorage.setItem('loggedin',null);
        sessionStorage.clear();
        window.location.href='/';
    }

    const DeleteRow=(id)=>{
        // e.preventDefault();
        axios.post('http://localhost/Project2_php_react_sql/backend/delete.php',id);
        const values=userList.filter(user=>user.id !== id);
        setUserList(values);

    }

    // const EditRow=(id)=>{
    //     window.location.href='/edit/'+id;
    // }

    return (
        <div className="container">
            <div className="listContainer">
                <div className="title">
                    <div className="userlist">
                        <h1>User List</h1>
                        <Link to={'/insert'}><button className='addbtn btn btn-success'>ADD</button></Link>
                    </div>
                    <div>
                        <button type="button" class="logoutbun btn btn-primary" onClick={loggout}>logout</button>
                    </div>
                </div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">email</th>
                    <th scope="col">createdTime</th>
                    <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                {userList.map((user)=>{
                    return(
                    <tr key={user.id}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.createdTime}</td>
                    <td>
                        <Link to={'/edit/'+user.id}><button className='btn btn-warning'  >Edit</button></Link>
                        {/* <button className='btn btn-warning' onClick={()=>{EditRow(user.id)}} >Edit</button> */}
                        <button className='btn btn-danger' onClick={()=>{DeleteRow(user.id)}} >Delete</button>
                    </td>
                    </tr>
                    )
})}
                    
                </tbody>
                </table>

            </div>
        </div>
    )
}
