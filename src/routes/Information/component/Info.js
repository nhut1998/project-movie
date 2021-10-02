import React, { useState } from 'react'
import '../assets/info.scss'
import Moment from 'react-moment';
import { useHistory } from 'react-router';


export default function Info({ logo, chonRap, mahe, getMovie, movieRap }) {

    const history = useHistory()
    const [movieShow, setmovieShow] = useState('bhd-star-cineplex-bitexco')
    const [system, setSysTem] = useState('BHDStar')
    const getMovieShowTimes = (maCumRap, maHeThongRap) => {
        setmovieShow(maCumRap)
        getMovie(maHeThongRap)
    }
    const chonHeThongRap = (maHeThongRap) => {
        setSysTem(maHeThongRap)
        chonRap(maHeThongRap)
    }
   
    return (
        <div className='heThongRap' name='Info'>
            <h2>CỤM RẠP</h2>
            <div className=" logo_rap">
                <div className='logo row'>
                    {
                        logo.map((item, index) => (
                            <div key={index} className={`logo_item col-xl-2 ${item.maHeThongRap === system ? 'maHeThong' : ''}`} >
                                <img onClick={() => chonHeThongRap(item.maHeThongRap)} src={item.logo} alt=""></img>
                                <p>{item.maHeThongRap}</p>

                            </div>
                        ))
                    },
                </div>

                <div className='movie_theater row'>
                    <div className='list_rap col-xl-6 col-lg-6 col-md-12'>
                        <h2>CHỌN RẠP</h2>
                        <div className='rap_over'>
                            {
                                mahe.map((item, index) => (
                                    <div key={index} className='item_cumRap'>
                                        {
                                            item.lstCumRap.map((item1, index) => (
                                                <div key={index} className={`d-flex List_cumRap ${item1.maCumRap === movieShow ? 'cumRap-logo' : ''}`}
                                                    onClick={() => { getMovieShowTimes(item1.maCumRap, item.maHeThongRap) }}
                                                >
                                                    <div className={`logo_cumRap ${item1.maCumRap === movieShow ? 'active-logo' : ''}`}>
                                                        <img src={item.logo} alt='' width='95' height='95'></img>
                                                    </div>
                                                    <div className='content'>
                                                        <h5>{item1.tenCumRap}</h5>
                                                        <p>{item1.diaChi}</p>
                                                    </div>

                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-12 list_showTimes'>
                        <h2>CHỌN LỊCH CHIẾU</h2>
                        <div className='showTimes_over'>
                            {
                                movieRap.filter(movie1 => movie1.maCumRap === movieShow)
                                    .map((movie2) => (
                                        movie2.danhSachPhim.map(movie3 => (
                                            <div className='showTimes_logo row'>
                                                <div className=' col-xl-5 col-lg-6 col-md-5 col-12 picture'>
                                                    <img src={movie3.hinhAnh} alt=''></img>
                                                </div>
                                                <div className='col-xl-7 col-lg-6 col-md-7 col-12 content_cenima'>
                                                    <h3>{movie3.tenPhim}</h3>
                                                    <p>Lịch chiếu:</p>
                                                    <div className='row'>
                                                        {
                                                            movie3.lstLichChieuTheoPhim.map(movie4 => (
                                                                <div className='item_btn col-xl-6 col-lg-12 col-md-6 col-6'>
                                                                    <button
                                                                        onClick={() => history.push(`/${movie4.maLichChieu}/booking`)}
                                                                    >
                                                                        <Moment format="hh:mm">{movie4.ngayChieuGioChieu}</Moment>~
                                                                        <Moment format="DD/MM">{movie4.ngayChieuGioChieu}</Moment>
                                                                    </button>

                                                                </div>

                                                            ))

                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

