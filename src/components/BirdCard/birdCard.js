import React from "react";
import "./style.css";

function BirdCard(props) {
  return (
    <div
      onClick={() => props.selectBird(props.id)}
      id={props.id}
      className="card"
    >
      <img alt={props.name} src={props.image} />
    </div>
  );
}

export default BirdCard;
