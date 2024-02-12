import React, { useState } from 'react'
import styled from 'styled-components'
import {FaPowerOff, FaSearch} from 'react-icons/fa'
import logo from "../assets/logo.png"
import { signOut } from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config'
export default function Navbar({isScrolled}) {
    const links=[
        {name : "Home" , link :"/"},
        {name : "TV Shows" , link :"/tv"},
        {name : "Movies" , link :"/movies"},
        {name : "My List" , link :"/mylist"},
    ]
    
    const [showSearch , setShowSearch] = useState(false)
    const [inputHover , setInputHover] = useState(false)


return (
    <Container>
        <nav className={`flex ${isScrolled ? "scrolled" : ""} `}>
            <div className="left flex a-center">
                <div className="brand flex a-center j-center ">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="links flex">
                    {links.map((name , link)=>{
                            return (
                                <li key={name}>
                                    <link to={link}>{name}</link>
                                </li>
                            )
                        })}
                </ul>
            </div>
            <div className="right flex a-center">
                <div className={`search ${showSearch ? "show-search":""} `}>
                    <button onFocus={()=>setShowSearch(true)} onBlur={
                        ()=>{
                            if(!inputHover) setShowSearch(false)
                        }
                    } >
                        <FaSearch/>
                    </button>
                    <input type="text" placeholder='search '
                     onMouseEnter={()=>setInputHover(true) }
                     onMouseLeave={()=>setInputHover(false)}
                     onBlur={
                        ()=>{
                            setShowSearch(false)
                            setInputHover(false)
                        }
                     } />
                </div>
                <button onClick={()=>signOut(firebaseAuth)} >
                    <FaPowerOff/>
                </button>
            </div>
        </nav>
    </Container>
  )
}

const Container = styled.div`
`