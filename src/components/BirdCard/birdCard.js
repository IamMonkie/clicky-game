import React from "react";
import "./style.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const borderStyle = {
  borderRadius: ".75rem"
};

function BirdCard(props) {
  return (
    <Card className="card-container" style={borderStyle}>
      <CardActionArea className="card-container">
        <CardMedia className="card-container">
          <div
            onClick={() => props.selectBird(props.id)}
            id={props.id}
            className="card"
          >
            <div className="img-container">
              <img alt={props.name} src={props.image} />
            </div>
            <div />
          </div>
        </CardMedia>
      </CardActionArea>
    </Card>
  );
}

export default BirdCard;
