import React from 'react'

const About1=React.lazy(()=>import('./About1').then((module)=>{
  return {
    default:module.default
  }
}))

const Home1 = () => {
  return (
    <div>
      <h1>

      Home111
      </h1>

      <About1/>
    </div>
  )
}

export default Home1
