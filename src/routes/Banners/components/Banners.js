import React, { useState } from 'react'
import moment from 'moment';
import _ from 'lodash'
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import '../assets/banner.scss'

export default function Banners({ bannerMovie }) {
    const history = useHistory()
    const user = useSelector(state => state.user.credential)
    const [filmCinema, setFilmCinema] = useState('')
    const [malich, setMaLich] = useState('')
    const [infoFilm, setinfoFilm] = useState('')

    const [filmTheater, setFilmTheater] = useState('')
    const [dateFilm, setDateFilm] = useState('')


    const hanldMovie = (movie, film) => {
        setFilmCinema(movie)
        setinfoFilm(film)
    }
    const hanldCumRap = (theater) => {
        setFilmTheater(theater)
    }
    const hanldDtae = (date) => {
        setDateFilm(date)
    }
    const hanldML = (ma)=>{
        setMaLich(ma)

    }
    const muaVe = () => {
        if (user.accessToken) {
            history.push(`/${malich}/booking`)
        }
        else {
            Swal.fire({
                title: 'Mua vé không thành công?',
                text: "Bạn chưa có tài khoản đăng nhập ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#C0C0C0',            
            }).then((result) => {
                if (result.isConfirmed) {
                    history.push('/login')
                }
            })
        }
    }
    return (
        <div className='banner'>
            <div  className='items items-none'>
                <div className='item_banner'>

                    <div className="form-group">
                        <select className="form-control" onChange={(e) => hanldMovie(e.target.value, bannerMovie)} >
                            <option className='item_option selected' selected>Tên phim</option>
                            {
                                _.map(bannerMovie, movie => (
                                    _.map(movie.lstCumRap, movie2 => (
                                        _.map(movie2.danhSachPhim, (movie3, idx) => (
                                            <option className='option_film' key={idx} value={movie3.tenPhim}>{movie3.tenPhim}</option>
                                        ))
                                    ))
                                ))
                            }

                        </select>
                    </div>
                    <div className="form-group">
                        <select className="form-control" onChange={(e) => hanldCumRap(e.target.value)}>
                            <option selected className='item_option selected'>Cụm rạp</option>
                            {
                                _.map(infoFilm, theater => (
                                    _.map(theater.lstCumRap, (theater2, idx) => (
                                        <option key={idx} className='option_film' value={theater2.tenCumRap}>{theater2.tenCumRap}</option>
                                    ))
                                ))
                            }

                        </select>
                    </div>
                    <div className="form-group">
                        <select className="form-control" onChange={(e) => hanldDtae(e.target.value)}>
                            <option selected className='item_option selected'>Ngày chiếu</option>
                            {
                                _.map(bannerMovie, date => (
                                    _.map(date.lstCumRap, date1 => {
                                        return date1.tenCumRap === filmTheater && (

                                            _.map(date1.danhSachPhim, date2 => {
                                                return date2.tenPhim === filmCinema && (
                                                    _.map(_.uniq(_.map(date2.lstLichChieuTheoPhim, date3 =>
                                                        moment(date3.ngayChieuGioChieu).format('DD-MM'))),
                                                        date4 => {
                                                            return (
                                                                <option value={date4}>{date4}</option>
                                                            )
                                                        })
                                                )
                                            }
                                            )

                                        )
                                    })
                                ))


                            }

                        </select>

                    </div>
                    <div className="form-group ">
                        <select className="form-control" onChange={(e)=>hanldML(e.target.value)} >
                            <option selected className='item_option selected'>Giờ chiếu</option>
                            {
                                _.map(bannerMovie, times => (
                                    _.map(times.lstCumRap, times1 => {
                                        return times1.tenCumRap === filmTheater && (

                                            _.map(times1.danhSachPhim, times2 => {
                                                return times2.tenPhim === filmCinema && (
                                                    _.map(times2.lstLichChieuTheoPhim, times3 => {
                                                        return moment(times3.ngayChieuGioChieu).format('DD-MM') === dateFilm && (
                                                            <option value={times3.maLichChieu}>{moment(times3.ngayChieuGioChieu).format('hh:mm')}</option>
                                                        )
                                                    })
                                                )
                                            }
                                            )
                                        )
                                    })
                                ))
                            }


                        </select>

                    </div>
                    <div className="form-group book-seat">
                        {
                            malich===''?<button>Mua vé ngay</button>:<button onClick={() =>muaVe()}>Mua vé ngay</button>
                        }
                        

                    </div>
                </div>
            </div>
           
        </div>
    )
}
