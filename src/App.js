import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <h3 className="page-title">welcome to <span className="title-tempus">tempus</span><br />a visualization of my <span className="title-tempus">life</span></h3>
        <div className="headings-wrapper">
          <h3 className="heading major">Major Events</h3>
          <h3 className="heading medium">Medium Events</h3>
          <h3 className="heading minor">Minor Events</h3>
        </div>
        <Timeline>
          <div>
            <TimeMarker importance="major" marker="November 2000" description="I was born"/>
            <TimeMarker importance="medium" top="200px" marker="November 2007" description="Played my first golf tournament"/>
            <TimeMarker importance="minor" top="400px" marker="July 2014" description="Got my first hole-in-one" />
            <TimeMarker importance="minor" top="600px" marker="February 2016" description="Took my first HTML course" />
            <TimeMarker importance="minor" top="680px" marker="March 2016" description="Started IoT Space" />
            <TimeMarker importance="medium" top="720px" marker="June 2016" description="Interned at Stanford School of Medicine" />
            <TimeMarker importance="minor" top="780px" marker="August 2016" description="Shipped my first side project" />
            <TimeMarker importance="major" top="890px" marker="March 2017" description="Had my first kiss" />
            <TimeMarker importance="medium" top="1000px" marker="June 2017" description="Started at MIT Launch" />
            <TimeMarker importance="minor" top="1050px" marker="July 2017" description="Went to Florida for a golf camp" />
            <TimeMarker importance="medium" top="1100px" marker="August 2017" description="Sold my first StoveSensor" />
            <TimeMarker importance="minor" top="1200px" marker="December 2017" description="Finished applying to college" />
            <TimeMarker importance="medium" top="1400px" marker="April 2018" description="Chose to attend Purdue University" />
            <TimeMarker importance="major" top="1450px" marker="May 2018" description="Graduated high school" />
            <TimeMarker importance="minor" top="1510px" marker="July 2018" description="Broke up with my girlfriend" />
            <TimeMarker importance="major" top="1590px" marker="August 2018" description="Started College" />
            <TimeMarker importance="minor" top="1690px" marker="February 2019" description="Went on DMK Bay Area trip" />
            <TimeMarker importance="minor" top="1730px" marker="February 2019" description="Started Voler" />
            <TimeMarker importance="minor" top="1760px" marker="March 2019" description="Started Project Carbon" />
            <TimeMarker importance="minor" top="1800px" marker="May 2019" description="Attended Toronto Study Away" />
            <TimeMarker importance="minor" top="1840px" marker="June 2019" description="Started internship at Prudential" />
            <TimeMarker importance="minor" top="1880px" marker="July 2019" description="Shipped ThinkTwice" />
            <TimeMarker importance="major" top="1940px" marker="November 2019" description="Became President of DMK" />
            <TimeMarker importance="minor" top="2000px" marker="present" description="Started Tempus" />
          </div>
        </Timeline>
      </div>
    );
  }
}

class Timeline extends React.Component {
  render() {
    return (
      <div className="timeline-line">
        {this.props.children}
      </div>
    );
  }
}

class TimeMarker extends React.Component {
  render() {
    const markerStyle = {
      "position": "absolute",
      "top": this.props.top,
      "left": "-21px",
      "backgroundColor": this.props.importance === "major" ? "black" : this.props.importance === "medium" ? "rgb(121, 121, 121)" : "rgb(187, 187, 187)"
    }
    const eventDescriptionStyle = {
      "left": this.props.importance === "major" ? "140px" : this.props.importance === "medium" ? "380px": "620px"
    }
    return (
      <div className="timeline-marker" style={markerStyle}>
        <h3 className="marker-caption">{this.props.marker}</h3>
        <div className="event-description-wrapper" style={eventDescriptionStyle}>
          <p className="event-description">{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default App;
