import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
function Header(props) {
  const navigate =  useNavigate()
  return (
    <Container className='flex a-center j-between' >
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={()=>navigate(props.login?"/login" : "/signup")} >
        {props.login ? "Log In " : "Sign In"}
      </button>
    </Container>
  )
}

const Container = styled.div`
padding : 0 4rem;
margin-top:50px;
.logo{
  img{
    height: 100px;
  }
}
button{
  padding: 0.5rem 1rem;
  background-color : #e50914;
  border: none;
  cursor:pointer;
  color:white;
  border-radius: 4px;
  font-weight : bolder;
  font-size: 1.05rem;
}
`

export default Header

