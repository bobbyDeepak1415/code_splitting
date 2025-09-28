import React, { useRef, useState } from "react";

export default function FileUploader() {

const [selectedFiles,setSelectedFiles]=useState([])

const inputRef=useRef(null)

const handleClick=()=>{
    inputRef.current.value=""
    inputRef.current.click()
}

const handleSelect=(e)=>{

    const localArr=Array.from(e.target.files)


    setSelectedFiles(prev=>[...prev,...localArr])



}

const handleDrop=(e)=>{
    e.preventDefault()
    const localArr=Array.from(e.dataTransfer.files)
    setSelectedFiles([...selectedFiles,...localArr])

}

const handleDragEnter=(e)=>{
e.preventDefault()
e.stopEventPropagation()
}

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
        value={selectedFiles}
        multiple
          onChange={(e) => handleSelect(e)}
          type="file"
          ref={inputRef}
          hidden
        ></input>
        <button onClick={() => handleClick()}>Browse files</button>
      </div>
      <div style={{display:"flex",justifyContent:"center"}} >

      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDrop={(e)=>handleDrop(e)}
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
