import {CREATE_CALENDAR,CALENDAR} from './types'
import axios from 'helpers/axios'


export const fetchTheater =(maHeThong)=>{
    return dispatch =>{
        axios({
            url:`api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThong}`,
            method:'GET'
        })
        .then(res=>{
            dispatch(actFetchTheater(res.data))
 
        })
    }
}

export const actFetchTheater = (listSystemTheater) => ({
    type:CREATE_CALENDAR,
    payload:listSystemTheater
})

export const fetchCalendar = (calendar) => {
    console.log(calendar)
    return dispatch => {
        axios({
            url:`/api/QuanLyDatVe/TaoLichChieu`,
            method:'POST',
            data:calendar
        })
        .then(res=>{
            dispatch(actCalendar(res.data))
        })
    }
}

export const actCalendar = (taoLichChieu)=> ({
 type:CALENDAR,
 payload: taoLichChieu
})