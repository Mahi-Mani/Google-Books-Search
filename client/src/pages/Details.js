import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import SearchForm from "../components/SearchForm";
import Button from "../components/Button";
// import Saved from "./pages/Saved";
// import { SaveList, SaveListItem,Saved } from "./components/Saved"
import API from "../utils/API";
import { BookList, BookListItem } from "../components/BookList"
import { Container, Row, Col } from "../components/Grid";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Saved from "./components/Saved";

class Details extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  // componentDidMount() {
  //   this.loadBooks();
  // }

  // // Loads all books  and sets them to this.state.books
  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res => {
  //       this.setState({ books: res.data })
  //     }
  //     )
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log("clicked search button");
    event.preventDefault();
    console.log(this.state.bookSearch);
    API.getBooks(this.state.bookSearch)
      .then(res => {
        console.log(res.data.items)
        this.setState({ books: res.data.items })
      });
    // .catch(err => console.log(err));
    console.log(this.state.books);
  };

  handleSaveButton = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    console.log("Inside save button");
    // if (this.state.title && this.state.author) {
    const books = this.state.books.filter(book => book.id == event.target.id);
    console.log(books);
    let bookObj = {...books};
    console.log(bookObj[0]);
    API.saveBook({
      title: bookObj[0].volumeInfo.title,
      author: bookObj[0].volumeInfo.authors[0],
      link: bookObj[0].volumeInfo.previewLink,
      description: bookObj[0].volumeInfo.description,
      image: bookObj[0].volumeInfo.imageLinks.thumbnail 
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));

    // API.getBooks(event.target.id)
    //   .then(res => {
    //     console.log(res.data.items)
    //     this.setState({ books: res.data.items })
    //   })
  }


  // <Route exact path="/saved" component={Saved} />

  render() {
    return (
      <div>


        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <SearchForm
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              <BookList>
                {this.state.books.map(book => (

                  <BookListItem
                    key={book.volumeInfo.title}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    link={book.volumeInfo.previewLink}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    handleSaveButton={this.handleSaveButton}
                    id={book.id}
                  />))}

              </BookList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Details;
