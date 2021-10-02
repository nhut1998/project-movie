import React,{ useEffect,useCallback } from 'react'
import ListAdminMovie from '../component/ListAdminMovie'
import { useDispatch,useSelector } from 'react-redux'
import { fetchAdMovie } from '../redux/actions'
import {fetchDelete} from '../redux/actions'

export default function ListAdminContainer() {
    const dispatch = useDispatch()
    const listTheater = useSelector(state=>state.admovie.listMovieAdmin) 
    console.log(listTheater)
    const hanldSearch = useCallback(
        (movie) => {
            if(movie===''){    
               
                dispatch(fetchAdMovie(movie))
            }else{
                dispatch(fetchAdMovie(`&tenPhim=${movie}`))
          }
       
        },
        [dispatch],
    )
    useEffect(() => {
        dispatch(fetchAdMovie())
       
    }, [dispatch])

    const remove = useCallback((xoa) => {
            dispatch(fetchDelete(xoa))
            dispatch(fetchAdMovie())
        },
        [dispatch],
    )
   
    return (
        <>
           <ListAdminMovie listTheater={listTheater}remove={remove} hanldSearch={hanldSearch}/> 
        </>
    )
}
