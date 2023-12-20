import React, { useState } from "react";


export function Lists(props) {
    // const [clickedStatus, setClickedStatus] = useState(false);
    
    // function handleClick(){
    //     setClickedStatus((previousValue) => {
    //         return(
    //         !previousValue
    //     )
    //     })
    // }
        
    // return(<li onClick={handleClick} style={{ textDecoration: (clickedStatus)?"line-through":"" }}>{props.list}</li>)
    
    return(<li onClick={() => {
        props.handleClick(props.id)
    }}>{props.list}</li>)
}

export default Lists;
