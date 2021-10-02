import { CREATE_CALENDAR,CALENDAR } from "./types";

const initialState ={
    listSystemTheater :[],
    taoLichChieu:[]
}
export default function systemTheater(state=initialState,{type,payload}){
    switch (type){
        case CREATE_CALENDAR:{
            return {...state, listSystemTheater:payload}
        }
        case CALENDAR:{
            return {...state,taoLichChieu:payload}
        }
        default:
        return state
    }

}