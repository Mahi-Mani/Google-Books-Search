import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import SearchForm from "./components/SearchForm";
import Button from "./components/Button";
import API from "./utils/API";
import { BookList, BookListItem } from "./components/BookList"
import { Container, Row, Col } from "./components/Grid";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Saved from "./components/Saved";

class App extends Component {
  state = {
    books: []
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

  // handleSaveButton = event => {
  //   event.preventDefault();
  //   // if (this.state.title && this.state.author) {
  //   API.saveBook({
  //     title: this.state.title
  //   })
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  //   // }
  // }


  // <Route exact path="/saved" component={Saved} />

  render() {
    return (
      <div>


        <Router>
          <Nav />
          <div>
            <Route exact path="/" component={BookList} />
            <Route exact path="/books" component={BookList} />

          </div>
        </Router>
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <SearchForm
                        name="title"
                        value={this.state.title}
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
                    saved={false}
                    id={book._id}
                    handleSaveButton={this.handleSaveButton}
                  />))}

              </BookList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
