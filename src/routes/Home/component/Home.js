import React from 'react'
import Banners from 'routes/Banners'
import ListFim from 'routes/ListFim'
import MovieListGet from 'routes/ListMovie/component/MovieListGet';
import Information from 'routes/Information/component/Information';
import MobileApp from 'routes/MobileApp/component/MobileApp';


export default function Home() {
  return (
    <>
      <Banners />
      <ListFim />
      <MovieListGet />
      <Information />
      <MobileApp />

    </>
  )
}
