import React, { useRef } from 'react';
import { Box, Center, Flex, IconButton, Text, useClipboard } from '@chakra-ui/react';
import { CopyIcon } from '@chakra-ui/icons';

const CopyToClipboard = ({ text }) => {
  const { hasCopied, onCopy } = useClipboard(text);
  const textRef = useRef(null);

  return (
    <Box>
    <Center>
      <Flex align="center" p={2} borderRadius="md" borderWidth="1px">
        <Text ref={textRef} mr={2} fontWeight="bold" isTruncated maxW='300px'>
          {text}
        </Text>
        <IconButton
          aria-label="Copy to clipboard"
          icon={<CopyIcon />}
          onClick={onCopy}
          ml={2}
        />
      </Flex>
      {/* {hasCopied && (
        <Box mt={2} color="green.500">
          Copied!
        </Box>
      )} */}
    </Center>
    </Box>
  );
};

export default CopyToClipboard;
