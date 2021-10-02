import {BOOKING_SEAT, CHOOSING_SEND} from './types'

const initialState ={
    listBooking:[],
    infoBooking:{},
    listTicket:{}     
}


export default function bookingList(state=initialState,{type,payload}) {
   
    switch (type){
        case BOOKING_SEAT:{
            const mapping =payload.danhSachGhe.map(ghe => ({...ghe,isChoosing: false}))
            return {...state,listBooking:mapping,infoBooking:payload.thongTinPhim}
        }
        case CHOOSING_SEND:{
            const cloneListBooking = [...state.listBooking]
            const idxFound =  cloneListBooking.findIndex(item => item.maGhe === payload)      
            cloneListBooking[idxFound].isChoosing = !cloneListBooking[idxFound].isChoosing
            return{ ...state, listBooking: cloneListBooking}

        }
        default:
            return state
    }
}
