import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutingConfig from './routes/routingConfig';
import { CookiesProvider } from 'react-cookie';


function App() {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <RoutingConfig />
      </CookiesProvider>
    </BrowserRouter>
  );
}

export default App;
