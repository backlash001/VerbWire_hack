/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useState } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Alert,
} from '@chakra-ui/react'

import { useContract,useContractWrite,useAddress } from '@thirdweb-dev/react';
import { useDisclosure } from '@chakra-ui/react'
import { Flex,Input,Text,Button } from '@chakra-ui/react'
import { Box, Center, Image, VStack } from '@chakra-ui/react';

import useStore from '../../store';

import contractAbi from '../../contracts/abi.json'


const DoctorList = () => {


    const [name, setName] = useState(''); 
    const [cat, setCat] = useState('');
    const [fees, setFees] = useState('');
    const [wallet,setWallet] = useState('')
    const [regn,setRegn] = useState('')
    const [regyr,setRegyr] = useState('')
    const [degname,setDegname] = useState('')
    const [medname,setMedname] = useState('')

    // const [all,setAll] = useState('')

    // useEffect(() => {
    //     const getall = async() => {
    //         const data = await getAll()
    //         setAll(data)
    //     }
    //     getall()
    // },[])

    const {isOpen, onOpen, onClose} = useDisclosure()

    const {contractaddress} = useStore((state) => ({
        contractaddress:state.contractaddress,
    }))

    const {contract} = useContract(
        contractaddress,contractAbi.abi
    )

    const {mutateAsync,isLoading,error} = useContractWrite(
        contract,
        "addDoctor",
    )

    // const getAll = useContractRead(
    //     contract,
    //     "getAllDoctors",
    // )

    const handleadddoctor = async() => {
        const data = await mutateAsync({
            args : [name,cat,wallet,fees,regn,regyr,degname,medname],
        })
        console.log(data)
        window.alert('Doctor Added')
        onClose()
    }
    

    
    
  return (
    <div className='w-full flex flex-col bg-bg-primary justify-start items-center h-[88vh]'>
        <button onClick={onOpen} className='text-white font-serif border-2 border-gray-500 p-2 rounded-md'>Add Doctors</button>

      <Modal isOpen={isOpen} onClose={() => {

        onClose()
      }} className='bg-bg-primary'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Doctor</ModalHeader>
          <ModalBody className='flex'>
            <Center>
            <VStack spacing={4} align="center">
                <Input placeholder='Doctor Name'  onChange={(e) => {
                    setName(e.target.value)
                }}></Input>
                <Input placeholder='Category' onChange={(e) => {
                    setCat(e.target.value)
                }}></Input>
                <Input placeholder='Fees' onChange={(e) => {
                    setFees(e.target.value)
                }}></Input>
                <Input placeholder='wallet Address' onChange={(e) => {
                    setWallet(e.target.value)
                }}></Input>
                <Input placeholder='Registartion name' onChange={(e) => {
                    setRegn(e.target.value)
                }}></Input>
                <Input placeholder='Registration year' onChange={(e) => {
                    setRegyr(e.target.value)
                }}></Input>
                <Input placeholder='Degress name' onChange={(e) => {
                    setDegname(e.target.value)
                }}></Input>
                <Input placeholder='Medical council' onChange={(e) => {
                    setMedname(e.target.value)
                }}></Input>
            </VStack>
            </Center>
          </ModalBody>
                
        <ModalFooter>
            <Button onClick={handleadddoctor}>Add Doc</Button>
        </ModalFooter>
                
        </ModalContent>
      </Modal>  
        
    </div>
  )
}

export default DoctorList