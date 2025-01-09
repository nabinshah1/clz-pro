import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets"; // Assuming you have products data imported
import { toast } from "react-toastify";
import Product from "../pages/Product";

// Create the context
export const ShopContext = createContext();

// Context Provider Component
const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});

  // Add item to cart with size validation
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItem);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItem(cartData);
    toast.success("Product added to cart!");
  };

  // Calculate total item count in cart
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItem) {
      for (const size in cartItem[itemId]) {
        totalCount += cartItem[itemId][size] || 0;
      }
    }
    return totalCount;
  };

  const updateQuantity=async (itemId,size,quantity) =>{
    let cartData=structuredClone(cartItem);
    cartData[itemId][size]=quantity;
    setCartItem(cartData);

  }

  const getCartAmount =() =>{
    let totalAmount =0; 
    for(const items in cartItem){
        let itemInfo= products.find((Product)=>Product._id==items);
        for(const item in cartItem [items] ){
            try {
                if (cartItem[items][item]>0) {
                    totalAmount+=itemInfo.price * cartItem[items] [item]
                    
                }
                
            } catch (error) {
                
            }
        }

    }
return totalAmount;
  }

  // Context values to share
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
