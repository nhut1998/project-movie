import React from 'react'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { updateAccount } from '../redux/actions'
import swal from 'sweetalert'
import '../assets/infoAccount.scss'
import 'sweetalert2/dist/sweetalert2.css'


export default function OnchangePassword({ updateInfo, updateInfo1 }) {
    const dispatch = useDispatch()
    return (
        <div className='ChangePassWord'>
            <h6>ĐỔI MẬT KHẨU</h6>
            <div className='ChangeItems'>
                <Formik
                    initialValues={{
                        taiKhoan: updateInfo.taiKhoan,
                        matKhau:'',
                        email: updateInfo.email,
                        soDt: updateInfo.soDT,
                        hoTen: updateInfo.hoTen,
                        maLoaiNguoiDung: 'KhachHang',
                        maNhom: 'GP02',
                        matKhauCu: '',
                        nhapMatKhauMoi: ''
                    }}
                    onSubmit={(values) => {
                        
                        if(values.matKhauCu !== updateInfo1.matKhau){
                            swal({
                                title: "Không thành công",
                                text: "Sai mật khẩu",
                                icon: "warning",
                              });
                        }else if(values.matKhau!==values.nhapMatKhauMoi){
                            swal({
                                title: "Không thành công",
                                text: "Mật khẩu không khớp",
                                icon: "warning",
                              });
                        }else{
                            dispatch(updateAccount(values))

                        }
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <input
                                    type="password"
                                    name="matKhauCu"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.matKhauCu}
                                    className={`form-control  ${errors.taiKhoan && touched.taiKhoan && 'is-invalid'}`}
                                    placeholder='Mật khẩu cũ'
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type="password"
                                    name="matKhau"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.matKhau}
                                    className={`form-control    ${errors.matKhau && touched.matKhau && 'is-invalid'}`}
                                    placeholder='Mật khẩu mới'
                                />
                                {errors.matKhau && touched.matKhau && <small id="helpId" className="form-text text-muted ">{errors.matKhau}</small>}
                            </div>
                            <div className='form-group'>
                                <input
                                    type="password"
                                    name="nhapMatKhauMoi"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.nhapMatKhauMoi}
                                    className={`form-control   ${errors.matKhau && touched.matKhau && 'is-invalid'}`}
                                    placeholder='Nhập lại mật khẩu '
                                />
                                {errors.matKhau && touched.matKhau && <small id="helpId" className="form-text text-muted ">{errors.matKhau}</small>}
                            </div>
                            <button className='w-100 btnPass' type="submit" >
                                Cập nhật mật khẩu
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
