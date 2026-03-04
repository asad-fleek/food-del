import { RouterProvider } from "react-router/dom";
import router from './routes'
import StoreContextProvider from "./context";
import { ToastContainer } from 'react-toastify';

const App = () => {

  return (
    <div className="app">
      <StoreContextProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </StoreContextProvider>

    </div>

  )
}

export default App