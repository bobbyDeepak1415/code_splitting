import React, { useRef, useState } from "react";

export default function FileUploader() {

const [selectedFiles,setSelectedFiles]=useState([])

const inputRef=useRef(0)

const handleClick=()=>{
    inputRef.current.click()
}

const handleSelect=(e)=>{
    const files=Array.dataTransfer.files(e.)



}

const handleDrop=()=>{

}

const handleDragEnter=(e)=>{
e.preventDefault()
}

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          onChange={(e) => handleSelect()}
          type="file"
          ref={inputRef}
          hidden
        ></input>
        <button onClick={() => handleClick()}>Browse files</button>
      </div>
      <div style={{display:"flex",justifyContent:"center"}} >

      <div
        onDragEnter={() => handleDragEnter()}
        onDragOver={() => handleDragEnter()}
        onDrop={()=>handleDrop()}
        style={{
            marginTop: "20px",
            border: "1px dashed",
            height: "35vh",
            width:"90vw",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
        }}
        >
        Drop Here
      </div>
          </div>

      <div>
        <ul>
          {selectedFiles.map((file, index) => {
            return <li key={index}>{file.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
