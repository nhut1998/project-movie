import { LOGIN,CLEAR_USER } from './types'

const initialState = {
  credential: {}
}

export default function userReducer(state = initialState, { type, payload }) {
  
  switch (type) {
    case LOGIN: {
      return { ...state, credential:{...state.credential, ...payload} }
    }
    case CLEAR_USER :{
      return { ...state, credential:{...state.credential, accessToken:undefined}}
    }

    default:
      return state
  }
}
