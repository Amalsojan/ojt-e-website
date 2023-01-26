import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import Navbar2 from '../../components/Navbar/Navbar2';

function Login1() {
    const [username, usernamepost] = useState("");
    const [password, passwordpost] = useState("");
    const navgate = useNavigate();

    const loginuser = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/customer/" + username).then((res) => {
            return res.json();
        }).then((resp) => {
            console.log(resp)
            if (Object.keys(resp).length === 0) {
                alert("enter valid username")
            } else {
                if (resp.password === password) {
                    alert('sucessfully login');
                    sessionStorage.setItem('username', username);
                    navgate('/')
                }
                else {
                    alert("enter valid password")
                }
            }
        }).catch((err) => {
            alert.err("Login fail" + err)
        });
    }
    return (
        <>
            <Navbar2 />
            <div className="container" id='top'>
                <form onSubmit={loginuser} className="container">
                    <div className="card shadow-lg  crd">
                        <div className="card-header crdh">
                            {/* <div>
                                <h2><span style={{ fontSize: '25px', color: 'rgb(252, 252, 29)' }}>Mini Cart<br /></span>User Login</h2>
                            </div> */}
                        </div>
                        <div className="card-body crdb">
                            <div className="form-group cb">
                                <label htmlFor="">User Name</label>
                                <input value={username} onChange={e => usernamepost(e.target.value)} type="text" className="form-control" />
                            </div>
                            <div className="form-group mt-2 cb">
                                <label htmlFor="">Password</label>
                                <input value={password} onChange={e => passwordpost(e.target.value)} type="password" className="form-control" />
                                <div><Link to={'/forgot'} style={{ color: 'white' }}>Forgot Password?</Link></div>
                            </div>
                        </div>
                        <div className="card-footer crdf">
                            <button type="submit" className="btn btn-primary  bt" >Login</button> <br />
                            <Link className="btn btn-success ms-2  bt" to={'/registration'}>New User</Link>
                        </div>
                    </div>
                </form>
            </div>

        </>

    )
}
export default Login1;