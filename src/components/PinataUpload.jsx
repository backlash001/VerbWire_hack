import React from 'react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
import { Flex,Input,Text,Button } from '@chakra-ui/react'
import { useState } from 'react';
import { Box, Center, Image, VStack } from '@chakra-ui/react';

const PinataUpload = () => {
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

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
  
    const {isOpen, onOpen, onClose} = useDisclosure()
    
  return (
      <Modal isOpen={isOpen} onClose={onClose} className='bg-bg-primary'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Doctor Speciality</ModalHeader>
          <ModalBody className='flex'>
    <Center>
      <VStack spacing={4} align="center">
        <Text fontSize="xl">File Upload Form</Text>
            <Button as="label" htmlFor="file-upload" cursor="pointer">
              Select File
            </Button>
            <input
              id="file-upload"
              type="file"
              accept=".jpg,.jpeg,.png,.gif"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
        {file && (
          <Box>
            <Text>File Preview:</Text>
            <Image src={filePreview} maxH="200px" />
          </Box>
        )}
        {file && (
          <Button colorScheme="blue" onClick={handleFormSubmit}>
            Submit
          </Button>
        )}
      </VStack>
    </Center>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default PinataUpload