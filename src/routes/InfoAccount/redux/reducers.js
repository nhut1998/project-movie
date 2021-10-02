import { LIST_ACCOUNT } from "./types";

const initialState =  {
     accountList:[]
}

export default function accountReducer(state=initialState,{type,payload}){
    switch (type){
        case LIST_ACCOUNT:{
            return {...state, accountList:payload}
        }
        default:
            return state
    }
}