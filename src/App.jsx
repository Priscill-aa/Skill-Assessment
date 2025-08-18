

import PageRoute from './Routes/Pageroute';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UseAuth } from './context/usercontextprovider';


function App() {
const {gettingAuth} = UseAuth()

if(gettingAuth) {
  return 'LOADING'
}
  return (
    <>
      <PageRoute />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
