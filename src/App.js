import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterialContent from './components/material-content-component';

class App extends Component {
  render() {
    return (
     <MuiThemeProvider>
       <MaterialContent />
     </MuiThemeProvider>
    );
  }
}

export default App;
