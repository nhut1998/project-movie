import React, { useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListMovieShowTimes from '../component/ListMovieShowTimes'
import { fetchDeailId } from '../redux/actions'
import { useParams } from 'react-router'
import { Loading } from 'routes/Loading/component/Loading'


export default function ShowTimesContainer() {
    const loading = useRef()
    const dispatch = useDispatch()
    const detail = useSelector(state => state.maphim.detailMaPhim)


    const params = useParams()

    useEffect(() => {
        dispatch(fetchDeailId((`${params.detailID}`),loading))
        loading.current.show()
    }, [dispatch, params.detailID])



    return (
        <div>
            <ListMovieShowTimes detail={detail} />
            <Loading ref={loading}/>
        </div>
    )
}
