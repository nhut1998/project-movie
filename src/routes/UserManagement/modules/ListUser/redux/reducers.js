import {LIST_USER} from './types'

const initialState = {
    userList:[]
}
export default function infoUserList(state=initialState,{type,payload}){
    switch (type){
        case LIST_USER:{
            return {...state, userList:payload}
        }
        default:
            return state
    }
}