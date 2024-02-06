import React from 'react'
import Background from '../assets/login.jpg'
import styled from 'styled-components'
function Backgroundimg() {
  return (
    <Container>
      <img src= {Background} alt="Background" />
    </Container>
  )
}

const Container = styled.div`
height : 100vh;
width : 100vw;
 img{
   height: 100vh;
   width : 100vw;
  }`
  
  export default Backgroundimg