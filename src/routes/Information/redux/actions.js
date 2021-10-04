import { DETAIL, INFORMATION,LOGO_ITEM } from "./types";
import axios from "helpers/axios";



export const fecthInformation = () => {
    

    return dispatch => {
        axios({
            url: '/api/QuanLyRap/LayThongTinHeThongRap',
            method: 'GET'
        })
            .then(res => {
              
                dispatch(actFetchList(res.data))

            })
            .catch(err => {
                console.log(err)
            })

    }


}
export const actFetchList = listLogo => ({
    type: INFORMATION,
    payload: listLogo
})
export const fetchDetail = (maHeThongRap='BHDStar') => {
    return dispatch => {
        axios({
            url: `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP02`,
            method: 'GET'
        })
            .then(res => {
                dispatch(actDetail(res.data))
            })
            .catch(err=>{
                console.log(err)
            })
    }
}
export const actDetail = listDetail => ({
    type: DETAIL,
    payload: listDetail
})

export const fetchDetailShowTimes = (maHeThongRap ='BHDStar') => {

    return dispatch => {
        axios({
            url: `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP02`,
            method: 'GET'
        })
            .then(res => {         
                dispatch(actDetailShowTimes(res.data[0].lstCumRap))
            })
            .catch(err=>{
                console.log(err)
            })
    }

}
export const actDetailShowTimes = listMovieShow => ({
    type: LOGO_ITEM,
    payload:listMovieShow
})


