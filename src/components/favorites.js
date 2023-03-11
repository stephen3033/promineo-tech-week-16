// Import React
import React from 'react';

// Import React Bootstrap components
import { ListGroup, Button } from "react-bootstrap";

// Define Favorites component as a class
export default class Favorites extends React.Component {
  // Initialize state with props
  constructor(props) {
    super(props);
    this.state = {
      favorites: props.favorites // list of words
    };
  }

  // Define deleteItem method to remove an item from favorites list by index
  deleteItem = index => {
    // Call deleteItem function from props
    this.props.deleteItem(index);
    // Make a copy of favorites list
    let newFavorites = [...this.state.favorites];
    // Remove item by index
    newFavorites.splice(index, 1);
    // Update state with new favorites list
    this.setState({ favorites: newFavorites });
  };

  // Define render method to return JSX elements
  render() {
    return (
      <div className="favorites">
        {/* Use ListGroup component to wrap ListGroup.Item components */}
        <ListGroup>
          {/* Use map function to iterate through favorites list and render each item */}
          {this.state.favorites.map((item, index) => (
            // Use ListGroup.Item component for each item with key and variant properties
            <ListGroup.Item key={index} variant="light">
              {/* Display item text */}
              {item}
              {/* Use Button component for delete button with onClick property */}
              <Button variant="danger" onClick={() => this.deleteItem(index)}>Delete</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    );
  }
}