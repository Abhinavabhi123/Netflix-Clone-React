import React,{useRef} from 'react'

function Hook() {
    const myRef = useRef()
    const handle=()=>{
        myRef.current.innerHTML="clicked"
    }
  return (
    <div>
      <button onClick={handle}>Click Me</button>
      <div ref={myRef}>

      </div>
    </div>
  )
}

export default Hook
