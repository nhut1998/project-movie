import React, { useEffect,useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fecthInformation,fetchDetail,fetchDetailShowTimes } from '../redux/actions'
import Info from './Info'

export default function Information() {
    
    const dispatch = useDispatch()
    const logo = useSelector(state => state.logo.listLogo)
    const mahe = useSelector(state => state.logo.listDetail)
    const movieRap = useSelector(state => state.logo.listMovieShow)
    const cum = useSelector(state => state.logo.theater)
    
    useEffect(() => {
        dispatch(fecthInformation())
    }, [dispatch])


    useEffect(() => {
        dispatch(fetchDetail())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchDetailShowTimes())
    }, [dispatch])

    const chonRap = useCallback(
        (maHeThongRap) => {
            dispatch(fetchDetail(maHeThongRap))
        },
        [dispatch],
    )
   
 
    const getMovie = useCallback(
        (maHeThongRap) => {
            dispatch(fetchDetailShowTimes(maHeThongRap))
        },
        [dispatch],
    )
 
    return (
         <>
        <Info chonRap={chonRap} 
        logo={logo} mahe={mahe} 
        getMovie={getMovie}
        movieRap={movieRap}
        cum={cum}
        />
        </>
        
    )
}
