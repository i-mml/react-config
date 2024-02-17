import { BrowserRouter } from 'react-router-dom';
import RoutingConfig from './routes/routingConfig';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux'
import 'swiper/css';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={false}>
              <RoutingConfig />
              <ToastContainer
                toastStyle={{
                  fontFamily: "Vazirmmatn"
                }}
              />
            </Suspense>
          </QueryClientProvider>
        </BrowserRouter>

      </PersistGate>
    </Provider>
  );
}

export default App;
