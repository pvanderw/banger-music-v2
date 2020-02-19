import React, { Component } from 'react';
import EventList from './Event/EventList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    fetch(`https://api.songkick.com/api/3.0/search/locations.json?query=San%20Francisco&apikey=${process.env.REACT_APP_SONGKICK_API_KEY}`, {
      method: 'get', 
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => response.json())
    .then(data => {
      var metroArea;
      var queryString;
      try {
        metroArea = data.resultsPage.results.location[0].metroArea;
        queryString = `https://api.songkick.com/api/3.0/metro_areas/${metroArea.id}/calendar.json?per_page=25&apikey=${process.env.REACT_APP_SONGKICK_API_KEY}`;
      }
      catch(error) {
        console.log(`${error}: error getting city`);
      }
      if (queryString) {
        fetch(queryString, {
          method: 'get', 
          headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
          this.setState({'events': data.resultsPage.results.event});
          console.log(data.resultsPage.results.event);
        });
      }
    });
  }

  render() {

    return (
      <div className="container w-50 mt-5 p-3 mb-5 bg-grey rounded">
        <h1>Events in San Francisco</h1>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default Home;
