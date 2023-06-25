import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  currentUser: null,
  test: { a: 1 },
};
// slice: object we get back from createSlice
export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    // Define the name of the reducer function that represents the action
    // that updates the slice of the user reducer state.
    setCurrentUser(state, action){
      // its mutate the state but  
      state.currentUser = action.payload
    }
  }
})

export const { setCurrentUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
