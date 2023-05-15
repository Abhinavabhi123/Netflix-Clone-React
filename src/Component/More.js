import React,{useContext} from 'react'
import { userContext } from './Hook'


function More() {
    const user = useContext(userContext);
  return (
    <div>
       this is  {user}
    </div>
     
  )
}

export default More
