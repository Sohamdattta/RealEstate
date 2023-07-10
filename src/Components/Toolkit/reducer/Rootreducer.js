import {combineReducers} from 'redux';
import AuthReducers from './Authreducer';

const RootReducer= combineReducers({
    auth:AuthReducers
})
export default RootReducer;