import React,{useCallback} from 'react'
import Calendar from '../component/Calendar'
import { fetchTheater,fetchCalendar } from '../redux/actions'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'


export default function CalendarContainer() {
    const params = useParams()
   
    const dispatch = useDispatch()

    const hanldTheater = useCallback(
        (maHeThong) => {
           dispatch(fetchTheater(maHeThong))
        },
        [dispatch],
    )
    const hanldCalendar = useCallback(
        (maRap) => {
           dispatch(fetchCalendar(maRap))
        },
        [dispatch],
    )
    return (
        <div>
    <Calendar hanldTheater={hanldTheater} maPhim={params.calendarID}hanldCalendar={hanldCalendar}/>
        </div>
    )
}
