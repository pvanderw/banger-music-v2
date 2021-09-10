import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class EventList extends Component {
  render() {
    const content = this.props.events.map((event) =>
      <ListGroup.Item key={event.id}>
        <h4>{event.displayName}</h4>
        <a href={event.uri} target='_blank'>Link to show</a>
      </ListGroup.Item>
    );
    return (
      <ListGroup>
        {content}
      </ListGroup>
    );
  }
}

export default EventList;
