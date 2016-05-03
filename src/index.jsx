import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'styles/global.scss';

class WeekPlanner extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <h1>WeekPlanner</h1>
      </MuiThemeProvider>
    );
  }
}

injectTapEventPlugin();
ReactDOM.render(<WeekPlanner/>, document.getElementById("app"));
