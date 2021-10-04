import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll';
import logo from '../../../assets/img/logoNhut.png'
import '../assets/header.scss'
import { useSelector, useDispatch } from 'react-redux';
import { CLEAR_USER } from 'routes/Login/redux/types';
import PersonIcon from '@material-ui/icons/Person';
import Swal from 'sweetalert2'



export default function Header() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.credential)
    const logOut = () => {
        Swal.fire({
            title: 'Bạn có muốn đăng xuất',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#C0C0C0',
            confirmButtonText: 'Đăng xuất',
            cancelButtonText: 'Hủy'
         
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear()
                dispatch({ type: CLEAR_USER })
            }
        })
    }

    return (
        <div className='header'>

            <div className='nav-header'>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt='logo' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item nav_hover">
                                <Link className="navbar-home" to="/">
                                    Trang chủ
                                </Link>
                            </li>
                            <li className="nav-item nav_hover ">
                                <LinkScroll
                                    to="Info"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    className="navbar-home"
                                >
                                    Lịch chiếu
                                </LinkScroll>
                            </li>
                            <li className="nav-item nav_hover">
                                <LinkScroll
                                    to="ListMovie"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    className="navbar-home"
                                >
                                    Cụm rạp
                                </LinkScroll>
                            </li>
                            <li className="nav-item nav_hover">
                                <LinkScroll
                                    to="Footer"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    className="navbar-home"
                                >
                                    Tin tức
                                </LinkScroll>
                            </li>
                            <li className="nav-item nav_hover">
                                <LinkScroll
                                    to="Mobile"
                                    spy={true}
                                    smooth={true}
                                    duration={1000}
                                    className="navbar-home"
                                >
                                    Ứng dụng
                                </LinkScroll>
                            </li>
                        </ul>
                       
                        <ul className="navbar-nav navbar-hover">
                            <li className='nav_down'>
                                <div className='person'>
                                    <PersonIcon className='icon_avt'/>
                                <Link className="nav-link user_icon" > {user.accessToken ? user.hoTen : 'Tài khoản'}</Link>
                                </div>
                                
                                <div className= {`${user.accessToken?'items_in':'items_out'}`}>
                                <div className='triangle'></div>
                                    <div className='user_btn'>
                                        {
                                            user.accessToken ?
                                                <>
                                                    <button>
                                                        <Link className="nav-link " to='/account#thongtintaikhoan'>Tài khoản</Link>
                                                    </button>
                                                    <button>

                                                        <Link className="nav-link " to='/account#doimatkhau'>Đổi mật khẩu</Link>
                                                    </button>
                                                    <button>
                                                        <Link className="nav-link " onClick={()=>{logOut()}}>Đăng xuất</Link>
                                                    </button>
                                                </>
                                                :
                                                <>
                                                    <button>
                                                        <Link className="nav-link " to='/register'>Đăng ký</Link>
                                                    </button>
                                                    <button>
                                                        <Link className="nav-link" to='/login'>Đăng nhập</Link>
                                                    </button>

                                                </>
                                        }
                                    </div>
                                </div>
                            </li>

                        </ul>

                    </div>

                </nav>

            </div>

        </div>

    )
}