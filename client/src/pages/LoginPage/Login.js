import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import Axios from 'axios'

const Login = () => {
  const [formData, setFormData] = useState({phone: '', password: ''});
  const [data, setData] = useState('');
  
  const validationSchema = Yup.object().shape({
    phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        const { phone, password } = formData;
        const url = `http://localhost:8080/login/${phone}/${password}`; 
        Axios.get(url).then((response) => {
          if(response.data.status=='success'){
            alert("Login successfully")
            window.location.href = "/";
          }
          else if(response.data.status=='wrong'){
            alert("Invalid login credentials")
          }
          else{
            alert(response.data.status)
          }
      })
      });
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    );
  };
  
  export default Login;