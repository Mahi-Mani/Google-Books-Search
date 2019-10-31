import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
import Details from "./pages/Details";
import Saved from "./pages/Saved";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";

function App() {
  return (
        <Router>
          
        <div>
          <Route exact path="/" component={Details} />
          <Route exact path="/books" component={Details} />
          <Route exact path="/saved" component={Saved} />
        </div>
      </Router>
  )
}

export default App;