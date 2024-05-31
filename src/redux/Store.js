import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/cartSlice";

export default configureStore({
    reducer: {
        cart: CartSlice,
    },
});
