import {combineReducers} from 'redux'
import user from "./user"
import stream from "./video-feed";

const rootReducer = combineReducers({
  user,
  stream,
})

export default rootReducer
