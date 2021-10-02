import { FILM_LIST } from "./types";
import axios from "helpers/axios";

export const fetchSlick = () => {
    return dispatch => {
        axios({
            url: `api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP02&soTrang=1&soPhanTuTrenTrang=20`,
            method: 'GET'
        })
            .then(res => {
                dispatch(actSlick(res.data))
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const actSlick = ( slickFilm) => ({
    type:  FILM_LIST,
    payload:  slickFilm
})