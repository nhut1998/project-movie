import React from 'react'
import '../assets/formUser.scss'
import {useHistory} from 'react-router-dom'

export default function FormUser({ title, submitData, dataUser, setDataUser, title1 }) {
  const history =useHistory()

    return (
        <div>

            <div className='w-50 mx-auto userForm'>
                <h2>{title}</h2>
                <form onSubmit={(e) => submitData(e)} autoComplete='off'>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Tài khoản</label>
                        <input type="text"
                            className="form-control"
                            value={dataUser.taiKhoan}
                            name='taiKhoan'
                            placeholder='Tài khoản'
                            onChange={(e) => setDataUser({ ...dataUser, taiKhoan: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                        <input type="password"
                            className="form-control"
                             placeholder='Mật khẩu'
                            value={dataUser.matKhau}
                            name='matKhau'
                            onChange={(e) => setDataUser({ ...dataUser, matKhau: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Họ tên</label>
                        <input type="text"
                            className="form-control"
                            value={dataUser.hoTen}
                            name='hoTen'
                            placeholder='Họ tên'
                            onChange={(e) => setDataUser({ ...dataUser, hoTen: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Email</label>
                        <input type="email"
                            className="form-control"
                            name='email'
                            placeholder='Email'
                            value={dataUser.email}
                            onChange={(e) => setDataUser({ ...dataUser, email: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Số điện thoại</label>
                        <input type="text"
                            className="form-control"
                            name='soDt'
                            placeholder='Số điện thoại'
                            value={dataUser.soDt}
                            onChange={(e) => setDataUser({ ...dataUser, soDt: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Loại người dùng</label>
                        <select className="form-control"
                            onChange={(e) => setDataUser({ ...dataUser, maLoaiNguoiDung: e.target.value })}
                        >
                            <option selected>Chọn</option>
                            <option value="QuanTri">QuanTri</option>
                            <option value='KhachHang'>KhachHang</option>

                        </select>
                    </div>

                    <button type="submit" className="btn_user">{title1}</button>
                    <button type="button" className="btn_reset" onClick={()=> history.push('/admin/listuser')}>Hủy</button>
                </form>

            </div>
        </div>
    )
}
