import React, { useState } from 'react'
import { Sum } from '../sum'
import About from './About'

export default function Home() {

    const [loggedIn,setLoggedIn]=useState(false)
    

    return (
        <div>
            <div>

        <button onClick={()=>alert(Sum(3,4))}>3,4</button>

            </div>
            <div>
                <button onClick={()=>setLoggedIn((prev)=>!prev)}> Login</button>
                {loggedIn ? 
                <About/> :"Not logged In"}
            </div>


        </div>
    )
}
