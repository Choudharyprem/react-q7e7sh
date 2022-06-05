import React from 'react'
import {Link} from 'react-router-dom'
export default function Login(){
  return(
    <>
    <input type="text" placeholder="enter your email adrress"/>
    <input type="text" placeholder="enter your password"/>
   <Link to="/content">
    <input type="submit"/>
    </Link>
    </>
  )
}