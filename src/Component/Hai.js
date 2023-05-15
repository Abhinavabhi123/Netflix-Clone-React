import React,{useState} from 'react';


function Hai() {
  const [count, setCount] = useState(0);
  
  const addCount = () => {
    setCount(count+1);
    console.log(count);
  };
  return (
    <div>
      <button onClick={addCount}>Add</button>
      <h1>Counter:{count}</h1>
    </div>
  )
}

export default Hai
