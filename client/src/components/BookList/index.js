import React from "react";
import { Container, Row, Col } from "../Grid";

export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function BookListItem(props) {
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
            <button type="button">
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={props.link}
            >
              View Book Here!
            </a>
            </button>
            <button type = "button" id={props.id} onClick={props.handleSaveButton}>
                Save
            </button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
