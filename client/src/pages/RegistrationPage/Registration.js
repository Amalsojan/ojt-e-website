import React, { useState, useRef, useEffect } from 'react';
import * as Yup from 'yup';
import './Registration.css';
import Home from '../HomePage/HomePage'
import { useNavigate } from 'react-router-dom';
import Navbar2  from '../../components/Navbar/Navbar2';

const Registration = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', password: '', confirmPassword: '' });
    // const [data, setData] = useState('');

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
    });

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     validationSchema
    //         .validate(formData, { abortEarly: false })
    //         .then(() => {
    //             const { name, phone, password } = formData;
    //             fetch("http://localhost:3000/customer",{
    //                 method:'POST',
    //                 headers:{'content-type':'application/json'},
    //                 body:JSON.stringify()
    //             })
    //                 .then((response) => response.json())
    //             // window.location.href = `/`;
    //             alert("Account created successfully!!")
    //             window.location.reload()

    //         })
    //         .catch((err) => {
    //             const validationErrors = {};
    //             err.inner.forEach((error) => {
    //                 validationErrors[error.path] = error.message;
    //             });
    //             setFormData((state) => ({ ...state, errors: validationErrors }));
    //         });
    // };

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    const navigate = useNavigate();
    const [id, unamepost] = useState("");
    const [name, namepost] = useState("");
    const [password, passwordpost] = useState("");
    const [cpassword, cpasswordpost] = useState("");
    const [email, emailpost] = useState("");
    const [phoneNo, phonepost] = useState("");

    const handleSubmit = (e) => {
        let ojb = { id, name, email, phoneNo, password, cpassword };
        console.log(ojb);
        e.preventDefault();
        fetch("http://localhost:3000/customer", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(ojb)
        }).then((res) => {
            alert("Successfully Registered")
            navigate('/login');
        }).catch((err) => {
            alert("failed")
        });
    }

    return (
        <>
        <Navbar2/>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="name" onChange={e => unamepost(e.target.value)} value={id} placeholder="Name must be minimum 5 character " />
                    {/* {formData.errors && formData.errors.username && <p className='error'>{formData.errors.username}</p>} */}
                </label>
                <label>
                    Name:
                    <input type="text" name="name" onChange={e => namepost(e.target.value)} value={name} placeholder="Name must be minimum 3 character " />
                    {/* {formData.errors && formData.errors.name && <p className='error'>{formData.errors.name}</p>} */}
                </label>
                <label>
                    Email:
                    <input type="text" name="email" onChange={e => emailpost(e.target.value)} value={email} placeholder="Phone No must be 10 digit " />
                    {/* {formData.errors && formData.errors.phone && <p className='error'>{formData.errors.phone}</p>} */}
                </label>
                <label>
                    Phone Number:
                    <input type="text" name="phone" onChange={e => phonepost(e.target.value)} value={phoneNo} placeholder="Phone No must be 10 digit " />
                    {/* {formData.errors && formData.errors.phone && <p className='error'>{formData.errors.phone}</p>} */}
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={e => passwordpost(e.target.value)} value={password} placeholder="Password must be 8 character " />
                    {/* {formData.errors && formData.errors.password && <p className='error'>{formData.errors.password}</p>} */}
                </label>
                <label>
                    Confirm Password:
                    <input type="password" name="confirmPassword" onChange={e => cpasswordpost(e.target.value)} value={cpassword} />
                    {/* {formData.errors && formData.errors.confirmPassword && <p className='error'>{formData.errors.confirmPassword}</p>} */}
                </label>
                <button type="submit" id='button'  >Sign Up</button>
            </form>
        </>
    );
};

export default Registration;