// Import React
import React from 'react';

// Import React Bootstrap components
import { ListGroup, Button } from "react-bootstrap";

// Define History component as a class
export default class History extends React.Component {
  // Initialize state with props
  constructor(props) {
    super(props);
    this.state = {
      history: props.history // list of words
    };
  }

  // Define deleteItem method to remove an item from history list by index
  deleteItem = index => {
    // Call deleteItem function from props
    this.props.deleteItem(index);
    // Make a copy of history list
    let newHistory = [...this.state.history];
    // Remove item by index
    newHistory.splice(index, 1);
    // Update state with new history list
    this.setState({ history: newHistory });
    this.render();
  };

  // Define render method to return JSX elements
  render() {
    return (
      <div className="history">
        {/* Use ListGroup component to wrap ListGroup.Item components */}
        <ListGroup>
          {/* Use map function to iterate through history list and render each item */}
          {this.state.history.map((item, index) => (
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