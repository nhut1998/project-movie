
import { LIST_MOVIE_NEXT } from "./types";

const initialState ={
 
  listMovieNext:{}
}

 export default function movieList(state = initialState, { type, payload }){
   
  switch (type) {
    
    case LIST_MOVIE_NEXT:{
      // if(payload.currentPage===1){
      
      // }
      // return {...state, listMovieNext:{...payload, items:[...state.listMovieNext.items, ...payload.items]}}
      return {...state,listMovieNext:payload}
    }

    default:
      return state
  }
 }