import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from 'components/layout';
import 'styles/global.scss';

class WeekPlanner extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Layout>
          <h1>WeekPlanner</h1>
        </Layout>
      </MuiThemeProvider>
    );
  }
}

injectTapEventPlugin();
ReactDOM.render(<WeekPlanner/>, document.getElementById("app"));
