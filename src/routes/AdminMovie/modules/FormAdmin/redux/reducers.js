import { CREATE_MOVIE, GET_EDITMOVIE } from "./types";
const initialState = {
    createMovie:[],
    infoFim:[]
}
export default function adCreateMovie(state= initialState,{type,payload}){
    switch (type){
        case CREATE_MOVIE:{
            return {...state, createMovie:payload}
        }
        case GET_EDITMOVIE:{
            return {...state,infoFim:payload}
        }
        default:
            return state
    }
}