import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchMovies, getGenres } from '../store'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config'
import styled from 'styled-components'
import Slider from '../components/Slider'
import Notavailable from './Notavailable'
import Navbar from '../components/Navbar'
import SelectGenre from './SelectGenre'

export default function Movies() {
  const [isScrolled , setIsScrolled]= useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const genresLoaded = useSelector((state)=>state.netflix.genresLoaded)
  const movies = useSelector((state)=>state.netflix.movies)
  const genres = useSelector((state)=>state.netflix.genres)
  useEffect(()=>{
    dispatch(getGenres())
  },[])
  useEffect(()=>{
    if(genresLoaded) dispatch(fetchMovies({type: "movie"}))
  },[genresLoaded])

   onAuthStateChanged(firebaseAuth, (currentUser) => {
  // if (currentUser) navigate("/netflix");
  });
  window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return ()=> (window.onscroll = null)
  }
  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="data">
      <SelectGenre genres={genres} type="movie" />
        {
            movies.length ? <Slider movies={movies}/>:
            <Notavailable/>
        }
      </div>
    </Container>
  )
}

const Container = styled.div`
.data{
    margin-top:8rem;
    .not-available{
        text-align:center;
        color:white;
        margin-top:4rem;
    }
}

`

