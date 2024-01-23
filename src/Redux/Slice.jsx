import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    UserLogin:(state,action)=>{
        state.email = action.payload.email
    },
    UserLogout: (state) => {
      state.email = ''
    }
  },
})

export const { UserLogin,UserLogout } = userSlice.actions

export default userSlice.reducer