import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux'
import _ from 'lodash'
import moment from 'moment'
import '../assets/calendar.scss'
import { useHistory } from 'react-router';

export default function Calendar({ hanldTheater, maPhim, hanldCalendar }) {
    const history = useHistory()
    const [cinema, setCinema] = useState('')
    const [calendar, setCalendar] = useState({
        maPhim: maPhim,
        ngayChieuGioChieu: '',
    })
    console.log(calendar)
    const heThongRap = useSelector(state => state.logo.listLogo)
    const cumRap = useSelector(state => state.theater.listSystemTheater)
    const submit = (e) => {
        e.preventDefault()
        hanldCalendar({
            ...calendar,
            maPhim: maPhim,
            ngayChieuGioChieu: moment(calendar.ngayChieuGioChieu).format('DD/MM/yyyy hh:mm:ss')
        })
        history.push('/admin')
    }
    return (
        <div className='calendar'>
            <div className='item_calendar mx-auto'>
            <h2>THÊM LỊCH CHIẾU PHIM </h2>
            <form onSubmit={submit}>

                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Tên hệ thống rạp</label>
                    <select className="form-control"
                        onChange={(e) => hanldTheater(e.target.value)}
                    >
                        <option selected>Hệ thống rạp</option>
                        {
                            _.map(heThongRap, (theater, idx) => (
                                <option key={idx} value={theater.maHeThongRap}>{theater.maHeThongRap}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Chọn cụm rap</label>
                    <select className="form-control" onClick={(e) => setCinema(e.target.value)}>
                        <option selected>Chọn cụm rạp</option>
                        {
                            _.map(cumRap, (tenRap, idx) => (
                                <option key={idx} value={tenRap.tenCumRap}>{tenRap.tenCumRap}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Chọn cụm rap</label>
                    <select className="form-control" id="exampleFormControlSelect1"
                        onChange={(e) => setCalendar({ ...calendar, maRap: e.target.value })}
                    >
                        <option selected>Cụm rạp</option>
                        {
                            _.map(cumRap, (item, idx) => {
                                return item.tenCumRap === cinema && (
                                    _.map(item.danhSachRap, (item1, idx) => (

                                        <option key={idx} value={item1.maRap}>{item1.maRap}</option>
                                    ))

                                )
                            }
                            )
                        }
                    </select>
                </div>
                <div>
                <p>Chọn ngày và giờ chiếu</p>
                <DatePicker
                    onChange={value => setCalendar({ ...calendar, ngayChieuGioChieu: value })}
                    showTimeSelect
                    dateFormat="dd-MM-yyyy H:mm:ss"
                    selected={calendar.ngayChieuGioChieu}
                    name='ngayChieuGioChieu'
                    timeIntervals={15}
                />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Giá vé</label>
                    <input type="text" className="form-control" onChange={e => setCalendar({ ...calendar, giaVe: e.target.value })} placeholder='Giá vé'/>
                </div>
                <div className='btn_calendar'>
                <button type="submit" className="btn btn-primary">Tạo lịch chiếu</button>
                <button type="submit" className="rest " onClick={()=>history.push('/admin')}>Hủy</button>
                </div>
            </form>
            </div>
        </div>
    )
}
