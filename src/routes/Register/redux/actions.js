import axios from 'helpers/axios'
import swal from 'sweetalert'


export const login = (userInfo, history, setSubmitting) => {
    console.log(userInfo)
    const mapping ={...userInfo, maNhom:'GP02',maLoaiNguoiDung:'KhachHang'}
  return dispatch => {
    axios.post('/api/QuanLyNguoiDung/DangKy',mapping)
      .then(res => {
        swal({
          title: "Đăng ký thành công",
          icon: "success",
        });
        history.push('/login')
      })
      .catch(err => {
        swal({
          title: "Không thành công",
          text: "Vui lòng đăng ký lại!",
          icon: "error",
        });
      })
      .finally(() => {
        setSubmitting(false)
      })
  }
}