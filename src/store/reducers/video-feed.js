import {createSlice} from "@reduxjs/toolkit";
import api from "../../utils/api";

// SLICE
const streamSlice = createSlice({
  name: 'user',
  initialState: {
    video: ""
  },
  reducers: {
    streamSuccess: (state, action) => {
      state.video = action.payload;
    },
  },
});

export default streamSlice.reducer

// ACTIONS

const {streamSuccess} = streamSlice.actions

export const stream = (data) => async dispatch => {
  try {
    let res = await api.get("/stream").then(data => (data))
    dispatch(streamSuccess(data))
  } catch(e) {
    return console.error(e.message)
  }
}


