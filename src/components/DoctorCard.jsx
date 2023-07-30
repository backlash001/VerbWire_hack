/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';

import { useContract,useContractWrite,useAddress } from '@thirdweb-dev/react';

import useStore from '../store'

import contractAbi from '../contracts/abi.json'
import { utils } from 'ethers';
import PinataUpload from './PinataUpload';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Alert,
} from '@chakra-ui/react'

import axios from 'axios'

import { useDisclosure } from '@chakra-ui/react'
import { Flex,Input,Text,Button } from '@chakra-ui/react'
import { Box, Center, Image, VStack } from '@chakra-ui/react';
import CopyToClipboard from './CopyToClipboard';

const DoctorCard = (props) => {

    const {isOpen, onOpen, onClose} = useDisclosure()

    const [toggle,setToggle] = useState(false)

    const {contractaddress} = useStore((state) => ({
        contractaddress:state.contractaddress,
    }))

    const address = useAddress()

    const data = props.data;

    const convertedInt = parseInt(data.fees._hex,16)

    // console.log(parseInt(data.fees._hex,16))

    const image = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'

    const handlebookapt = () => {
        onOpen()
        // console.log('book apt')
        // const val = await mutateAsync({
        //     args : ['0x02',"fuckyou",address,'askjvnkjfnvdsjfvndsjfvndksjfvn'],
        //     overrides:{
        //         gasLimit: 1000000,
        //         value: utils.parseEther(String(convertedInt))
        //     }
        // })
        // console.log(val)
    }

    const {contract} = useContract(
        contractaddress,contractAbi.abi
    )

    const {mutateAsync,isLoading,error} = useContractWrite(
        contract,
        "bookDoctor",
    )

    // if(error && !isLoading) { 
    //   onClose()
    //   Alert('Appointment was not booked due to lack of eth')
    // }

    const [file, setFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);
    const [uploading,setUploading] = useState(null)
    const [ipfshash,setIpfshash] = useState(null)
    const [formerr,setFormerr] = useState(false)
    const [success,setSuccess] = useState(false)


  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    // Generate a preview of the file
    const reader = new FileReader();
    reader.onloadend = () => {
      setFilePreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handledocumentSubmit = async() => {
    setUploading(!uploading)
    
    if(!file)
      return

    try {

      const formData = new FormData();
      formData.append('filePath', file);

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'X-API-Key': 'sk_live_69738b99-3235-4fc8-8d3a-0bf18a31495a'
      }
    };
      options.body = formData;
      const response = await fetch('https://api.verbwire.com/v1/nft/store/file',options)
      const response_verbwire_json = await response.json()
      console.log(response_verbwire_json.ipfs_storage.ipfs_url.split('/')[4])

      setUploading(false)

      if(response_verbwire_json.ipfs_storage.ipfs_url.split('/')[4])
        setIpfshash(response_verbwire_json.ipfs_storage.ipfs_url.split('/')[4])
      else {
        Alert('np ipfs hash present')
      }
    } catch (error) {
        setFormerr(!formerr)
    }
  }

  const handleConfirmApt = async() => {
        const val = await mutateAsync({
            args : ['0x02',"fuckyou",address,ipfshash],
            overrides:{
                gasLimit: 1000000,
                value: utils.parseEther(String(convertedInt))
            }
        })
        setFile(null)
        setSuccess(true)
        onClose() 
    }

    
  return (
    <div className='bg-bg-secondary border-2 border-border-primary rounded-lg px-2 py-3 w-72'>
        <div className='flex justify-between items-center gap-3'>
            <div className='w-20 h-20 rounded-full flex-1'>
                <img className='w-20 h-20 rounded-full flex-1 ' src={image} alt="" />
            </div>

            <div className='flex-2 flex justify-center flex-col items-start gap-1'>
                <p className='text-white font-serif text-md'>{data.name}</p>
                <p className='text-white font-serif text-md'>{data.category}</p>
                <p className='text-white font-serif text-md'>13yrs of experience</p>
                <p className='text-white font-serif text-md'>Starts at Rs.500</p>
            </div>
        </div>

        <div className='px-3'>
            <p className='text-white font-serif text-md'>{data.registrationNo}</p>
            {/* <p>{data.registrationYear}</p> */}
            <p className='text-white font-serif text-md'>{data.degreeName}</p>
            <p className='text-white font-serif text-md'>{data.medicalCouncilName}</p>
        </div>

        <div className='w-full justify-center items-center flex '>
            {
                success ? (
                    <p className='font-semibold text-gray-400 px-3 py-1 rounded-md bg-bg-primary'>Apt Booked</p>
                ) : (
                    <button className='text-white bg-bg-primary px-3 rounded-md py-1' onClick={handlebookapt}>Book Apt</button>
                )
            }
        </div>

      <Modal isOpen={isOpen} onClose={() => {
        setFile(null)
        setIpfshash(null)
        onClose()
      }} className='bg-bg-primary'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload Medical Documents</ModalHeader>
          <ModalBody className='flex'>
            <Center>
            <VStack spacing={4} align="center">
                    <Button as="label" htmlFor="file-upload" cursor="pointer">
                    Select File
                    </Button>
                    <input
                    id="file-upload"
                    type="file"
                    accept=".jpg,.jpeg,.png,.gif,.pdf"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                    />
                {file && (
                <Box>
                    <Text>File Preview:</Text>
                    <Image src={filePreview} maxH="200px" />
                </Box>
                )}
            </VStack>
            </Center>
          </ModalBody>
                
                <ModalFooter>
                    <Flex flexDirection='columnn'>
                    <Center>
                    {
                        uploading ? (
                            <p>Uploading documents...</p>
                        ) : (
                            ipfshash ? (
                                   null
                                ) : (
                                    <Button colorScheme='blue' mr={3} onClick={handledocumentSubmit}>
                                    Submit
                                    </Button>
                                )
                        )
                    }
                    </Center>
                    <Flex flexDirection='column' gap='3'> 
                    <Center>
                    {  ipfshash &&
                        <Flex flexDirection='column' gap='1'>
                            
                            <Text fontWeight='semibold' fontFamily='serif' fontSize='lg'>IpfsHash</Text>
                            <CopyToClipboard text={ipfshash}/>
                            
                        </Flex>
                    }
                    </Center>
                    <Center>
                    {
                        ipfshash && (
                    <Button colorScheme='blue' mr={3} onClick={handleConfirmApt}>
                    Confirm Appointment
                    </Button>
                        )
                    }
                    </Center>
                    </Flex>
                    </Flex>
                </ModalFooter>
                
        </ModalContent>
      </Modal>  
    </div>
  )
}

export default DoctorCard