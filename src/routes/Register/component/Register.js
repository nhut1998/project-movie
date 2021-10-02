import React from 'react'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup';
import styles from "../assets/styles.module.scss";


export default function Register() {
  const dispatch = useDispatch()
  const history = useHistory()
  return (

    <div className={styles.formMovie} >
      <div className={styles.movieRegister}>
        <h6>ĐĂNG KÝ</h6>
        <div className={styles.formItem}>
          <Formik
            initialValues={{ taiKhoan: '', matKhau: '', email: '', soDt: '', hoTen: '' }}
            validationSchema={Yup.object({
              taiKhoan: Yup.string()
                .max(15, 'Phải có 15 ký tự trở xuống')
                .required('Vui lòng nhập tên tài khoản'),
              matKhau: Yup.string()
                .min(8, 'Mật khẩu quá ngắn-Phải ít nhất 8 kí tự')
                .required('Vui lòng nhập mật khẩu')
                .matches(
                      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      "Phải ít nhất một chữ cái và một số"
                    ),
              email: Yup.string()
                .required('Vui lòng nhập email')
                .matches(
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  "Không đúng định dạng"
                ),
              soDt: Yup.string()
                .required('Vui lòng nhập số điện thoại'),
              hoTen: Yup.string()
                .required('Vui lòng nhập họ tên'),



            })}

            onSubmit={(values, { setSubmitting }) => {
              dispatch(login(values, history, setSubmitting))
            }}

          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,

            }) => (
              <form onSubmit={handleSubmit} autoComplete='off'>
                <div className={`${styles.formGroup} form-group mb-3`}>
                  <lable className={styles.nameInput}>Tài khoản</lable>
                  <input
                    type="text"
                    name="taiKhoan"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.taiKhoan}
                    className={`form-control ${styles.formAccount}  ${errors.taiKhoan && touched.taiKhoan && 'is-invalid'}`}
                    placeholder='Nhập tài khoản'
                  />
                  {errors.taiKhoan && touched.taiKhoan && <small id="helpId" className={styles.formText}>{errors.taiKhoan}</small>}
                </div>

                <div className={`${styles.formGroup} form-group mb-3`}>
                  <lable className={styles.nameInput}>Mật khẩu</lable>
                  <input
                    type="password"
                    name="matKhau"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.matKhau}
                    className={`form-control ${styles.formAccount}  ${errors.matKhau && touched.matKhau && 'is-invalid'}`}
                    placeholder='Nhập mật khẩu'
                  />
                  {errors.matKhau && touched.matKhau && <small id="helpId" className={styles.formText}>{errors.matKhau}</small>}
                </div>
                <div className={`${styles.formGroup} form-group mb-3`}>
                  <lable className={styles.nameInput}>Email</lable>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={`form-control ${styles.formAccount}  ${errors.email && touched.email && 'is-invalid'}`}
                    placeholder='Nhập email'
                  />
                  {errors.email && touched.email && <small id="helpId" className={styles.formText}>{errors.email}</small>}
                </div>
                <div className={`${styles.formGroup} form-group mb-3`}>
                  <lable className={styles.nameInput}>Số điện thoại</lable>
                  <input
                    type="text"
                    name="soDt"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.sdt}
                    className={`form-control  ${styles.formAccount} ${errors.soDt && touched.soDt && 'is-invalid'}`}
                    placeholder='Nhập số điện thoại'
                  />
                  {errors.soDt && touched.soDt && <small id="helpId" className={styles.formText}>{errors.soDt}</small>}
                </div>
                <div className={`${styles.formGroup} form-group mb-3`}>
                  <lable className={styles.nameInput}>Họ tên</lable>
                  <input
                    type="text"
                    name="hoTen"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.khachhang}
                    className={`form-control ${styles.formAccount} ${errors.hoTen && touched.hoTen && 'is-invalid'}`}
                    placeholder='Nhập họ tên'
                  />
                  {errors.hoTen && touched.hoTen && <small id="helpId" className={styles.formText}>{errors.hoTen}</small>}
                </div>

                <button className='btn w-100' type="submit" disabled={isSubmitting}>
                 Đăng ký
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>

    </div>
  )
}
