import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: "cart",
    initialState: {
        value: JSON.parse(localStorage.getItem("cart")) || []
    },
    reducers: {
        addToCart: (state, action) => {
            let index = state.value.findIndex(i => i.id === action.payload.id);
            if (index < 0) {
                state.value = [...state.value, { ...action.payload, quantity: 1 }];
            } else {
                state.value = state.value.map((item, inx) =>
                    inx === index ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            localStorage.setItem("cart", JSON.stringify(state.value));
        },

        incCart: (state, action) => {
            let index = state.value.findIndex(i => i.id === action.payload.id);
            state.value = state.value.map((product, inx) => {
                if (index === inx) {
                    return { ...product, quantity: product.quantity + 1 }
                } else {
                    return product
                }
            })
            localStorage.setItem("cart", JSON.stringify(state.value));
        },

        decCart: (state, action) => {
            let index = state.value.findIndex(i => i.id === action.payload.id);
            state.value = state.value.map((product, inx) => {
                if (index === inx) {
                    return { ...product, quantity: product.quantity - 1 }
                } else {
                    return product
                }
            })
            localStorage.setItem("cart", JSON.stringify(state.value));
        },

        removeFromCart: (state, action) => {
            state.value = state.value.filter((product) => product.id !== action.payload.id)
            localStorage.setItem("cart", JSON.stringify(state.value));
        },

        clearCart: (state) => {
            state.value = []
            localStorage.setItem("cart", JSON.stringify(state.value));
        }
    }
})


export const { addToCart, incCart, decCart, removeFromCart, clearCart } = cardSlice.actions
export default cardSlice.reducer