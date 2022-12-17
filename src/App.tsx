import { ChakraProvider}  from '@chakra-ui/react';

import theme from "./theme/theme"
import {Router} from "./router/Router"

import { BrowserRouter } from "react-router-dom"

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

