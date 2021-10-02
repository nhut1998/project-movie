
import './App.css';
import React, { lazy, useEffect, Suspense } from 'react';
import Header from 'layouts/Header'
import { BrowserRouter as NhutRouter, Switch, Route, Redirect } from 'react-router-dom'

import Register from 'routes/Register';
import Footer from 'routes/Footer/component/Footer';
import ScrollToTop from 'routes/ScrollToTop/component/ScrollToTop'
import ListMovieShowTimes from 'routes/ListMovieShowTimes';
import Booking from 'routes/Booking';
import ListAdminMovie from 'routes/AdminMovie/modules/ListAdminMovie';
import { Create, Edit } from './routes/AdminMovie/modules/FormAdmin'
import Calendar from './routes/Calendar'
import ListUser from 'routes/UserManagement/modules/ListUser';
import { AddUser, EditUser } from 'routes/UserManagement/modules/FormUser';
import Admin from 'routes/Admin/component/Admin';
import axios from 'helpers/axios'
import { useSelector } from 'react-redux'
import FallBack from 'routes/Loading/component/FallBack'
const Home = lazy(() => import('routes/Home/component/Home'))
const Login = lazy(() => import('routes/Login'))
const InfoAccount = lazy(() => import('routes/InfoAccount'))

function App() {
  const accessToken = useSelector(state => state.user.credential.accessToken)
  const maLoai = useSelector(state => state.user.credential.maLoaiNguoiDung)
  useEffect(() => {
    if (accessToken) {
      axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`
    }
  }, [accessToken])

  return (
    <NhutRouter>
      <ScrollToTop />
      <Suspense fallback={<FallBack />}>
        <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register} exact/>
          <Route
            path="/admin"
            render={routeProps => {
              if (localStorage.getItem('access_token') && maLoai === 'QuanTri') {
                return (
                  <>
                    <Route path={`${routeProps.match.url}/:edituserID/chinhsuanguoidung`} component={EditUser} exact />
                    <Route path={`${routeProps.match.url}/create`} component={Create} exact />
                    <Route path={`${routeProps.match.url}/:calendarID/quanliphim`} component={Calendar} exact />
                    <Route path={`${routeProps.match.url}/adduser`} component={AddUser} exact />
                    <Route path={`${routeProps.match.url}/:editID/edit`} component={Edit} exact />
                    <Route path={`${routeProps.match.url}`} component={Admin} exact />
                  </>
                )
              } else {
                return <Redirect to='/' />
              }
            }}
          />

          <Route
            path="/"
            render={routeProps => {
              return (
                <>
                  <Header />
                  <Route path={`${routeProps.match.url}`} component={Home} exact />
                  <Route path={`${routeProps.match.url}:bookingID/booking`} component={Booking} exact />
                  <Route path={`${routeProps.match.url}:detailID/chitietphim`} component={ListMovieShowTimes} exact />
                  <Route path={`${routeProps.match.url}account`} component={InfoAccount} exact />
                  <Footer />
                </>
              )
            }}
          />

        </Switch>
      </Suspense>

    </NhutRouter>

  );
}

export default App;
