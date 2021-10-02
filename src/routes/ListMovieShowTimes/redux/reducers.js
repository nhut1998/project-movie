import { LIST_MOVIE_DETAIL } from "./types";
 

const initialState ={
    detailMaPhim:[]
}
export default function maPhimReducer(state=initialState,{type, payload}){
    switch (type){
        case LIST_MOVIE_DETAIL:{
            return {...state, detailMaPhim:payload}
        }
        default:
            return state
    }
}