// import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
// import axios from "axios";



// export const fetchPosts= createAsyncThunk("post/fetchPosts",async()=>{
//     const res = await axios.post("https://wtsacademy.dedicateddevelopers.us/api/user/signup", formdata, 
//     {headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       "Access-Control-Allow-Origin": '*'
//     }})
//     return res?.data
// })
// const initState={
//     first_name:"",
//     last_name:"",
//     email:"",
//     password:"",
//     profile_pic:"",
//     message:"",
//     error:"",
    
// }

// let formData = new FormData();
// formData.append("first name",inputState.fname);
// formData.append("last name",inputState.lname);
// formData.append("Email",inputState.email);
// formData.append("password",inputState.password);
// formData.append("Confirmpassword",inputState.confirmpassword);
// formData.append("profile_pic",imgState);
// export const postSlice = createSlice({
//     name:"posts",
//     initialState:initState,
//     extraReducers:(builder)=>{
//         builder.addCase(fetchPosts.pending,(state=initState,action)=>{
//             state.isLoading=true;
//         })
//         builder.addCase(fetchPosts.fulfilled,(state=initState,action)=>{
//             state.isLoading=false;
//             state.posts=action.payload;
//             state.error=null;
//         })
//         builder.addCase(fetchPosts.rejected,(state=initState,action)=>{
//             state.isLoading=false;
//             state.posts=[];
//             state.error=action.error.message;
//         })


//     }
// })