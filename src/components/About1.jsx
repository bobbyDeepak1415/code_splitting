import React, { useState } from "react";

const About1 = () => {

  const [isLoggedIn,setIsLoggedIn]=useState(false)

  return <div>
    <h1>About1</h1>
<br></br>
<br></br>
<br></br>
    {isLoggedIn? (
      <p>User logged In successfully</p>
    ):(

<button onClick={()=>setIsLoggedIn((prev)=>!prev)}>Log in</button>
    )}

    </div>;
};

export default About1;
