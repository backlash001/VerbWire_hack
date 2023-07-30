/* eslint-disable no-unused-vars */
import { useConnect, metamaskWallet, useAddress } from "@thirdweb-dev/react"
import { useEffect, useState } from "react"

import { useConnectionStatus } from "@thirdweb-dev/react"



import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import DoctorHome from "./pages/Doctor/DoctorHome"

import useStore from "./store"
import PatientHome from "./pages/Patient/PatientHome"
import AdminHome from "./pages/Admin/AdminHome"
import SpecifiedDoctorList from "./pages/Patient/SpecifiedDoctorList"
import Landing from "./pages/Landing"
import FileCoinUpload from "./components/FileCoinUpload"
import DoctorList from "./pages/Admin/DoctorList"
import PatientList from "./pages/Admin/PatientList"

function App() {

  const[doctors, getDoctors] = useState(false)
  const [usr,setUsr] = useState(null)

  const {user} =  useStore((state) => ({
    user:state.user,
  }))

  useEffect(() => {
    setUsr(user)
  },[user])
  
  return(
    <div className="h-full w-full">
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/doctor/:id' element={<SpecifiedDoctorList />} />
      <Route path= '/uploaddoc' element = {<FileCoinUpload />} />
      <Route path= '/admin/doctors' element = {<DoctorList />} />
      <Route path= '/admin/patients' element = {<PatientList />} />
      {
        user === 'patient' && <Route path='/patient' element={<PatientHome />} />
      }
      {
        user === 'doctor' && <Route path='/doctor' element={<DoctorHome />} />
      }
      {
        user === 'admin' && <Route path='/admin' element={<AdminHome />} />
      }
    </Routes>
    </div>
  )
  
}

export default App
