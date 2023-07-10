import React from 'react'
import './Login.css'
import { useFormik } from "formik"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

    let formValidate = (formValue) => {
  
        const errors = {};
        let emailValidate = /^([a-z0-9.]+)@([a-z]{5,12}).([a-z.]{2,20})$/;
        if (!formValue.email) {
          errors.email = "please enter email";
        }
        else if (!emailValidate.test(formValue.email)) {
          errors.email = "wrong pattern"
        }
        if (!formValue.password) {
          errors.password = "please enter password";
        }
        console.log("Errors", errors)
        return errors
      }
    
    const Login = () => {
      const navigate= useNavigate();
      
       
        
          let formik = useFormik({
            initialValues: {
                 email: "", password: ""
              },
              validate: formValidate,
              onSubmit: (event) => {
                console.log("submitted data", event);
                let formdata = new FormData();
                formdata.append("email", event.email)
                formdata.append("password", event.password)
          
                axios.post("https://wtsacademy.dedicateddevelopers.us/api/user/signin", formdata )
                  .then(res => {
                    console.log(res);
                    if (res.data.status === 200)
                    {
    
                        alert("Successful");
                        window.sessionStorage.setItem("token",res.data.token)
                        navigate('/pro');
    
                    }
                    else
                      alert("login failed", +res.data.massage)
                  })
                  .catch(err => {
                    console.log(err);
                    alert('Not done')
                  })
              }
            
              })
  return (
    <div className="login-box">
      <form onSubmit={formik.handleSubmit}>
      <div className="left-box">
        <h2> Sign In </h2>
      
        <input type="text" name="email" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.email && formik.errors.email ? (
          <span>{formik.errors.email}</span>
        ) : (
          ""
        )}
        <input type="password" name="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.password && formik.errors.password ? (
          <span>{formik.errors.password}</span>
        ) : (
          ""
        )}
       
       <button type="submit" disabled={!(formik.dirty && formik.isValid)} name="singup-button">submit</button>
      </div>
      
      <div className="right-box">
        <span className="signinwith">Continue with<br/>Social Network </span>
        <button className="social facebook">Continue with Facebook</button>
        <button className="social twitter">Continue with Twitter</button>
        <button className="social google">Continue with Google+</button>
      </div>
      <div className="or">OR</div>
      </form>
    </div>
  )
}

export default Login