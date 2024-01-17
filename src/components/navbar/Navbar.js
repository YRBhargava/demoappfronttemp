import React from 'react'
import App from '../../App'
import { Link } from 'react-router-dom'
import AddUser from '../users/adduser/AddUser'

export default function navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" >Demo application</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* 1 warning resolved */}
                    <Link className="btn btn-outline-primary" type="submit" to="/adduser">Add User</Link>
                    
                </div>
            </nav>
        </div>
    )
}


