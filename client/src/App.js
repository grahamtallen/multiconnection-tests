import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {setIceServers} from './services/iceServers.js';
const SERVER_URL = window.location.origin;

var RTCMultiConnection;
try {
    RTCMultiConnection = require('rtcmulticonnection');
}
catch(e) {
    console.error("rtc multiconnection not found")
}

class App extends Component {

  onClick = () => {
    var connection = new RTCMultiConnection();
    connection = setIceServers(connection);
    // this line is VERY_important
    connection.socketURL = `${SERVER_URL}/`;

    // if you want audio+video conferencing
    connection.session = {
        audio: true,
        video: true
    };

    connection.openOrJoin('your-room-id');
  }

  render() {
    return (
      <div className="App">
        <header onClick={this.onClick} className="App-header">
          
        </header>
      </div>
    );
  }
}

export default App;
