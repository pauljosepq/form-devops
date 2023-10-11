import React from 'react';
import ReactDOM from 'react-dom/client';
import AllRoutes from './routes';
import {ChakraProvider} from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <AllRoutes />
    </ChakraProvider>
  </React.StrictMode>
);
