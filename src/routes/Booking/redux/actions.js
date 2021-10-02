import { BOOKING_SEAT, CHOOSING_SEND, SEND_BOOKING_INFO } from './types'
import axios from 'helpers/axios'
import swal from 'sweetalert'


export const fecthBooking = (maLichChieu, loading) => {
    return dispatch => {
        axios({
            url: `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
            method: 'GET'
        })
            .then(res => {
                dispatch(actFetchBooking(res.data))
               
            })
            .catch(err => {
            })
            .finally(loading.current?.hide)

    }

}
export const actFetchBooking = info => ({
    type: BOOKING_SEAT,
    payload: info

})
export const actBookingInfo = (maGhe) => ({
    type: CHOOSING_SEND,
    payload: maGhe
})

export const booking = (infoBooking) => {
    return dispatch => {
        axios({
            url: '/api/QuanLyDatVe/DatVe',
            method: 'POST',
            data: infoBooking


        })
            .then(res => {
                dispatch(actBooking(res.data))
                swal({
                    title: "ĐẶT VÉ THÀNH CÔNG",
                    icon: "success",
                  });

            })
            .catch(err => {
                console.log(err)
            })

    }
}
export const actBooking = (infoBookingSeat) => ({
    type: SEND_BOOKING_INFO,
    payload: infoBookingSeat
})