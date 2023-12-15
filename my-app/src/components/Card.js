import React from "react";
const {Avatar} = require('./Avatar');
const {Details} = require('./Details');


export function Card(props){
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar imgUrl={props.image} />
        </div>
        <div className="bottom">
        <Details detailInfo={props.phone}/>
        <Details detailInfo={props.email}/>
        </div>
      </div>
    </div>
  );
}

export default Card;