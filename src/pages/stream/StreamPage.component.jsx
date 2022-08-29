import React from 'react'
import {useDispatch, useSelector} from "react-redux";


const Stream= () => {
  const {stream} = useSelector(state=> state.stream)

  return (
    <div>
      <div>
        <img src='/stream' alt="video" width="100%"/>
      </div>
    </div>
  )
}

export default Stream
