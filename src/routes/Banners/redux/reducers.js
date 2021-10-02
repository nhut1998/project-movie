import { BANNER_MOVIE } from "./types";

const initialState = {
    bannerMovie:[]
}
export default function infoBannerMovie(state = initialState,{type,payload}){
    switch (type){
        case BANNER_MOVIE:{
            return {...state, bannerMovie:payload}
        }
        default:
         return state
    }
}