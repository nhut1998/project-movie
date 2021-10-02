import React from 'react'
import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { login } from '../redux/actions'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup';
import styles from "../assets/styles.module.scss";

export default function Login() {
  const dispatch = useDispatch()
  const history = useHistory()
  return (
    <div className={styles.formMovie}>
      <div className={styles.itemLogin}>
        <h6>ĐĂNG NHẬP</h6>
        <div className={styles.formItem}>

          <div className={styles.formLogin}>
            {/* <h2 className='display-4 text-center'>f</h2> */}
            <Formik
              initialValues={{ taiKhoan: '', matKhau: '' }}
              validationSchema={Yup.object({
                taiKhoan: Yup.string()
                  .required('Vui lòng nhập tên tài khoản'),
                matKhau: Yup.string()
                  .required('Vui lòng nhập mật khẩu')
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
                <form onSubmit={handleSubmit}  autoComplete='off'>
                  <div className={`${styles.formGroup} form-group mb-3`}>
                    <lable className={styles.nameInput}>Tài khoản</lable>
                    <input
                   autoComplete='off'
                      type="text"
                      name="taiKhoan"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.taiKhoan}
                      className={`form-control ${styles.formAccount} 
                       ${errors.taiKhoan && touched.taiKhoan && 'is-invalid'}`}
                      placeholder='Nhập tài khoản'
                    />
                    {errors.taiKhoan && touched.taiKhoan && <small id="helpId" className={styles.formText}>{errors.taiKhoan}</small>}
                  </div>
                  <div className={`${styles.formGroup} form-group mb-3`}>
                  <lable className={styles.nameInput}>Mật khẩu</lable>
                    <input
                      autoComplete='off'
                      type='password'
                      name="matKhau"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.matKhau}
                      className={`form-control ${styles.formControls}  
                      ${errors.matKhau && touched.matKhau && 'is-invalid'}`}
                      placeholder='Nhập mật khẩu'
                    />
                    {errors.matKhau && touched.matKhau && <small id="helpId" className={styles.formText}>{errors.matKhau}</small>}
                  </div>

                  <button className='btn  w-100' type="submit" disabled={isSubmitting}>
                    Đăng nhập
                  </button>
                  <div  className={styles.pushRegister}>
                  <p>Bạn chưa có tài khoản?</p>
                  <h6 onClick={()=>history.push(`/register`)}>ĐĂNG KÝ</h6>
                  </div>                 
                </form>
                
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}
