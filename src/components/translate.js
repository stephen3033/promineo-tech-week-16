// Import React
import React from 'react';

// Import React Bootstrap components
import { Form, Button, InputGroup } from "react-bootstrap";

// Define Translate component as a class
export default class Translate extends React.Component {
  // Initialize state with props
  constructor(props) {
    super(props);
    this.state = {
      source: "", // source language text
      target: "", // target language text
    };
  }

  // Define translate method to call API and update state
  translate = () => {
    let translation = this.state.source;
    this.setState({ target: translation });
    this.props.addHistory(this.state.source, translation);
  };

  // Define favorite method to call addFavorite function with source and target texts
  favorite = () => {
    this.props.addFavorite(this.state.source, this.state.target);
  };

  // Define handleChange method to update state with input value
  handleChange = event => {
    this.setState({ source: event.target.value });
  };

  // Define render method to return JSX elements
  render() {
    return (
      <div className="translate">
        {/* Use Form component to wrap InputGroup components */}
        <Form>
          {/* Use InputGroup component for source text box */}
          <InputGroup className="mb-3">
            {/* Use FormControl component for input element */}
            <Form.Control as="textarea" rows={3} placeholder="Enter text here" value={this.state.source} onChange={this.handleChange} />
          </InputGroup>
          {/* Use InputGroup component for target text box */}
          <InputGroup className="mb-3">
            {/* Use FormControl component for input element */}
            <Form.Control as="textarea" rows={3} placeholder="Translated text will appear here" value={this.state.target} readOnly />
          </InputGroup>
          {/* Use Button components for translate and favorite buttons */}
          <Button variant="primary" onClick={this.translate}>Translate</Button>{' '}
          <Button variant="secondary" onClick={this.favorite}>Favorite</Button>
        </Form>
      </div>
    );
  }
}