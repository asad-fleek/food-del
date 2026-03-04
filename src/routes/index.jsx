import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import Cart from "../pages/cart";
import PlaceOrder from "../pages/place-order";
import Admin from "../pages/admin";
import Add from "../pages/add";
import Orders from "../pages/order";
import List from "../pages/list";


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
    path: "/admin",
    element: <Admin />,
  },
   {
    path: "/add",
    element: <Add />,
  },
   {
    path: "/orders",
    element: <Orders />,
  },
   {
    path: "/list",
    element: <List />,
  },
]);
export default router;