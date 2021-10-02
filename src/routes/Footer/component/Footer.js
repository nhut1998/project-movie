import React from 'react'
import '../assets/footer.scss'
import bhd from '../../../assets/img/lo1.png'
import lo2 from '../../../assets/img/lo2.jfif'
import lo4 from '../../../assets/img/lo4.png'
import lo6 from '../../../assets/img/lo6.png'
import lo7 from '../../../assets/img/lo7.png'
import lo8 from '../../../assets/img/lo8.jpg'
import googlePlay from '../../../assets/img/go4.png'
import appStore from '../../../assets/img/st2.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';



export default function Footer() {
    return (
        <div className='footer' name='Footer'>
            <div className='row item_cinema'>
                <div className='col-xl-3 col-lg-3 col-md-6 cinestar'>
                    <h4>CINESTAR</h4>
                    <p>Điều khoản CINESTAR</p>
                    <p>Chính sách bảo mật</p>
                    <p>Thông tin công ty</p>
                    <p>Chăm sóc khác hàng</p>
                </div>
                <div className='col-xl-3 col-lg-3 col-md-6 doiTac'>
                    <h4>ĐỐI TÁC</h4>
                    <div className='logo_cinestar '>

                        <div className='items_cinestar'>
                            <img src={bhd} width='50' height='75' alt=''></img>
                        </div>
                        <div className='items_cinestar'>
                            <img src={lo2} width='50' height='75' alt=''></img>
                        </div>
                        <div className='items_cinestar'>
                            <img src={lo4} width='50' height='75' alt=''></img>
                        </div>
                     
                        <div className='items_cinestar'>
                            <img src={lo6} width='50' height='75' alt=''></img>
                        </div>
                        <div className='items_cinestar'>
                            <img src={lo8} width='50' height='75' alt=''></img>
                        </div>
                        <div className='items_cinestar'>
                            <img src={lo7} width='50' height='75' alt=''></img>
                        </div>

                    </div>

                </div>
                <div className='col-xl-3 col-lg-3 col-md-6 ungDung'>
                    <h4>ỨNG DỤNG TRÊN ĐIỆN THOẠI</h4>
                    <div className='aplication'><img src={googlePlay} alt='' width='100' height='70'></img></div>
                    <div className='aplication_store'><img src={appStore} alt=''  width='100' height='70'></img></div>
                    

                </div>
                <div className='col-xl-3 col-lg-3 col-md-6 ketNoi'>
                <h4>LIÊN KẾT VỚI CHÚNG TÔI</h4>
                <div className='contact'>
                    <FacebookIcon className='contact_one'/>
                    <InstagramIcon className='contact_two'/>
                    <YouTubeIcon className='contact_three'/>
                </div>
                <h5>LIÊN HỆ</h5>
                <div className='person'>
                <PersonPinCircleIcon className='icon_person'/>
                Quận 8, Hồ Chí Minh, Việt Nam
                </div>
                <div className='email'>
                  <EmailIcon className='icon_email'/>
                  truongquocnhut7285@gmail.com
                </div>
                <div className='phone'>
                  <PhoneIphoneIcon className='icon_phone'/>
                 0123456789
                </div>

                </div>

            </div>
        </div>
    )
}
