import React, { Component } from "react";
import API from "../utils/API";
import { SaveList, SaveListItem } from "../components/SaveList"
// import { Container, Row, Col } from "../Grid";
// API.getSavedBooks()
// .then(res => {
//   console.log(res.data)
//   var arr = res.data
//   arr.map(book => (
//     <div className="card" style="width: 18rem;">
//       <div className="card-body">
//         <h5 className="card-title">{book.title}</h5>
//         <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
//         <p className="card-text">{book.description}</p>
//         <a href="#" className="card-link">{book.previewLink}</a>
//         <a href="#" className="card-link">Another link</a>
//       </div>
//     </div>
//     ))
// })
class Saved extends Component {
  state = {
    savedBooks: []
  };

  savedBooks = () => {
    API.getSavedBooks()
      .then(res => {
        console.log(res.data)
        var arr = res.data
        this.setState({ savedBooks: arr })
      })

  }

  render() {
    return (
      <div>
        <button onClick={this.savedBooks}>Saved Books</button>
        <SaveList>
          
          {this.state.savedBooks.map(book => (

            <SaveListItem
              key={this.savedBooks}
              title={book.title}
              author={book.authors}
              link={book.link}
              description={book.description}
              image={book.image}
              id={book.id}
            />))}

        </SaveList>
      </div>

    );
  }
}


export default Saved;