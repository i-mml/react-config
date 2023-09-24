import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutingConfig from './routes/routingConfig';


function App() {
  return (
    <BrowserRouter>
      <RoutingConfig />
    </BrowserRouter>
  );
}

export default App;
