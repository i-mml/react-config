import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutingConfig from './routes/routingConfig';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from './views/layout/layout';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RoutingConfig />
      </QueryClientProvider>

    </BrowserRouter>
  );
}

export default App;
