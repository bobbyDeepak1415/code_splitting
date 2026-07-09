import React from 'react'
import { Link, Routes } from 'react-router-dom'
import Home1 from './Home1'
import About1 from './About1'
import { Store1 } from './Store1'

const App1 = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NavWrapper/>}>
        <Route path='/' element={<Home1/>}>Home</Route>
        <Route path='/' element={<About1/>}>About</Route>
        <Route path='/' element={<Store1/>}>Store</Route>

        </Route>
      </Routes>
    </div>
  )
}

export default App1


function NavWrapper(){

  return (
    <>
    <nav>
      <Link></Link>
    </nav>
    </>
  )

}
