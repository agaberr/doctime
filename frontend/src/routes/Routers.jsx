import React from 'react'

import {Routes, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import DoctorsDetails from '../pages/Doctors/DoctorsDetails'
import UserAccount from '../components/accounts/UserAccount'
import DoctorAccount from '../components/accounts/DoctorAccount'


const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:id' element={<DoctorsDetails />} />
      <Route path='/users/profile/me' element={<UserAccount />} />
      <Route path='/doctors/profile/me' element={<DoctorAccount />} />
    </Routes>
  )
}

export default Routers
