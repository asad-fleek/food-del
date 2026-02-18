import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import Cart from "../pages/cart";
import PlaceOrder from "../pages/place-order";
import Footer from "../components/footer";


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order",
    element: <PlaceOrder />,
  },
  {
    path: "/footer",
    element: <Footer />,
  },
]);
export default router;