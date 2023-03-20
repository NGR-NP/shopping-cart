import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'userCart',
    initialState: {
        product: [],
        qty: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            state.product.push(action.payload)
            state.qty += 1;
            state.total += action.payload.price * action.payload.qty
        }
        ,
        removeProduct: (state, action) => {
            state.product = state.product.find((product) => product.uid !== action.payload.uid)
            state.qty -= 1
        },
        incQty: (state, action) => {
            const product = state.product.find((product) => product.uid === action.payload.uid)
            product.qty += 1;
            state.qty += 1;
            state.total += product.price;
        },
        decQty: (state, action) => {
            const product = state.product.find((product) => product.uid === action.payload.uid)
            product.qty -= 1
            state.qty -= 1;
            state.total -= product.price
        }
    }
})
export const {
    addProduct, removeProduct, incQty, decQty
} = CartSlice.actions
export default CartSlice.reducer
export const selectCurrentCart = (state) => state.cart;