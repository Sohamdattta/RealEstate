import React,{Suspense} from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import SignIn from './Components/Reg/Reg'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Common/Footer/Footer'
import Buycard from './Components/Buy/Buycard'
import Navbtn from './Components/Navbtn/Navbtn'
import Details from './Components/Details/Details'
// import Pay from './Components/Payment/Pay'
// import Pdetails from './Components/pdetails/pdetails'
import Contact from './Components/Contact/Contact'
import Login from './Components/Login/Login'
import Firstlook from './Components/FirstLook/Firstlook'
import Loading from './Components/loading/loading'
import Profile from './Components/Profile/profile'

import ProtectedRoutes from './Components/Protectedrouting/pr'



let Pay= React.lazy(()=>{
  return new Promise((resolve)=>{
    setTimeout(()=>resolve(import('./Components/Payment/Pay')),3000)
  })

});


let Pdetails= React.lazy(()=>{
  return new Promise((resolve)=>{
    setTimeout(()=>resolve(import('./Components/pdetails/pdetails')),3000)
  })

});
const Routing = () => {
 
 
  
  return (
    <div>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
        
            <Navbar/>
            <Suspense fallback={<Loading/>}>
            <Routes>
            
                <Route path='/signup'  element={<SignIn/>}/>
                <Route path='/signin'  element={<Login/>}/>
                <Route path='/'  element={<Home/>}/>
                <Route path='/buy'   element={<Buycard/>}/>
                <Route path='/nb' element={<Navbtn/>}/>
                <Route path='/pay' element={<Pay/>}/>
                <Route path='/pay/:id' element={<Pdetails/>}/>
                <Route path='/con' element={<Contact/>}/>
                <Route path='/pro' element={<Profile/>}/>
                <Route path='/fst' element={<Firstlook/>}/>
                <Route element={<ProtectedRoutes/>}>
                <Route path='/details/:id' element={<Details/>}/>
                </Route>
            </Routes>
            </Suspense>
        </Router>
    </div>
  )
}

export default Routing