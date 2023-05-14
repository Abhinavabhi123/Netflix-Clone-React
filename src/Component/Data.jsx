import React from "react";

const MyData = ({name="John",age=16,address="NewYork"})=>{
    return(
    <div>
        <h1>{name}</h1>
        <p>{age} years old</p>
        <p>Livers at {address}</p>
    </div>
    )
}

export default MyData;