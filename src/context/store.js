import { configureStore } from '@reduxjs/toolkit'
import wishlistSlice from './wishlistSlice'
import cardSlice from './cardSlice'

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    cart: cardSlice,
  },
})