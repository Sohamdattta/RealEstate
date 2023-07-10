import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
  let navigate= useNavigate();
    let valid_token=window.sessionStorage.getItem("token")
    console.log(valid_token);
    let [user,setuser] = useState({
      first_name: "",
      last_name:"",
      email:"",
      password:"",
      profile_pic:""
    })
    useEffect(()=>{
        axios.get('https://wtsacademy.dedicateddevelopers.us/api/user/profile-details',{headers: {
            "x-access-token": valid_token,
            "Content-Type": "application/x-www-form-urlencoded"
          },})
          .then((res)=>{
            console.log(res.data);
        if (res.data.status ===200){
            let base_url="https://wtsacademy.dedicateddevelopers.us/";
            let folder_path="uploads/user/profile_pic/"
            let image_url= base_url+folder_path+res.data.data.profile_pic

            setuser({
              ...user,
              first_name:res.data.data.first_name,
              last_name:res.data.data.last_name,
              email:res.data.data.email,
              password:res.data.data.password,
              profile_pic:image_url
            })
        }else {
          alert(res.data.message + "\n\nPlease log in again")
          navigate('/signin')
        }
          })
          .catch(err=>{
            console.log(err);
          })
    },[])
  return (
    <div className='profilediv'>
      <div className='profile_part'>
        <div className='left_part'>
          <img src={user.profile_pic} alt='user image' width="200"/>
        </div>
        <div className='right_part'>
          <h2>
            {user.first_name} {user.last_name}
            </h2> 
            <h4>{user.email}</h4>
            
        </div>
      </div>
    </div>
  )
}

export default Profile