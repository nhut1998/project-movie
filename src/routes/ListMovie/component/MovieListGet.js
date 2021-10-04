import React, { useCallback,useEffect  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchListMovieNext } from '../redux/actions'
import ListMovie from './ListMovie'

export default function MovieListGet() {
    const dispatch = useDispatch()
    const movieListNext = useSelector(state => state.movie.listMovieNext)
    useEffect(() => {
        dispatch(fetchListMovieNext())
    }, [dispatch])

    const xemThem = useCallback(
        (trang) => {
            dispatch(fetchListMovieNext(trang))
        },
        [dispatch])


    return (
        <>
          <ListMovie 
            xemThem={ xemThem } 
           movieListNext={ movieListNext} />
          
          </>
      
  )
}
