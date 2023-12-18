import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutingConfig from './routes/routingConfig';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthContext } from './api/context';
import 'swiper/css';

const queryClient = new QueryClient();

function App() {
  const [state, setState] = React.useState("");
  const value = { authValue: state, setAuthValue: setState };
  return (
    <AuthContext.Provider value={value}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <RoutingConfig />
        </QueryClientProvider>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
