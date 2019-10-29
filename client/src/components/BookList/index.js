import React from "react";
import { Container, Row, Col } from "../Grid";

export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function BookListItem({
  image = "https://placehold.it/300x300",
  title,
  author,
  description,
  link,
  id
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <img alt={title} src={image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <h4>{author}</h4>
            <p>Description: {description}</p>
            <button type="button" rel="noreferrer noopener" target="_blank" href={link}>
              View
            </button>
            <button type = "button" id={id} onClick={() => props.clicked(id)}>
                Save
            </button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
