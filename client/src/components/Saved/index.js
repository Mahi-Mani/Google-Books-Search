import React from "react";
import API from "../../utils/API";
import { Container, Row, Col } from "../Grid";

function savedBooks() {
  API.getBooks()
    .then(res => {
      console.log(res.data)
      // this.setState({ books: res.data.items })
    });
}
// <li className="list-group-item">
//   <Container>
//     <Row>
//       <Col size="xs-4 sm-2">
//         <img alt={props.title} src={props.image} />
//       </Col>
//       <Col size="xs-8 sm-9">
//         <h3>{props.title}</h3>
//         <h4>{props.author}</h4>
//         <p>Description: {props.description}</p>
//         <button type="button">
//         <a
//           rel="noreferrer noopener"
//           target="_blank"
//           href={props.link}
//         >
//           View Book Here!
//         </a>
//         </button>
//         <button type = "button" id={props.id} onClick={props.handleSaveButton}>
//             Save
//         </button>
//       </Col>
//     </Row>
//   </Container>
// </li>
function Saved() {
  return (
    savedBooks()
  );
}

export default Saved