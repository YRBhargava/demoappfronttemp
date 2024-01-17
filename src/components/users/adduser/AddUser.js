import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import DataProvider from '../../../context/context';

export default function AddUser() {

let navigate=useNavigate();

const [user, setuser] = useState({
    name: "",
    username: "",
    email: ""
})

    const onInputChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async(e) => {
        e.preventDefault();
        if(user.email==""||user.name==""||user.username==""){
            alert("Enter complete details")
            //navigate('/adduser')
            //console.log(user)
            setuser({name:"",username:"",email:""})
        }
        else{
        await axios.post('http://localhost:8080/user',user)
        navigate('/')
        }
        
    }
    //console.log(user)
    const { name, username, email } = user;

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 m-2'>
                    <h2 className='text-centre m-4'>
                        Add User
                    </h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-label'>
                                Name
                            </label>
                            <input type={'text'} className='form-control' placeholder='Enter name' name='name' value={name} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='Username' className='form-label'>
                                Username
                            </label>
                            <input type={'text'} className='form-control' placeholder='Enter Username' name='username' value={username} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>
                                Email
                            </label>
                            <input type={'text'} className='form-control' placeholder='Enter Email' name='email' value={email} onChange={(e) => onInputChange(e)} />
                        </div>

                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                        <Link type='submit' className='btn btn-outline-danger mx-2' to='/'>Cancel</Link>
                    </form>    
            </div>
            
        </div>


        </div >


    )
}
