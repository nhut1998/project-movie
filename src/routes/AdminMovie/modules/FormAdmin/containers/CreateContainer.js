import React, { useState } from 'react'
import FormAdmin from '../component/FormAdmin'
import { fetchCreateMovie } from '../redux/actions';
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { useHistory } from "react-router-dom";


export  function Create() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [picture, setPicture] = useState(null)
    const [dataMovie, setDataMovie] = useState({
        maPhim: 0,
        tenPhim: '',
        biDanh: '',
        trailer: '',
        moTa: '',
        ngayKhoiChieu: '',
        danhGia: '',
        hinhAnh: '',

    })
    console.log(dataMovie)
    const submitData = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('maPhim', dataMovie.maPhim)
        formData.append('tenPhim', dataMovie.tenPhim)
        formData.append('biDanh', dataMovie.biDanh)
        formData.append('trailer', dataMovie.trailer)
        formData.append('moTa', dataMovie.moTa)
        formData.append('ngayKhoiChieu', moment(dataMovie.ngayKhoiChieu).format('DD/MM/yyyy'))
        formData.append('danhGia', dataMovie.danhGia)
        formData.append('hinhAnh', dataMovie.hinhAnh)
        formData.append('maNhom', 'GP02')
        dispatch(fetchCreateMovie(formData))
        history.push('/admin')

    }
    const hanldPicture = (e) => {
        setPicture(URL.createObjectURL(e.target.files[0]))
        setDataMovie({...dataMovie, hinhAnh:e.target.files[0]})
    }
    return (
        <>
         <FormAdmin
         title=' TRANG TẠO PHIM'
         title1='Tạo phim'
         picture={picture}
         dataMovie={dataMovie}
        hanldPicture={hanldPicture}
         setDataMovie= {newData=>{setDataMovie({...dataMovie,...newData})}}
         submitData={submitData}
         />
            
        </>
    )
}
