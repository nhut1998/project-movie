import { DETAIL, INFORMATION,LOGO_ITEM} from "./types";


const initialState = {
    listLogo: [],
    listDetail:[],
    listMovieShow:[],
}
export default function infoReducers(state = initialState, { type, payload }) {
    
    switch (type) {
        case INFORMATION: {
            return { ...state, listLogo: payload }
        }
        case DETAIL:{
            return {...state, listDetail:payload}
        }
        case LOGO_ITEM:{
            return {...state, listMovieShow:payload}
        }
        default:
            return state
    }
}

