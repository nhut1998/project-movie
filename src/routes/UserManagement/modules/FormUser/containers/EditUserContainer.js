import axios from 'helpers/axios'
import React,{useCallback, useState,useEffect} from 'react'
import { useParams,useHistory } from 'react-router'
import FormUser from '../component/FormUser'
import { fetchInfoListUser } from '../../ListUser/redux/actions'
import {useDispatch} from 'react-redux'
export  function EditUser() {
    const history = useHistory()
     const dispatch = useDispatch()
    const params=useParams()
    const [dataUser, setDataUser]=  useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP02",
        maLoaiNguoiDung: "",
        hoTen: ""
    })

    const fetchTypeUser = useCallback(() => {
      axios({
          url:`api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02&tuKhoa=${params.edituserID}`,
          method:'GET'
      })
       .then(res=>{
           setDataUser({
            taiKhoan: res.data[0].taiKhoan,
            matKhau: res.data[0].matKhau,
            email: res.data[0].email,
            soDt: res.data[0].soDt,        
            maLoaiNguoiDung: res.data[0].maLoaiNguoiDung,
            hoTen: res.data[0].hoTen,
            
           })
       })
    },[params.edituserID])

    useEffect(() => {
      fetchTypeUser()
    }, [fetchTypeUser])

    const  submitData = useCallback((e)=>{
        e.preventDefault()
        const mapping ={...dataUser,maNhom:'GP02'}
        axios({
            url:`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            method:'PUT',
            data: mapping
        })
        .then(res=>{
            dispatch(fetchInfoListUser())
            history.push('/admin/listuser')
        })
     },[dataUser, dispatch, history])
      
    
    
    return (
        <>
        <FormUser title='Chỉnh sửa người dùng'
        title1='Cập nhật'
        dataUser={dataUser}
        submitData={submitData}
        setDataUser={newData=>setDataUser({...dataUser,...newData})}

        />
        </>
    )
}
