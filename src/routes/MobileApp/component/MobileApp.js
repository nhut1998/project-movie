import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/mobile.scss'
import ap1 from '../../../assets/img/ap7.jfif'
import ap2 from '../../../assets/img/ap2.jfif'
import ap3 from '../../../assets/img/ap3.jfif'
import ap4 from '../../../assets/img/ap8.jfif'
import ap5 from '../../../assets/img/ap11.jfif'
import ap6 from '../../../assets/img/ap5.jfif'
import ap7 from '../../../assets/img/ap1.jfif'
import ap9 from '../../../assets/img/ap4.jfif'
import ap10 from '../../../assets/img/ap7.jfif'
import ap11 from '../../../assets/img/ap10.jfif'
import ap12 from '../../../assets/img/ap6.jfif'
import ip3 from '../../../assets/img/ip3.png'
import googlePlay from '../../../assets/img/go4.png'
import appStore from '../../../assets/img/st2.png'
import swal from 'sweetalert'

export default function MobileApp() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 100,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false

    };
    const [info, setInfo] = useState('')
    const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(info)

    const hanldPromotion = () => {

        if (info === '') {
            swal({
                title: 'Vui lòng nhập Email',
                icon: "warning",
            });
        } else if (email) {

            swal({
                title: 'Đăng ký ưu đãi thành công',
                icon: "success",
            });
            setInfo('')

        } else {
            swal({
                title: 'Đăng ký ưu đãi không thành công',
                icon: "error",
            });
            setInfo('')
        }

    }
    return (
        <div className='mobile' name='Mobile'>
            <div className='mobile_item row'>
                <div className='info_mobile col-xl-6 col-lg-6 col-md-12'>
                    <div className='mobile_group'>
                        <h6>ĐĂNG KÝ NHẬN THÔNG TIN CẬP NHẬT VÀ ƯU ĐÃI QUA EMAIL</h6>
                        <p>Cơ hội nhận được mã giảm giá và thông tin phim mới nhanh nhất</p>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nhập địa chỉ email" onChange={(e) => setInfo(e.target.value)} />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" onClick={()=>hanldPromotion()}>XÁC NHẬN</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='application_mobile col-xl-6 col-lg-6 col-md-12'>
                    <div className='app_mobile row'>
                        <div className='item_app col-xl-4 col-lg-5 col-md-4 col-12'>
                            <div className='slick_app'>
                                <Slider {...settings}>
                                    <div className='slider_two' >
                                        <img src={ap1} width='198' height='415'></img>
                                    </div>
                                    <div className='slider_two' >
                                        <img src={ap2} width='198' height='415'></img>
                                    </div>
                                    <div className='slider_two' >
                                        <img src={ap3} width='198' height='415'></img>
                                    </div>
                                    <div className='slider_two' >
                                        <img src={ap4} width='198' height='415'></img>
                                    </div>
                                    <div className='slider_two' >
                                        <img src={ap5} width='198' height='415'></img>
                                    </div>
                                    <div className='slider_two' >
                                        <img src={ap6} width='198' height='415'></img>
                                    </div>
                                    <div className='slider_two' >
                                        <img src={ap7} width='198' height='415'></img>
                                    </div>
                                    <div className='slider_two' >
                                        <img src={ap9} width='198' height='415'></img>
                                    </div>
                                    <div className='slider_two' >
                                        <img src={ap10} width='198' height='415'></img>
                                    </div>
                                    <div className='slider_two' >
                                        <img src={ap11} width='198' height='415'></img>
                                    </div>
                                    <div className='slider_two' >
                                        <img src={ap12} width='198' height='415'></img>
                                    </div>
                                </Slider>
                            </div>
                            <div className='iphone'><img src={ip3}></img></div>
                        </div>
                        <div className='item_application col-xl-8 col-lg-7 col-md-8 col-12'>
                            <div className='item_content'>
                                <h6>ỨNG DỤNG ĐẶT VÉ XEM PHIM TIỆN LỢI ĐÃ CÓ TRÊN SMARTPHONE</h6>
                                <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                                <p>Tải ngay ứng dụng:</p>
                                <div className='application_down'>
                                    <img src={googlePlay} width='75' height='80'></img>
                                    <img src={appStore} width='75' height='80'></img>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
