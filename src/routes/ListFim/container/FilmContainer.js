import React, { useEffect } from 'react'
import ListFim from '../components/ListFim'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSlick } from '../redux/actions'

export default function FilmContainer() {
    const dispatch = useDispatch()
    const listFilm = useSelector(state => state.slick.slickFilm)
    useEffect(() => {
        dispatch(fetchSlick())
    }, [dispatch])


    return (
        <>
            <ListFim listFilm={listFilm} />
        </>
    )

}


