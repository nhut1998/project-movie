import { LIST_ACCOUNT,UPDATE_ACCOUNT } from "./types";
import axios from "helpers/axios";
import { actLogin } from "routes/Login/redux/actions";
import swal from 'sweetalert'

export const getAccount = (taiKhoan)=>{
    return dispatch =>{
        axios({
            url:`/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
          method:'POST',
          data:{"taiKhoan":taiKhoan}
        })
        .then(res=>{
            dispatch(actAccount(res.data))
           ;
        })
    }
}
export const actAccount =(account)=>({
    type:LIST_ACCOUNT,
    payload:account
})

export const updateAccount =(update)=>{
    
    
    
    return dispatch =>{
        axios({
            url:`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            method:'PUT',
            data:update
        })
        .then(res=>{
      
            const mapping ={
                ...res.data, matKhau:'',
            }      
            dispatch(actLogin(mapping))
            swal({
                title: "Cập nhật thành công",
                icon: "success",
              })

        })
        .catch(err=>{
            console.log(err)
        })
    }
   
}
