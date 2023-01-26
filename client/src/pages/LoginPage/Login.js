import React, { useState } from 'react';
import './Login.css';
import { Twitter, Google, Facebook } from "../../utils/images";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { message } from "./ErrorMessage";


export default function Login() {

    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get('email'),
            password: data.get('password'),
        }
        if (actualData.email && actualData.password) {
            console.log(actualData);

            document.getElementById('login-form').reset()
            setError({ status: true, msg: "Login Success", type: 'success' })
            navigate('/')
        } else {
            setError({ status: true, msg: "All Fields are Required", type: 'error' })
        }
    }



    // const handleSubmit = () => {
    //     alert("Login Successfully..!!")
    // }
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email(message.email).required("Required"),

            password: Yup.string()
                .min(8, "Must be at least 8 characters")
                .max(15, "Must be 15 characters or less")
                .required(message.required),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
        validateOnMount: true,
        enableReinitialize: true,
    });

    return (
        <div className="col-lg-6" style={{ marginLeft: '15vw', width: '70vw' }}>
            <div className="card2 card border-0 px-4 py-5">
                <div className="row mb-5 px-3" style={{ display: 'flex', padding: '10px' }}>
                    <h4 className="mb-0 mr-4 mt-2" style={{ marginLeft: '185px' }}>Sign in with</h4>
                    <Link to='/login' className=" text-center mr-3" id='facebook' style={{ marginTop: '10px', marginLeft: '40px' }}>< img src={Facebook} alt="" /></Link>
                    <Link to='/login' className=" text-center mr-3" id='twitter' style={{ marginTop: '10px', marginLeft: '40px' }}><img src={Twitter} alt="" /></Link>
                    <Link to='/login' className=" text-center mr-3" id='google' style={{ marginTop: '10px', marginLeft: '40px' }}><img src={Google} style={{ height: '20px' }} alt="" /></Link>
                </div>
                <div className="row px-3 mb-4" >
                    <div className="line"></div>
                    <small className="or text-center">Or</small>
                    <div className="line"></div>
                </div>
                <form id='login-form' onSubmit={handleSubmit} >
                    <div className="row px-3">
                        <label htmlFor="email" className="mb-1"><h6 className="mb-0 text-sm" id="lab1">Email</h6></label>
                        <input id="email" className="mb-4" type="text" name="email" placeholder="Enter as  'example@gmail.com' " {...formik.getFieldProps("email")} />
                        {formik.touched.email && !formik.errors.email ? <>✅</> : <>❌</>}
                    </div>
                    <div className="row px-3">
                        <label htmlFor="password" className="mb-1"><h6 className="mb-0 text-sm" id="lab2">Password</h6></label>
                        <input type="password" id="password" name="password" placeholder="Password must be 8 character " {...formik.getFieldProps("password")} />
                        {formik.touched.password && !formik.errors.password ? <>✅</> : <>❌</>}
                    </div>
                    <br></br>
                    <div className="row mb-3 px-3" >
                        <button type="submit" variant='contained' className="btn btn-blue text-center" id='login' >Login</button>
                    </div>
                    {error.status ? <alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</alert> : ''}
                </form>
                <div className="row px-3 mb-4" style={{ marginLeft: '450px' }}>
                    <Link to='/login' className="ml-auto mb-0 text-sm" >Forgot Password?</Link>
                </div>
                <div className="row mb-4 px-3" style={{ marginLeft: '185px' }} >
                    <h5 className="font-weight-bold">Don't have an account? <Link to='/registration' className="text-danger ">Register</Link></h5>
                </div>
            </div>
        </div>
    );
};