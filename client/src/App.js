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
    books: [],
    bookSearch: ""
  };

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
      .then(res => {console.log(res)
        this.setState({ books: res.data })})
      .catch(err => console.log(err));
  };

  handleSaved = event => {
    event.preventDefault();
    API.updateSaved(true, )
  }

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
            <BookList>
              {this.state.books.map(book => {
                return (
                  <BookListItem
                    key={book.title}
                    title={book.title}
                    author={book.author}
                    link={book.link}
                    description={book.description}
                    image={book.image}
                    saved={false}
                    id={book._id}
                  />
                );
              })}
            </BookList>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
