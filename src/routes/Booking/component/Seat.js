import React from 'react'
import WeekendIcon from '@material-ui/icons/Weekend';
import '../assets/booking.scss'
import { useDispatch } from 'react-redux';
import { actBookingInfo } from '../redux/actions';


export default function Seat({ ghe }) {
    const dispatch = useDispatch()

    const hanldReser = (ghe) => {
        if(!ghe.daDat){
            dispatch(actBookingInfo(ghe.maGhe))

        }

    }

    return (
        <>
            <div className='d-inline-block mr-1 seat_icon '
                onClick={() => hanldReser(ghe)}
            >
                <WeekendIcon className= {`iconSeat ${ghe.loaiGhe} ${ghe.isChoosing ? 'isChoosing':''} ${ghe.daDat ? 'daDat':''}`}/>
                <p >{ghe.tenGhe}</p>
            </div>
        </>

    )
}
