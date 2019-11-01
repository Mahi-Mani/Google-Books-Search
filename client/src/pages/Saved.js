import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import { SaveList, SaveListItem } from "../components/SaveList"

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
        <Nav savedBooks = {this.savedBooks}/>
        <SaveList>
          
          {this.state.savedBooks.map(book => (

            <SaveListItem
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