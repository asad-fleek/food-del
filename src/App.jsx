import { RouterProvider } from "react-router/dom";
import router from './routes'
import StoreContextProvider from "./context";



function App() {
  return (
    <div className="app">
      <StoreContextProvider>
        <RouterProvider router={router} />
      </StoreContextProvider>

    </div>

  )
}

export default App