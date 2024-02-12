import React from 'react'
// import Background from '../assets/login.jpg'
import styled from 'styled-components'
function Backgroundimg() {
  return (
    <Container>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="Background" />
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