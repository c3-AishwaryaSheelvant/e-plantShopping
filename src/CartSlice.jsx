import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',

  initialState: {
    cart: [], 
  },

  reducers: {
    // ADD ITEM
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      const existingItem = state.cart.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1; // Increment if already exists
      } else {
        // Add new item with quantity = 1
        state.cart.push({
          name,
          image,
          cost,
          quantity: 1,
        });
      }
    },

    // REMOVE ITEM COMPLETELY
    removeItem: (state, action) => {
      state.cart = state.cart.filter(item => item.name !== action.payload);
    },

    // UPDATE QUANTITY
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.cart.find(item => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export actions
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
