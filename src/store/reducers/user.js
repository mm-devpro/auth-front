import {createReducer, createSlice} from "@reduxjs/toolkit";
import api from "../../utils/api";
import {useCookies} from 'react-cookie';

const initialUser = {
  email: "",
  password:"",
  username:""
}

// SLICE
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.user = null;
    },
  },
});
//REDUCER
export default userSlice.reducer
// ACTIONS
const {loginSuccess, logoutSuccess} = userSlice.actions


export const login = ({email,password}) => async dispatch => {
  try {
    const res = await api.post('/api/v1/login', {email,password}).then(data => {
      console.log(data)
    })

    dispatch(loginSuccess(email));
  } catch(e) {
    return console.error(e.message)
  }
}

export const logout = () => async dispatch => {
  try {
    // const res = await api.post('/api/v1/logout')
    return dispatch(logoutSuccess())
  } catch (e) {
    return console.error(e.message)
  }
}

