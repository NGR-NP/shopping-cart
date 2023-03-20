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
            const existingProductIndex = state.product.findIndex(product => product.uid === action.payload.uid);
            if (existingProductIndex >= 0) {
                const existingProduct = state.product[existingProductIndex];
                state.product[existingProductIndex] = {
                    ...existingProduct,
                    qty: existingProduct.qty + action.payload.qty
                };
                state.qty += action.payload.qty;
                state.total += action.payload.price * action.payload.qty;
            } else {
                state.product.push(action.payload);
                state.qty += action.payload.qty;
                state.total += action.payload.price * action.payload.qty;
            }
        }

        ,
        removeProduct: (state, action) => {
            const productToRemove = state.product.find((product) => product.uid === action.payload.uid);
            const total = productToRemove.price * productToRemove.qty
            if (productToRemove) {
                state.total -= total
                state.qty -= productToRemove.qty;
                state.product = state.product.filter((product) => product.uid !== action.payload.uid);

            }
        },
        incQty: (state, action) => {
            const product = state.product.find((product) => product.uid === action.payload.uid)
            product.qty += 1;
            state.qty += 1;
            state.total += product.price;
        },
        decQty: (state, action) => {
            const product = state.product.find((product) => product.uid === action.payload.uid);
            if (product.qty > 1) {
                product.qty -= 1;
                state.qty -= 1;
                state.total -= product.price;
            }
        }
    }
})
export const {
    addProduct, removeProduct, incQty, decQty
} = CartSlice.actions
export default CartSlice.reducer
export const selectCurrentCart = (state) => state.cart;