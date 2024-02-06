import React, { useState } from 'react'
import styled from 'styled-components'
import Backgroundimg from './Backgroundimg'
import Header from './Header'
import {firebaseAuth} from "../utils/firebase-config"
import { createUserWithEmailAndPassword } from 'firebase/auth'
function Signup() {
  const [showPassword , setShowPassword] = useState(false)
  const [formValue , setFormValue] = useState({
    email :"",
    password:""
  })

  const handleSignIn = async ()=>{
    try {
      const {email,password} = formValue;
      await createUserWithEmailAndPassword(firebaseAuth,email,password)
        } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container showPassword={showPassword} >
    <Backgroundimg/>
    <div className="content">
    <Header login />
    <div className='body flex column a-center j-center' >
        <div className='text flex column' >
            <h1>Unlimited Movies TV shows And More</h1>
            <h4>Watch Anywhere ,Cancel anytime</h4>
            <h6>Ready to Watch? Enter your email to create or restart your membership</h6>
        </div>
        <div className="form">
          <input type="email" placeholder='Email address'  name='email' value={formValue.email} onChange={(e)=>setFormValue({...setFormValue,[e.target.name]:e.target.value,})} />
            {
              showPassword && <input type="password" placeholder='Password' name='password' value={formValue.password} onChange={(e)=>setFormValue({...setFormValue,[e.target.name]:e.target.value,})} />
            }
            {
              !showPassword && (<button onClick={()=>setShowPassword(true)} >Get Started</button>)
            }
        </div>
        <button onClick={handleSignIn}>Sign Up</button>
    </div>
    </div>

    </Container>
  )
}

const Container = styled.div`
position : relative;
.content {
  position : absolute; 
  top : 0;
  left : 0;
  background-color : rgba(0,0,0,0.5);
  height : 100vh;
  width : 100vw;
  display : grid;
  grid-template-rows: 15vh 85vh;
  .body{
    gap: 16px;
    .text{
      gap:16px;
      text-align:center;
      font size :36px;
      h1{
        padding : 0 400px;
      }
      h4{
        font-size:21px;
      }
      h6{
        font-size:18px;
      }
    }
    .form{
      display:grid;
      grid-template-columns:${({showPassword})=>showPassword?"1fr 1fr" : "2fr 1fr"};
      width : 60%;
      input{
        color:black;
        border:none;
        padding:24px;
        font-size:19px;
        border:1px soild black;
        &:focus{
          outline:none;
        }
      }
      button{
        padding: 8px 16px;
        background-color : #e50914;
        border: none;
        cursor:pointer;
        color:white;
        font-weight : bolder;
        font-size: 1.05rem;
      }
    }
    button{
      padding: 8px 16px;
      background-color : #e50914;
      border: none;
      cursor:pointer;
      color:white;
      border-radius: 4px;
      font-weight : bolder;
      font-size: 1.05rem;
    }
  }
} `

export default Signup
 