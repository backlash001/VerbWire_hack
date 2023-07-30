// import React, { useState } from 'react';

// const FileCoinUpload = () => {
//   const [file, setFile] = useState(null);
//   const [filePreview, setFilePreview] = useState(null);

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     setFile(selectedFile);

//     // Generate a preview of the file
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setFilePreview(reader.result);
//     };
//     reader.readAsDataURL(selectedFile);
//   };

//   const handleUpload = () => {
//     // Perform the upload to IPFS through Filecoin
//     // Replace this code with the actual upload logic using your chosen libraries or APIs

//     // Example code to simulate an upload delay
//     setTimeout(() => {
//       alert('File uploaded successfully!');
//       setFile(null);
//       setFilePreview(null);
//     }, 2000);
//   };

//   return (
//     <div>
//       <h2>IPFS File Upload</h2>
//       <input type="file" onChange={handleFileChange} />
//       {file && (
//         <div>
//           <h4>File Preview:</h4>
//           <img src={filePreview} alt="File Preview" style={{ maxWidth: '200px' }} />
//         </div>
//       )}
//       {file && <button onClick={handleUpload}>Upload to IPFS</button>}
//     </div>
//   );
// };

// export default FileCoinUpload;

import React, { useState } from 'react';
import { Box, Button, Center, Image, Input, Text, VStack } from '@chakra-ui/react';

const FileCoinUpload = () => {
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

  return (
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
  );
};

export default FileCoinUpload;
