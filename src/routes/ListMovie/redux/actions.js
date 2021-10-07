import {LIST_MOVIE_NEXT } from "./types"
import axios from "helpers/axios"


export const fetchListMovieNext =(id=2)=>{
  return dispatch =>{
    axios ({
      url:`/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP02 &soTrang=${id}&soPhanTuTrenTrang=8`,
      method:'GET'
    })
    .then(res=>{
      dispatch(actFectListMovieNext(res.data)) 
    })
    .catch(err=>{
      console.log(err)
    })
  } 
}
export const actFectListMovieNext=(listMovieNext)=>({
  type:LIST_MOVIE_NEXT ,
  payload:listMovieNext

})

