/* eslint-disable no-unused-vars */
import { useConnect, metamaskWallet, useAddress,useContract,useContractRead,useDisconnect } from "@thirdweb-dev/react"
import { useEffect, useState } from "react"
import FeatherIcon from 'feather-icons-react';

import { useConnectionStatus } from "@thirdweb-dev/react"
import contractAbi from '../contracts/abi.json'

import useStore from "../store"

import { useNavigate } from "react-router-dom"

const metamaskConfig = metamaskWallet()

const Navbar = () => {

  const [usr,setUst] = useState(null)

  const {contractaddress,user,setUser,doctorwallet,adminwallet} = useStore((state) => ({
    contractaddress:state.contractaddress,
    user:state.user,
    setUser:state.setUser,
    doctorwallet:state.doctorwallet,
    adminwallet:state.adminwallet
    }))

  const navigate = useNavigate()
    
  const st = useConnectionStatus()
  const disconnect = useDisconnect()


  const connect = useConnect()
  const address = useAddress()

  // console.log(address)

  const {contract} = useContract(
    contractaddress,contractAbi.abi
    )

    const {data,isLoading,error} = useContractRead(
        contract,
        "getOwnerAddress"
    )

    useEffect(() => {
      // console.log(adminwallet.includes(address))
      
      if(adminwallet.includes(address)){
        // console.log('admin')
        setUser('admin')
        navigate('/admin')
      }
      else if(doctorwallet.includes(address)){
        setUser('doctor')
        navigate('/doctor')
      }
      else if(address){
        setUser('patient')
        navigate('/patient')
      }
    },[address])


  const handleconnectwallet = async() => {
     await connect(metamaskConfig)
    
  }
    
  return (
    <div className='flex justify-between items-center w-full bg-bg-primary h-[12vh] px-3'>
      <div className="flex justify-center items-center gap-2">
        <p className='text-lg font-Poppins text-white cursor-pointer'
        onClick={() => navigate('/')}
        >MedSecure</p>
        {
          user === 'patient' && <p className='text-lg font-Poppins text-white cursor-pointer' onClick={() => navigate('/patient')}>Doctors</p>
        }
        {

          user === 'admin'&& (
            <div className="flex justify-center items-center px-2 gap-2">
                <button onClick={() => {navigate('/admin/doctors')}} className='text-lg font-buttonoppins text-white cursor-pointer'>Doctors</button>
                <button onClick={() => {navigate('/admin/patients')}} className='text-lg font-Poppins text-white cursor-pointer'>Patients</button>
            </div>
          )
        }
      </div>

        {
            user && <p className="text-white font-serif font-semibold">{user}</p>
        }
        <div className="flex justify-center items-center gap-2">
            {
                st === 'connected' ? (
                    null
                ) : (
                    <button className='border-border-primary border-2 rounded-md py-2 px-3 bg-gradient-to-r from-g-stop-left to-g-stop-right font-bold text-text-primary text-Poppins text-lg tracking-wide'
            onClick={handleconnectwallet}
            >Connect Wallet</button>  )
            }
            {
                         
              user && <FeatherIcon icon="log-out" color="white" className='cursor-pointer' onClick={async() => {
                setUser(null)
                disconnect()
                navigate('/')
              }}/>

            }
        </div>
    </div>
  )
}

export default Navbar