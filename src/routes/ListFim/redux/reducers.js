import { FILM_LIST } from "./types";

const initialState = {
    slickFilm: {}
}
export default function slickListFilm(state = initialState, { type, payload }){
    switch (type) {
        case FILM_LIST: {
            return { ...state, slickFilm: payload }
        }
        default:
            return state
    }

}
    
