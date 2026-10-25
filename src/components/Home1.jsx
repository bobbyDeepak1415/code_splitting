import React, { Suspense } from 'react'

const About1=React.lazy(()=>delay(1500).then(()=>import('./About1').then((module)=>{
  return {
    default:module.default
  }
})))

const Home1 = () => {
  return (
    <div>
      <h1>

      Home111
      </h1>
      <Suspense fallback={<p>Loading...</p>}>


      <About1/>
      </Suspense>
    </div>
  )
}


function delay(timer){
  return new Promise((resolve)=>{
    setTimeout(resolve,timer)
  })
}

export default Home1
