import React, { useState } from 'react'
import { Rate } from 'antd'
import _ from 'lodash'
import StarIcon from '@material-ui/icons/Star';
import ModalVideo from 'react-modal-video'
import '../../../../node_modules/react-modal-video/scss/modal-video.scss'
import '../assets/detailMovie.scss'
import moment from 'moment';
import { useHistory } from 'react-router';



export default function ListMovieShowTimes({ detail }) {
    console.log(detail)
    const history = useHistory()

    // const nhut =['BHD Star Cineplex - 3/2','CGV - Aeon Bình Tân',
    // 'CNS - Hai Bà Trưng','GLX - Huỳnh Tấn Phát','Lotte - Cantavil']
    const [heThong, setHeThong] = useState([])
    const [cinema, setCinema] = useState([])
    console.log(cinema)
    const [tenLogo, setTenLogo] = useState({
        tenHeThongRap: 'BHD Star Cineplex',
        logo: 'http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png'
    })
    // console.log(heThong.cumRapChieu)



    const [timesDate, setTimesDate] = useState('17-12')

    const [cumRap, setCumRap] = useState({
        tenCumRap: 'BHD Star Cineplex - 3/2'
    })


    const hanldCumRap = (heThong, tenHeThong, logo) => {

        setHeThong(heThong)
        setTenLogo({
            tenHeThongRap: tenHeThong,
            logo: logo
        })
        const maCum = []
        detail.heThongRapChieu.map(movie => {
            return movie.tenHeThongRap === tenLogo.tenHeThongRap && (
                movie.cumRapChieu.map(movie2 => (
                    maCum.push(movie2.maCumRap)
                ))

            )
        }

        )
        setCinema(maCum)



    }
    const hanldDateTimes = (date, cumRapChieu) => {
        setTimesDate(date)
        setCumRap(cumRapChieu)


    }
    const [isOpen, setOpen] = useState(false)
    const theLoai = [
        'Hành động kịch tính',
        'Cổ trang trung quốc',
        'Phiêu lưu',
        'Tình cảm Lãng mạn',
        'Kịch tính',
        'Tâm lý',
        'Chiến tranh',
        'Khoa học viễn tưởng',
        'Hài kịch',
        'Kinh dị Giật gân',
     
    ];
    const handleRandom = theLoai[Math.floor(Math.random() * theLoai.length)];

    return (
        <div className='detail'>
            <div className='detail_item row'>
                <div className='booked_detail col-xl-4 col-lg-4 col-md-4 col-12'>
                    <div className='item_picture'>
                        <img src={detail.hinhAnh} alt=''></img>
                    </div>
                    <div className='item_trailer'>
                        <ModalVideo  channel='youtube' autoplay isOpen={isOpen} 
                        onClose={() => setOpen(false)} 
                         >
                            <iframe width="1920" height="1080" src={detail.trailer} title={detail.tenPhim}
                                frameborder="0" allow="accelerometer; autoplay;
                                               clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen />
                        </ModalVideo>
                        <button className="btn-booking" >Booking</button>
                        <button className="btn-trailer" onClick={() => setOpen(true)}>Trailer</button>
                    </div>
                </div>
                <div className='item_text col-xl-8 col-lg-8 col-md-8 col-12'>
                    <h5>{detail.tenPhim}</h5>
                    <button className="btn_digital" >3D Digital</button>
                    <p><span className='text'>Nội dung phim:</span><span className='text_mota'>{detail.moTa}</span></p>
                    <p><span className='text'>Đạo diễn:</span><span>Christopher Nolan</span></p>
                    <p><span className='text'>Thể loại:</span><span>{handleRandom}</span></p>
                    <p><span className='text'>Ngày khởi chiếu:</span><span>{moment(detail.ngayKhoiChieu).format('DD-MM-yy')}</span></p>
                    <p><span className='text'>Thời lượng;</span><span>120 phút</span></p>
                    <p><span className='text'>Ngôn ngữ:</span><span>Phụ đề tiếng Việt</span></p>
                    <p >
                        <span className='text'>Đánh giá:</span>
                        <StarIcon className='star' />
                        <StarIcon className='star' />
                        <StarIcon className='star' />
                        <StarIcon className='star' />
                        <StarIcon className='star' />

                    </p>
                </div>

            </div>
            <div className='calendar'>

                <h4>CHỌN RẠP VÀ LỊCH CHIẾU </h4>
                <div className='row theater'>
                    <div className='col-xl-4 col-lg-4 col-md-4 col-12 theater_logo'>
                        {
                            _.map(detail.heThongRapChieu, info => (
                                <div className={`logo_item row 
                            ${info.tenHeThongRap === tenLogo.tenHeThongRap ? 'active_theater' : ''}`}   >
                                    <div className='logo_detail col-4'><img src={info.logo} alt=''
                                        onClick={() => { hanldCumRap(info, info.tenHeThongRap, info.logo) }}
                                    ></img>
                                    </div>
                                    <div className=' detail_system  col-8'>
                                        <h6>{info.tenHeThongRap}</h6>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                    <div className='col-xl-8 col-lg-8 col-md-8 col-12 items_date'>
                        <div className='date_movie'>

                            <div className='date_item d-flex'>
                                {
                                    _.map(detail.heThongRapChieu, info => {
                                        if (info.tenHeThongRap === tenLogo.tenHeThongRap) {
                                            return (
                                                _.map(info.cumRapChieu, theater => {
                                                    return (
                                                        _.map(_.uniq(_.map(theater.lichChieuPhim, theater1 =>
                                                            moment(theater1.ngayChieuGioChieu).format('DD-MM'))),

                                                            date => {
                                                                return (
                                                                    <p className={`${date === timesDate ? 'act_date' : ''}`}
                                                                        onClick={() => hanldDateTimes(date, theater)}
                                                                    > {date} </p>
                                                                )
                                                            })
                                                    )
                                                }
                                                )

                                            )
                                        }
                                    }



                                    )


                                }
                            </div>
                            <div className='system'>
                                <div className='system_item'>
                                    <div className='system_logo'><img src={tenLogo.logo} alt=''></img></div>
                                    <div className='text_digital'>3D Digital</div>
                                </div>
                                <div className='system_name'>
                                    <p className='text-heThong'>{tenLogo.tenHeThongRap}</p>
                                    {
                                        _.map(detail.heThongRapChieu, info => {
                                            if (info.tenHeThongRap === tenLogo.tenHeThongRap) {
                                                return (
                                                    _.map(info.cumRapChieu, tenCum => {
                                                        if (tenCum.tenCumRap === cumRap.tenCumRap) {
                                                            return (
                                                                <p className='text-cum'>{tenCum.tenCumRap}</p>
                                                            )
                                                        }
                                                    }

                                                    )

                                                )
                                            }
                                        }



                                        )


                                    }

                                </div>
                            </div>
                            <div className='dateTimes'>
                                <h5>Giờ chiếu</h5>
                                <div className='dateTime_item'>
                                    {

                                        _.map(detail.heThongRapChieu, info => {
                                            if (info.tenHeThongRap === tenLogo.tenHeThongRap) {
                                                return (
                                                    _.map(info.cumRapChieu, theater => {
                                                        if (theater.tenCumRap === cumRap.tenCumRap) {
                                                            return (
                                                                _.map(theater.lichChieuPhim, theater1 => {
                                                                    return moment(theater1.ngayChieuGioChieu).format('DD-MM') === timesDate && (

                                                                        <button
                                                                            onClick={() => history.push(`/${theater1.maLichChieu}/booking`)}
                                                                        > {moment(theater1.ngayChieuGioChieu).format('hh:mm')} </button>

                                                                    )


                                                                })


                                                            )
                                                        }
                                                    }
                                                    )

                                                )
                                            }
                                        }

                                     )
                                    }

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
