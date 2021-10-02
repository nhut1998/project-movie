import { BANNER_MOVIE } from "./types";
import axios from "helpers/axios";

export const fetchBannerMovie = ()=>{
    return dispatch =>{
        axios({
            url:'api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP02',
            method:'GET'
        })
        .then(res=>{
            console.log(res.data)
            dispatch(actBannerMovie(res.data))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
export const actBannerMovie = (bannerMovie) => ({
    type:BANNER_MOVIE,
    payload:bannerMovie
})