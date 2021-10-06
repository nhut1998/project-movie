import axios from "helpers/axios";
import { LIST_USER } from "./types";

export const fetchInfoListUser = (tuKhoa)=>{
    const keyWord = tuKhoa ? `&tuKhoa=${tuKhoa}`:''
    return dispatch =>{
        axios({
            url:`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02${keyWord}`,
            method:'GET'
        })
        .then(res=>{     
            dispatch(actInfoListUser(res.data))
        })
    }
}
export const actInfoListUser = (userList)=>({
    type:LIST_USER,
    payload:userList
})

export const fetchDeleteUser = (xoa) => {

    return dispatch => {
        axios({
            url: `api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${xoa}`,
            method: 'DELETE',
        })
            .then(res => {           
            })
            .catch(err => {
                console.log(err)
            })
    }
}