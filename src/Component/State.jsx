import React,{useState}from 'react'


function State() {
    const initial=0;
    const [count,setCount] = useState(initial)
    const add=()=>{
        for(let i=0;i<5;i++){
            setCount(hello=>hello+1)
        }
    }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)} style={{marginRight:"20px"}}> Add</button>
      <button onClick={()=>setCount(count-1)} style={{marginRight:"20px"}}>Dec</button>
      <button onClick={()=>setCount(initial)} style={{marginRight:"20px"}}> reset</button>
    <button onClick={add}>Increment 5</button>
    </div>
  )
}

export default State
