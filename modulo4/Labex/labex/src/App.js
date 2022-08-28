import React from "react";
import Router from "./component/Router";
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <Box w='100%' h='100vh' bg='#4f2600' >
        <Router />
      </Box>
    </ChakraProvider>
  );
}

export default App;
