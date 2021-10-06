import React from 'react'
import _ from 'lodash'
import Seat from './Seat'
import WeekendIcon from '@material-ui/icons/Weekend';
import moment from 'moment'

export default function Booking({ listSeat, infoMovie, bookTicket, total, reserveSeat }) {

    return (
        <div className='bg_booking'>

            <div className='row booking'>

                <div className='col-xl-7 col-lg-8 col-md-12 col-12 listSeat '>
                    <div className='screen mx-auto'>SCREEN</div>
                    <div className="seat_item">
                        {
                            _.map(listSeat, (ghe, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <Seat ghe={ghe} />
                                        {(index + 1) % 16 === 0 && <br />}
                                    </React.Fragment>
                                )
                            }

                            )
                        }

                    </div>
                    <div className='ghiChu'>
                        <div className='item_often'>
                            <div className='seat_often'>
                            <WeekendIcon className='icon_often' />
                            </div>
                            <p className='text_often'>Thường</p>
                        </div>
                        <div className='item_vip'>
                            <div className='seat_vip'>
                            <WeekendIcon className='icon_vip' />

                            </div>
                            <p className='text_'>Vip</p>
                        </div>
                        <div className='item_choose'>
                            <div className='seat_choose'>
                            <WeekendIcon className='icon_choose' />

                            </div>
                            <p className=''>Chọn</p>
                        </div>
                        <div className='item_booked'>
                            <div className='seat_booked'>
                            <WeekendIcon className='icon_booked' />

                            </div>
                            <p className=''>Đã Đặt</p>
                        </div>
                    </div>
                </div>
                <div className='col-xl-5 col-lg-4 col-md-12 col-12 infoPicture'>
                    <div className='infoMovie row'>


                        <div className='picture col-xl-4 col-lg-4 col-md-3 col-4'>
                            <div className='picture_movie'>

                            <img src={infoMovie.hinhAnh} alt=''/>
                            </div>
                       
                            <div className='text_digital'><h6>3D</h6><p>DIGITAL</p></div>
                        </div>
                        <div className='infoMovie_text col-xl-8 col-lg-8 col-md-9 col-8'>
                            <h5>{infoMovie.tenPhim}</h5>
                            <p className='sestion_text'>Session:<span className='time_text'>{infoMovie.gioChieu}</span>  <span>{moment(infoMovie.ngayChieu).format("MMM Do YY")}</span></p>
                            <div className='cinema'>
                                <p className='text_cinema'>{infoMovie.tenRap}</p>
                                <h6>{infoMovie.tenCumRap}</h6>
                                <p>{infoMovie.diaChi}</p>
                            </div>
                        </div>
                    </div>
                    <div className='booked_seat'>
                       <div className='text_booking'>
                           <div className='seat_content'>
                           <span>Ghế đang đặt:</span>

                           </div>
                            <p>{reserveSeat} </p></div>
                        <div className='total_money'>
                            <div className='text_money'>
                            <h6>Tổng tiền:</h6>
                            <p>{total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>                             
                            </div>
                            <button onClick={bookTicket}>Đặt vé</button>                   
                        </div>                         
                    </div>                  
                </div>

            </div>
        </div>
    )
}
