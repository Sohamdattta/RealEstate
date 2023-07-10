import {actionConst} from '../Action/ActionConst'


const initState={
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    profile_pic:"",
    message:"",
    error:"",
    authtoken:'',
    authentiCated:''
}

const AuthReducers=(state=initState,action)=>{
    switch(action.type){
        //registration
        case`${actionConst.USER_REGISTER}_REQUEST`:
        return{
            ...state
        };

        case`${actionConst.USER_REGISTER}_SUCCESS`:
        return{
            ...state,message:action.payload.message
        };

        case`${actionConst.USER_REGISTER}_FAILURE`:
        return{
            ...state,error:action.payload.errormsg
        };

        case`${actionConst.USER_LOGIN}_REQUEST`:
        return{
            ...state
        };

        case`${actionConst.USER_LOGIN}_SUCCESS`:
        return{
            ...state,
            message:action.payload.message,
            authentiCated:true,
            authtoken:action.payload.token
        };

        case`${actionConst.USER_LOGIN}_FAILURE`:
        return{
            ...state,
            error:action.payload.errormsg
        };
        //logout
        case`${actionConst.USER_LOGOUT}_REQUEST`:
        return{
            ...state
        };

        case`${actionConst.USER_LOGOUT}_SUCCESS`:
        return{
            ...state,
            message:action.payload.message,
            authentiCated:false,
            authtoken:""
        };

        case`${actionConst.USER_LOGOUT}_FAILURE`:
        return{
            ...state,
            error:action.payload.errormsg
        };
        
        default: return state;

    }
}
export default AuthReducers;