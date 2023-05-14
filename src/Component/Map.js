import React from "react";
const MyComponent=()=>{
    const name = ["Alice","Bob","Charlie"];
    const nameList = name.map((name,index)=> <li key={index}>{name}</li>);
    return(
        <div>
            <h1>List of name</h1>
            <ul>{nameList}</ul>
        </div>
    )
}
export default MyComponent;