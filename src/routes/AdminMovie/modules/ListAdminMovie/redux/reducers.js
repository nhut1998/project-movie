import { AD_MOVIE_LIST } from "./types";

const initialState = {
    listMovieAdmin:[]
}
export default function adminListMovie(state=initialState,{type,payload}){
    switch (type){
        case AD_MOVIE_LIST:{
            return {...state,listMovieAdmin:payload}
        }
        default:
            return state
    }
}