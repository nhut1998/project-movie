import _ from 'lodash'
import React,{useState} from 'react'
import moment from 'moment'
import '../assets/infoAccount.scss'


export default function TicketInfo({ inforTicket }) {
    
    return (
        <div className='infoTicket'>
        <h6>DANH SÁCH ĐẶT VÉ</h6>
        <div className='ticker'>
            <table className='table tableTicket'>
                <thead>
                    <tr>
                        <th>Tên Phim</th>
                        <th>Ngày đặt</th>
                        <th>Giá vé</th>
                        <th>Hệ thống rạp</th>
                        <th>Rạp</th>
                        <th>Số ghế</th>
                        <th>Tổng tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        _.map(inforTicket.thongTinDatVe, info => (
                            <tr>
                                <td scope="row">{info.tenPhim}</td>
                                <td>{moment(info.ngayDat).format('DD/MM/yy H:mm')}</td>
                                <td>{info.giaVe}</td>
                                <td>{info.danhSachGhe[0].tenHeThongRap}</td>
                                <td>{info.danhSachGhe[0].tenRap}</td>
                                <td className='td_seat'>
                                    {
                                        _.map(info.danhSachGhe, (info1, idx) => (
                                            <>
                                            <span>
                                            {info1.tenGhe}
                                            </span>
                                            </>
                                        ))
                                    }
                                </td>
                                <td>
                                {((info.giaVe)*(info.danhSachGhe.length)).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}

                                </td>
                                
                            </tr>

                        ))
                    }


                </tbody>
            </table>




        </div>
        </div>
    )
}
