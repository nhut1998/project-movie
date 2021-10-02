import React,{ useEffect} from 'react'
import Banners from '../components/Banners'
import { useDispatch,useSelector } from 'react-redux'
import { fetchBannerMovie } from '../redux/actions'

export default function BannersContainer() {
    const bannerMovie = useSelector(state => state.banner.bannerMovie)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(fetchBannerMovie())
    }, [dispatch])
    return (
        <>
          <Banners bannerMovie={bannerMovie}/>  
        </>
    )
}
