import React, { Component } from 'react';
import './App.css';
import Car from '../Car/Car';
import Video from '../Video/Video';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App-Container">
          <Video />
          <h3 className="Take"> Take your pick. </h3>
          <h1 className="LineUp"> The mini all4 lineup. </h1>
          <Car />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
