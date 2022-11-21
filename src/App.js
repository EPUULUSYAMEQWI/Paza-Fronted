import { BrowserRouter } from 'react-router-dom';
import RootPage from './pages/RootPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AppContextProvider } from './context/Context';

function App() {
  return (
    <div>
      <BrowserRouter>
      <AppContextProvider>
          <RootPage />
          <ToastContainer />
        </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
