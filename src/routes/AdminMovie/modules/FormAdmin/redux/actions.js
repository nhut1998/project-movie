import { CREATE_MOVIE,GET_EDITMOVIE } from "./types";
import axios from "helpers/axios";
import { fetchAdMovie } from "../../ListAdminMovie/redux/actions";


export const fetchCreateMovie = (dataCreate)=>{ 
  
    return dispatch =>{        
        axios({
            url:'api/QuanLyPhim/ThemPhimUploadHinh',
            method:'POST',
            data:dataCreate        
        })
        .then(res=>{
            fetchAdMovie()
        
             
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
export const actCreateMovie = (createMovie) =>({
    type:CREATE_MOVIE,
    payload:createMovie
})

// export const fetchMovieEdit = (maPhim)=>{
//     return dispatch =>{
//         axios({
//             url:`api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
//             method:'GET'
//         })
//         .then(res=>{
//          dispatch(actMovieEdit(res.data))
//         })
//     }
// }

// export const actMovieEdit = (infoFim)=>({
//    type:GET_EDITMOVIE,
//    payload:infoFim
// })

// export const fetchEdit = (edit) =>{
//     return dispatch => {
//         axios({
//             url:`api/QuanLyPhim/CapNhatPhimUpload`,
//             method:"POST",
//             data:edit
//         })
//         .then(res=>{
//             console.log(res.data)
//         })
//     }
   
// }