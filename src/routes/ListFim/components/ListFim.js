import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import StarIcon from '@material-ui/icons/Star';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import _ from 'lodash';
import '../../../../node_modules/react-modal-video/scss/modal-video.scss'
import '../assets/listfim.scss'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'


export default function ListFim({ listFilm }) {
    const history = useHistory()
    const [modalTrailer, setModal] = useState('')
    const hdModal = (trailer) => {
        setOpen(true)
        setModal(trailer)
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: < ArrowForwardIosIcon />,
        prevArrow: <ArrowBackIosIcon />,
        responsive: [
            {
                breakpoint: 1040,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    autoplay: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    nextArrow: < ArrowForwardIosIcon />,
                    prevArrow: <ArrowBackIosIcon />
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    autoplay: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    nextArrow: < ArrowForwardIosIcon />,
                    prevArrow: <ArrowBackIosIcon />
                }
            },
            {
                breakpoint: 400,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    autoplay: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: < ArrowForwardIosIcon />,
                    prevArrow: <ArrowBackIosIcon />
                }
            }
        ]
    };
    const user = useSelector(state => state.user.credential)
    const [isOpen, setOpen] = useState(false)
    const muaVe = (maPhim) => {
        if (user.accessToken) {
            history.push(`/${maPhim}/chitietphim`)
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
        <div className='list_movie'>
            <div className='movie'>
                <h2>PHIM HOT TRONG THÁNG</h2>
                <Slider {...settings}>
                    {
                        _.map(listFilm.items, (fim, index) => (
                            <div className='item_fim' key={index}>
                                <div className='list_fim'>
                                    <img src={fim.hinhAnh} alt={fim.tenPhim}></img>
                                    <div className='content_fim'>
                                        <h6>{fim.tenPhim}</h6>
                                        <div className='star_fim'>
                                            <StarIcon className='star' />
                                            <StarIcon className='star' />
                                            <StarIcon className='star' />
                                            <StarIcon className='star' />
                                            <StarIcon className='star' />
                                        </div>
                                    </div>
                                    <div className='btn_override'>
                                        <PlayCircleOutlineIcon className='icon_movie'
                                            onClick={() => hdModal(fim.trailer)} />
                                        <button className='btn_ticket' onClick={() => muaVe(fim.maPhim)}>MUA VÉ</button>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </Slider>
            </div>
            <ModalVideo className='modal' channel='youtube' autoplay isOpen={isOpen} onClose={() => setOpen(false)} >
                <iframe width="1920" height="1080"
                    src={modalTrailer} title='tenPhim'
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </ModalVideo>
        </div>
    )
}
