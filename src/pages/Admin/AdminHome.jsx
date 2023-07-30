import { useState } from 'react'

import { useContract,useContractRead,useContractWrite } from '@thirdweb-dev/react'

import useStore from '../../store'

import contractAbi from '../../contracts/abi.json'
// import AllCategories from '../../components/AllCategories'
import Specialty from '../../components/Specialty'


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Flex,Input,Text } from '@chakra-ui/react'

const AdminHome = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

    
    const {contractaddress} = useStore((state) => ({
        contractaddress:state.contractaddress,
    }))

    const {contract} = useContract(
        contractaddress,contractAbi.abi
    )

    const {data,isLoading,error} = useContractRead(
        contract,
        "getAllCategories",
    )
    
    const {mutateAsync} = useContractWrite(
        contract,
        "addCategory",
    )
    
    if(error){
        console.log(error)
        return(
            <div>
                <p className="font-serif text-lg text-green-500 text-center">Error Fetching all specialities...</p>
            </div>
        )
    }
    
  const handleSubmit = async() => {
    // Handle form submission here
    console.log(name);
    const data = await mutateAsync({args : [name]});
    console.log(data);
    onClose();
  };


  return (
    <div className='w-full flex flex-col bg-bg-primary justify-start items-center h-[88vh] px-3'>

        <div className='font-serif font-bold text-white py-3'>Doctor Specialities</div>

        <div className=' w-full flex justify-center items-center gap-3'>
            <div className=' flex-1 overflow-hidden'>
                {
                    isLoading ? (
                        <div>
                            <p className="font-serif text-lg text-green-500 text-center">Loading...</p>
                        </div>
                    ) : (
                        <div className="py-2 flex justify-start items-baseline overflow-y-hidden gap-1 px-2">
                            {
                                data?.map((item,index) => {
                                    if(item.name !== '')
                                      return <Specialty key={index} data={item}/>
                                })
                            }
                        </div>
                    )
                }
            </div>
            <div className='flex flex-2 justify-center items-center flex-col h-32 border-2 border-border-primary rounded-md gap-3 w-32 bg-bg-secondary cursor-pointer hover:bg-gray-800'
            onClick={onOpen}
            >
                <p className='font-bold text-gray-600 text-3xl text-center border-2 border-gray-600 py-5 px-7 rounded-full '>+</p>
            </div>
        </div>

      <Modal isOpen={isOpen} onClose={() => {
        setName('')
        setDesc('')
        onClose()
      }} className='bg-bg-primary'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Doctor Speciality</ModalHeader>
          <ModalBody className='flex'>
          <Flex flexDirection='column' gap={3}>
            <Text>Category Name</Text>
              <Input
                placeholder="Category Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            <Text>Category Description</Text>
              <Input
                placeholder="Category Description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
          </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  )
}

export default AdminHome