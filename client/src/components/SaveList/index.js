import React from "react";
import { Container, Row, Col } from "../Grid";

export function SaveList({ children }) {
  console.log({children});
  return <ul className="list-group">{children}</ul>;
}

export function SaveListItem(props) {
  console.log("Inside book list props " + props);
  console.log(props);
  let id = props.id;
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <img alt={props.title} src={props.image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            <h4>{props.author}</h4>
            <p>Description: {props.description}</p>
            
          </Col>
        </Row>
      </Container>
    </li>
  );
}
