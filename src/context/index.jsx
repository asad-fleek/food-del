import axios from "axios";
import { createContext, useEffect, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setcartItems] = useState({});
    const url = "http://localhost:4000"
    const [token, setToken] = useState("");
    const [food_list, setFood_list] = useState([])

    const addtoCart = async (itemId) => {

        if (!cartItems[itemId]) {
            setcartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if (token) {
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }

    }
    const removeFromCart = (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    // eslint-disable-next-line no-unused-vars
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }

            return totalAmount;
        }
    }
    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFood_list(response.data.data)
    }
    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
            }
        }
        loadData();
    }, [])




const contextValue = {
    food_list,
    cartItems,
    setcartItems,
    addtoCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken

}
return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
)
}
export default StoreContextProvider;