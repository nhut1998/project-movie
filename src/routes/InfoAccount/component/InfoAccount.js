import React, { useCallback } from 'react'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { updateAccount } from '../redux/actions'
// import { useHistory } from 'react-router-dom'
import * as Yup from 'yup';
import '../assets/infoAccount.scss'
import swal from 'sweetalert'


export default function InfoAccount({ updateInfo, updateInfo1 }) {

  const dispatch = useDispatch()
  return (
    <div className='form-account'>
      <h6>THÔNG TIN TÀI KHOẢN</h6>
      <div className='form_item'>
        <Formik
          initialValues={{
            taiKhoan: updateInfo.taiKhoan,
            matKhau: '',
            email: updateInfo.email,
            soDt: updateInfo.soDT,
            hoTen: updateInfo.hoTen,
            maLoaiNguoiDung: 'KhachHang',
            maNhom: 'GP02',
          }}
          validationSchema={Yup.object({
            matKhau: Yup.string()
              .required('Vui lòng nhập mật khẩu')
          })}     
          onSubmit={(values) => {
            if (values.matKhau === updateInfo1.matKhau) {
              dispatch(updateAccount(values))
            } else {
              swal({
                title: "Không thành công",
                text: "Sai mật khẩu",
                icon: "warning",
              });
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
              <div className='form-group mb-2'>
                <input
                  type="text"
                  name="taiKhoan"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.taiKhoan}
                  className={`form-control   ${errors.taiKhoan && touched.taiKhoan && 'is-invalid'}`}
                  placeholder='taiKhoan'
                />
                {/* {errors.taiKhoan && touched.taiKhoan &&  <small id="helpId" className="form-text text-muted">{errors.taiKhoan}</small>} */}
              </div>

              <div className='form-group mb-2'>
                <input
                  type="text"
                  name="hoTen"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.hoTen}
                  className={`form-control   ${errors.hoTen && touched.hoTen && 'is-invalid'}`}
                  placeholder='hoTen'
                />
                {/* {errors.matKhau && touched.matKhau && <small id="helpId" className="form-text text-muted ">{errors.matKhau}</small>} */}
              </div>
              <div className='form-group mb-2'>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  // className={`form-control  ${errors.matKhau && touched.matKhau && 'is-invalid'}`}
                  className={`form-control `}
                  placeholder='email'
                />
                {errors.email && touched.email && <small id="helpId" className="form-text text-muted ">{errors.email}</small>}
              </div>
              <div className='form-group mb-2'>
                <input
                  type="text"
                  name="soDt"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.soDt}
                  // className={`form-control  ${errors.matKhau && touched.matKhau && 'is-invalid'}`}
                   className={`form-control `}
                  placeholder='sdt'
                />
                {errors.soDt && touched.soDt && <small id="helpId" className="form-text text-muted ">{errors.soDt}</small>}
              </div>
              <div className='form-group mb-2'>
                <input
                  type="password"
                  name="matKhau"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.matKhau}
                  className={`form-control  ${errors.matKhau && touched.matKhau && 'is-invalid'}`}
                  // className='form-control '
                  placeholder='mat Khau'

                />
                {errors.matKhau && touched.matKhau && <small id="helpId" className="form-text text-muted ">{errors.matKhau}</small>}
              </div>


              <button className='btn btn-success w-100 AdBtn' type="submit" >
                Cập nhật thông tin
              </button>
            </form>
          )}
        </Formik>
      </div>
      {/* <div><OnchangePassword/></div> */}
    </div>

  )
}
