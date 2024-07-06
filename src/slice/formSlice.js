import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: [
     {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    age: '25'
  },
  {
    name: 'Ashish Kumar',
    email: 'ak8393267@gmail.com',
    age: '55'
  }
  ]
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    getFomeData: (state, action) => {
      state.userInfo.push(action.payload)
    },
  }
});

export const { getFomeData } = formSlice.actions;

export default formSlice.reducer;
