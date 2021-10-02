import axios from 'helpers/axios'

import React,{useCallback, useState} from 'react'
import FormUser from '../component/FormUser'


export function AddUser() {

    const [dataUser, setDataUser]=  useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP02",
        maLoaiNguoiDung: "",
        hoTen: ""
    })   
    const submitData = useCallback((e)=>{
        e.preventDefault()
     axios({
         url:'api/QuanLyNguoiDung/ThemNguoiDung',
         method:'POST',
         data:dataUser
     })
    
    },[dataUser])

   
    return (
        <>
          <FormUser title='Thêm người dùng'
          title1='Tạo người dùng'
          submitData={submitData}
          dataUser={dataUser}
          setDataUser={newData=>setDataUser({...dataUser,...newData})}
          />  
        </>
    )
}
