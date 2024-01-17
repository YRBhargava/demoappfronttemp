import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { DataContext } from '../../../context/context';

export default function Home() {

  useEffect(() => {
    loadUsers()
  }, [])

  const headers = {
    "Content-Type": "application/json"
  };

  const { id } = useParams();
  const { users, deleteUser, loadUsers } = useContext(DataContext);


  return (
    <div className='container py-5'>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{
          users.map((user, index) => {
            return (
              <tr key={index}>
              <th scope="row" >{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link className='btn btn-primary mx-2' to={`/viewuser/${user.id}`}>View</Link>
                <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>Edit</Link>
                <button className='btn btn-danger mx-2' onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>)

          })
        }

        </tbody>
      </table>

    </div>
  )
}



