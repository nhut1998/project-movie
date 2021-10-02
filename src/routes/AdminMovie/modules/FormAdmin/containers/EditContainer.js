import React, { useState,useCallback, useEffect,useRef } from 'react'
import FormAdmin from '../component/FormAdmin'
// import moment from 'moment'
import axios from 'helpers/axios';
import { useHistory, useParams } from 'react-router';
import {objectToFormData}  from 'helpers/functions';
import { fetchAdMovie } from '../../ListAdminMovie/redux/actions';
import { useDispatch } from 'react-redux';
import { Loading } from 'routes/Loading/component/Loading';


export  function Edit() {
    const loading = useRef()
 const dispatch = useDispatch()
 const history = useHistory()
    const params = useParams()
    const [picture, setPicture] = useState(null)
    const [dataMovie, setDataMovie] = useState({
        maPhim: '',
        tenPhim: '',
        biDanh: '',
        trailer: '',
        moTa: '',
        ngayKhoiChieu: '',
        danhGia: 0,
        hinhAnh: '',
        maNhom:'GP02'

    })
    
    const hanldPicture = (e) => {
        setPicture(URL.createObjectURL(e.target.files[0]))
        setDataMovie({...dataMovie, hinhAnh:e.target.files[0]})
    }
    const fetchDetail = useCallback(() => {
        loading.current.show()
         axios({
            url:`api/QuanLyPhim/LayThongTinPhim?MaPhim=${params.editID}`,
            method:'GET'
         }) 
         .then(res=>{
             setDataMovie({        
               maPhim:res.data.maPhim,
               tenPhim:res.data.tenPhim,
               biDanh:res.data.biDanh,
               trailer:res.data.trailer,
               moTa:res.data.moTa,
               danhGia:res.data.danhGia,
               hinhAnh:res.data.hinhAnh,
               ngayKhoiChieu:res.data.ngayKhoiChieu,
             })
         })   
         .finally(loading.current.hide)
        },
        [ params.editID],
    )
    useEffect(() => {
       fetchDetail()
    }, [fetchDetail])

    const submitData = useCallback(() => {
        const mapping = {...dataMovie,maNhom:'GP02'}
        axios({
            url:`api/QuanLyPhim/CapNhatPhimUpload`,
            method:'POST',
            data: objectToFormData(mapping)
        })
        .then(res=>{
            dispatch(fetchAdMovie())
            history.push(`/admin`)

        })
        },
        [dataMovie, dispatch, history],
    )

    
    return (
        <>
           <FormAdmin
           title='TRANG CHỈNH SỬA PHIM'
           title1='Cập nhật'
           picture={picture}
           dataMovie={dataMovie}
           setDataMovie= {data=>{setDataMovie({...dataMovie,...data})}}
           hanldPicture={hanldPicture}
           submitData={submitData}
           /> 
           <Loading ref={loading}/>
        </>
    )
}
