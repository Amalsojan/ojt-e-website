import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { UseFetch } from '../../components/Server';
import './Registration.css';
import Axios from 'axios'

const Registration = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', password: '', confirmPassword: '' });
  const [data, setData] = useState('');
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        const { name, phone, password } = formData;
        const url = `http://localhost:8080/save/${name}/${phone}/${password}`; 
        Axios.get(url).then((response) => {
          if(response.data.status=='success'){
            alert("Registration successfully")
            window.location.href = "/";
          }
          else if(response.data.status=='error'){
            alert("Error: ")
          }

          console.log(response.data.status);
      })
      });
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={formData.name} />
        {formData.errors && formData.errors.name && <p className='error'>{formData.errors.name}</p>}
      </label>
      <label>
        Phone Number:
        <input type="text" name="phone" onChange={handleChange} value={formData.phone} />
        {formData.errors && formData.errors.phone && <p className='error'>{formData.errors.phone}</p>}
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={handleChange} value={formData.password} />
        {formData.errors && formData.errors.password
        && <p className='error'>{formData.errors.password}</p>}
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} />
          {formData.errors && formData.errors.confirmPassword && <p className='error'>{formData.errors.confirmPassword}</p>}
        </label>
        <button type="submit">Sign Up</button>
      </form>
    );
  };
  
  export default Registration;