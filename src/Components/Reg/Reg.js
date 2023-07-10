import React from 'react'
import { useFormik } from "formik"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import './Reg.scss'
const Reg = () => {
    
  const navigate= useNavigate();
  const formValidate = (formValue) => {
    const errors = {};
    let emailValidate = /^([a-z0-9.]+)@([a-z]{5,12}).([a-z.]{2,20})$/;
    
    if (!formValue.firstname) {
      errors.firstname = "please enter firstname";

    }
    if (!formValue.lastname) {
      errors.lastname = "please enter lastname";
    }
    if (!formValue.email) {
      errors.email = "please enter email";
    }
    else if (!emailValidate.test(formValue.email)) {
      errors.email = "wrong pattern"
    }

    if (!formValue.password) {
      errors.password = "please enter password";
    }


    //   if(!formValue.profilepic){
    //     errors.profilepic="please enter profilepic";
    // }
    console.log("Errors", errors)

    return errors


  }
  let formik = useFormik({
    initialValues: {
      firstname: "", lastname: "", email: "", password: "", profilepic: ""
    },
    validate: formValidate,
    onSubmit: (event) => {
      console.log("submitted data", event);
      let formdata = new FormData();
      formdata.append("first_name", event.firstname)
      formdata.append("last_name", event.lastname)
      formdata.append("email", event.email)
      formdata.append("password", event.password)
      formdata.append("profile_pic", event.profilepic)

      axios.post("https://wtsacademy.dedicateddevelopers.us/api/user/signup", formdata, 
        {headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": '*'
        }})
        .then(res => {
          console.log(res);
          if (res.data.status === 200)
            alert("Successful")
            
          else
            alert("Registrationfailed", +res.data.message)
            navigate('/signin')
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
        <h2> Sign Up </h2>
        <input type="text" name="firstname" placeholder="First Name" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.firstname && formik.errors.firstname ? (
          <span>{formik.errors.firstname}</span>
        ) : (
          ""
        )}
        <input type="text" name="lastname" placeholder="Last Name" value={formik.values.lastname} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.lastname && formik.errors.lastname ? (
          <span>{formik.errors.lastname}</span>
        ) : (
          ""
        )}
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
        <input type="file" name="profilepic" onChange={(event)=>
        formik.setFieldValue("profilepic",event.target.files[0])} onBlur={formik.handleBlur}/>
        {formik.touched.profilepic && formik.errors.profilepic ? (
          <span>{formik.errors.profilepic}</span>
        ) : (
          ""
        )}
        <br/>
       <button type="submit" disabled={!(formik.dirty && formik.isValid)} name="singup-button">submit</button>
      </div>
      
      <div className="right-box">
        <span className="signinwith">Sign in with<br/>Social Network </span>
        <button className="social facebook">Log in with Facebook</button>
        <button className="social twitter">Log in with Twitter</button>
        <button className="social google">Log in with Google+</button>
      </div>
      <div className="or">OR</div>
      </form>
    </div>
  )
}

export default Reg


