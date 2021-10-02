import { combineReducers } from 'redux'
import userReducer from 'routes/Login/redux/reducers'
import infoReducers from 'routes/Information/redux/reducers'
import  movieList from 'routes/ListMovie/redux/reducers'
import maPhimReducer from 'routes/ListMovieShowTimes/redux/reducers'
import bookingList from 'routes/Booking/redux/reducers'
import accountReducer from 'routes/InfoAccount/redux/reducers'
import adminListMovie from 'routes/AdminMovie/modules/ListAdminMovie/redux/reducers'
import systemTheater from 'routes/Calendar/redux/reducers'
import infoUserList from 'routes/UserManagement/modules/ListUser/redux/reducers'
import infoBannerMovie from 'routes/Banners/redux/reducers'
import slickListFilm from 'routes/ListFim/redux/reducers'

export default combineReducers({
    user:userReducer,
    logo:infoReducers,
    movie:movieList,
    maphim:maPhimReducer,
    booking:bookingList,
    account:accountReducer,
    theater:systemTheater,
    admovie:adminListMovie,
    infoUser:infoUserList,
    banner:infoBannerMovie,
    slick:slickListFilm

  })
  