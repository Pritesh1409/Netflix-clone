import React from 'react'
import Cardslider from './Cardslider'

export default React.memo( function Slider({movies}) {

    const getMoviesFromRange=(from , to)=>{
        return movies.slice(from,to)
    }
  return (
    <div>
      <Cardslider title="Trending Now" data={getMoviesFromRange(0,10)} />
      <Cardslider title="New Releases" data={getMoviesFromRange(10,20)} />
      <Cardslider title="BlockBuster" data={getMoviesFromRange(20,30)} />
      <Cardslider title="Popular" data={getMoviesFromRange(30,40)} />
      <Cardslider title="Action Movies" data={getMoviesFromRange(40,50)} />
      <Cardslider title="Epics" data={getMoviesFromRange(50,60)} />
    </div>
  )
}
)

