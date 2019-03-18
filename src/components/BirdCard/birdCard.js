import React from "react";
import "./style.css";

function BirdCard(props) {
  return (
    <div id={props.id} className="card">
      <img alt={props.name} src={props.image} />

      <span onClick={() => props.selectBird(props.id)} />
    </div>
  );
}

export default BirdCard;
