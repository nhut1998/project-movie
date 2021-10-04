import React, { useEffect, useCallback,useRef } from 'react'
import Booking from '../component/Booking'
import { fecthBooking, booking } from '../redux/actions'
import { useHistory, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from 'routes/Loading/component/Loading'
import swal from 'sweetalert'
import Swal from 'sweetalert2'

export default function BookingContainer() {
    const params = useParams()
    const dispatch = useDispatch()
    const history =useHistory()
    const listSeat = useSelector(state => state.booking.listBooking)
    const infoMovie = useSelector(state => state.booking.infoBooking)
    const taiKhoanNguoiDung = useSelector(state => state.user.credential.taiKhoan)
    const user = useSelector(state => state.user.credential)
    const loading = useRef()

    useEffect(() => {
        dispatch(fecthBooking((`${params.bookingID}`),loading))
        loading.current.show()
    }, [dispatch, params.bookingID])

    const [total, reserveSeat, danhSachVe] = listSeat.reduce((choosinginfo, item) => {
        if (item.isChoosing) {
            choosinginfo[0] += item.giaVe
            choosinginfo[1].push(<p>{item.tenGhe}</p>)
            choosinginfo[2].push({
                maGhe: item.maGhe,
                giaVe: item.giaVe
            })
        }
        return choosinginfo
    }, [0, [], []])
    const bookTicket = useCallback(() => {
        if(total ===0){
            swal({
                title: "Không thành công",
                text: "Bạn chưa đặt ghế",
                icon: "warning",
              })
        }
        else if(user.accessToken){
              dispatch(booking({
                maLichChieu: params.bookingID,
                danhSachVe,
                taiKhoanNguoiDung
            }),history)
            Swal.fire({
                title: 'Mua vé thành công',
                text: "Bạn có muốn xem thông tin đặt vé?",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#C0C0C0',
            }).then((result) => {
                if (result.isConfirmed) {
                 history.push('/account#danhsachdatve')
                }
            })
          
        }
        else{
            swal({
                title: "Không thành công",
                text: "Bạn chưa đăng nhập tài khoản",
                icon: "warning",
              }) 
        }
    },
        [danhSachVe, dispatch, history, params.bookingID, taiKhoanNguoiDung, total, user.accessToken],
    )
    return (
        <>
        <Booking listSeat={listSeat} infoMovie={infoMovie}
            bookTicket={bookTicket} total={total}
            reserveSeat={reserveSeat}
        />
        <Loading ref={loading}/>
        </>
    )
}

