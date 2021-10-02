import { AD_MOVIE_LIST } from "./types";
import axios from "helpers/axios";

export const fetchAdMovie = (movie) => {
    const keyWord = movie ? `&tuKhoa=${movie}`:''
    return dispatch => {
        axios({
            url: `/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02${keyWord}`,
            method: 'GET'

        })
            .then(res => {
                dispatch(actAdMovie(res.data))
            })
    }
}
export const actAdMovie = (listMovieAdmin) => ({
    type: AD_MOVIE_LIST,
    payload: listMovieAdmin
})

export const fetchDelete = (xoa) => {

    return dispatch => {
        axios({
            url: `/api/QuanLyPhim/XoaPhim?MaPhim=${xoa}`,
            method: 'DELETE',

        })
            .then(res => {
                // fetchAdMovie()
            })
            .catch(err => {
                console.log(err)
            })
    }
}