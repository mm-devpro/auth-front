import {createReducer, createSlice} from "@reduxjs/toolkit";

const initialUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null

// SLICE
const slice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload))
    },
    logoutSuccess: (state, action) => {
      state.user = null;
      localStorage.removeItem('user')
    },
  },
});

export default slice.reducer

// ACTIONS

const {loginSuccess, logoutSuccess} = slice.actions

export const login = ({email, password}) => async dispatch => {
  try {
    //
    // code for login logic
    //
    // const res = await api.post('/api/auth/auth/', {username, password})
    dispatch(loginSuccess({email}));
  } catch(e) {
    return console.error(e.message)
  }
}

export const logout = () => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess())
  } catch (e) {
    return console.error(e.message)
  }
}

