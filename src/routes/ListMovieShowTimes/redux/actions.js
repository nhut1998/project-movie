
import { LIST_MOVIE_DETAIL } from './types'
import axios from 'helpers/axios'



export const fetchDeailId=(maPhim,loading)=> {
   
    return dispatch =>{
        axios({
            url:`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method:'GET'

        })
        .then(res=>{
           
            dispatch(actFectDetailId(res.data))
        })
        .catch(err=>{
            console.log(err)
        })
        .finally(loading.current?.hide)
    }
   
    
      
}
export const actFectDetailId =(detailMaPhim)=> ({
    type: LIST_MOVIE_DETAIL,
    payload:detailMaPhim
})