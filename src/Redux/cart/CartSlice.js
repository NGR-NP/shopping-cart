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
            const { id, name, imgUrl, price, rating, size, color, qty } = action.payload;
            const uid = id + size.name + color.name;

            const existingProductIndex = state.product.findIndex(product => product.uid === uid);
            if (existingProductIndex >= 0) {
                const existingProduct = state.product[existingProductIndex];
                state.product[existingProductIndex] = {
                    ...existingProduct,
                    qty: existingProduct.qty + qty
                };
                state.qty += qty;
                state.total += price * qty;
            } else {
                state.product.push({
                    uid,
                    id,
                    name,
                    imgUrl,
                    price,
                    rating,
                    size,
                    color,
                    qty
                });
                state.qty += qty;
                state.total += price * qty;
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