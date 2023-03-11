// Import Default App CSS
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Import React Router components
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import React Bootstrap components
import { Navbar, Nav } from "react-bootstrap";

// Import page components
import Translate from './components/translate.js';
import History from './components/history';
import Favorites from './components/favorites';

// Define layout component
function Layout({ children }) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Italian Dictionary/Translator App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* Use Link components to navigate between pages */}
            <Link className="nav-link" to="/translate">Translate</Link>
            <Link className="nav-link" to="/favorites">Favorites</Link>
            <Link className="nav-link" to="/history">History</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Render children components */}
      {children}
    </>
  );
}

// Create Backing Arrays for favorites and history
let history = [];
let favorites = [];

// Define the function to add words to history page
function addHistory(source, target) {
  let translation = "English: " + source + " Italian: " + target;
  history.push(translation);
}

// Define deleteItem method to remove an item from history list by index
let deleteHistory = index => {
  history.splice(index, 1);
};

// Define deleteFavorite method to remove an item from favorites list by index
let deleteFavorite = index => {
  favorites.splice(index, 1);
};

// Define function to add words to the favorites page
function addFavorite(source, target) {
  let translation = "English: " + source + " Italian: " + target;
  favorites.push(translation);
}

// Define app component
function App() {
  return (
    // Use Router component to wrap Routes component
    <Router>
      {/* Use Layout component to wrap Route components */}
      <Layout>
        {/* Use Routes component to define Route components */}
        <Routes>
          {/* Use Route components to render page components based on path */}
          {/* Use index property for home page */}
          {/* Use element property for page component */}
          <Route path="/" index element={<Translate addFavorite={addFavorite} addHistory={addHistory}/>} />
          <Route path="/translate" element={<Translate addFavorite={addFavorite} addHistory={addHistory}/>} />
          <Route path="/favorites" element={<Favorites favorites={favorites} deleteItem={deleteFavorite}/>} />
          <Route path="/history" element={<History history={history} deleteItem={deleteHistory}/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
