import { LOGIN } from './types'
import axios from 'helpers/axios'
import swal from 'sweetalert'

export const login = (userInfo, history, setSubmitting) => {
  
  return dispatch => {
    axios.post('api/QuanLyNguoiDung/DangNhap', userInfo)
      .then(res => {
        dispatch(actLogin(res.data))
        localStorage.setItem('access_token', res.data.accessToken)
        axios.defaults.headers['Authorization'] = `Bearer ${res.data.accessToken}`
        swal({
          title: "Đăng nhập thành công",
          icon: "success",
          timer: 5000
        });
        history.push('/')
      })
      .catch(err => {
        swal({
          title: "Không thành công",
          text: "Vui lòng đăng nhập lại!",
          icon: "error",
        });
      })
      .finally(() => {
        setSubmitting(false)
      })
  }
}

export const actLogin = credential => ({
  type: LOGIN,
  payload: credential
})
