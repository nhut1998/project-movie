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

