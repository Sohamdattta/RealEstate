import {actionConst} from './ActionConst'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const signUp=(uservalue)=>{
  // const navigate= useNavigate();
    return async(dispatch)=>{
        dispatch({type:`${actionConst.USER_REGISTER}_REQUEST`});
        let formdata = new FormData();
      formdata.append("first_name", uservalue.firstname)
      formdata.append("last_name", uservalue.lastname)
      formdata.append("email", uservalue.email)
      formdata.append("password", uservalue.password)
      formdata.append("profile_pic", uservalue.profilepic)
        axios.post('https://wtsacademy.dedicateddevelopers.us/api/user/signup',formdata,
        {headers: {
                 "Content-Type": "application/x-www-form-urlencoded",
                 "Access-Control-Allow-Origin": '*'
               }})
        .then((res)=>{
            console.log("Res for registration:",res.data);
            dispatch({type:`${actionConst.USER_REGISTER}_SUCCESS`,
                     payload:{message:res.data.message,data:res.data}})
                     if (res.data.status === 200)
                            alert("Successful")
                          else
                            alert("Registrationfailed", +res.data.message)
                            // navigate('/Login');   
        })
        .catch((err)=>{
            console.log(err);
            dispatch({type:`${actionConst.USER_REGISTER}_FAILURE`,
                    payload:{errormsg:"Data is not registered"}})
        })
    }
}
export const signIn=(uservalue)=>{
  return async(dispatch)=>{
      dispatch({type:`${actionConst.USER_LOGIN}_REQUEST`});
      let formdata = new FormData();
          formdata.append("email", uservalue.email)
          formdata.append("password", uservalue.password)
      axios.post('https://wtsacademy.dedicateddevelopers.us/api/user/signin',formdata)
      .then((res)=>{
          console.log("Res for login:",res.data);
          window.sessionStorage.setItem('token',res.data.token)
          dispatch({type:`${actionConst.USER_LOGIN}_SUCCESS`,
                   payload:{message:res.data.message,data:res.data,token:res.data.token}})
                   if (res.data.status === 200)
              {

                   alert("Successful");
                   
                   }
               else
                 alert("login failed", +res.data.massage)
      })
      .catch((err)=>{
          console.log(err);
          dispatch({type:`${actionConst.USER_LOGIN}_FAILURE`,
                  payload:{errormsg:"Not able to login"}})
      })
  }
}

export const logout=()=>{
  return async(dispatch)=>{
      dispatch({type:`${actionConst.USER_LOGOUT}_REQUEST`})
      if(localStorage.getItem('token')!==""){
          localStorage.clear();

          dispatch({type:`${actionConst.USER_LOGOUT}_SUCCESS`,
                  payload:{message:"logout successful"}})
      }else{
          dispatch({type:`${actionConst.USER_LOGOUT}_FAILURE`,
                  payload:{errormsg:"logout failed"}})
      }
  }
}
