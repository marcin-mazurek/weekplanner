import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import LogoutIcon from 'material-ui/svg-icons/action/exit-to-app';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import MonthView from 'material-ui/svg-icons/action/view-module';
import WeekView from 'material-ui/svg-icons/action/view-column';
import DashboardView from 'material-ui/svg-icons/action/view-quilt';
import { lightBlue700 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <main>
        <AppBar title="WeekPlanner"
          style={{ backgroundColor: lightBlue700 }}
          onLeftIconButtonTouchTap={this.toggleMenu} />
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(o) => this.setState({ open: o })}
        >
          <MenuItem onTouchTap={this.toggleMenu} leftIcon={<DashboardView />} secondaryText="Alt+D">Dashboard view</MenuItem>
          <MenuItem onTouchTap={this.toggleMenu} leftIcon={<WeekView />} secondaryText="Alt+W">Week view</MenuItem>
          <MenuItem onTouchTap={this.toggleMenu} leftIcon={<MonthView />} secondaryText="Alt+M">Month view</MenuItem>
          <Divider />
          <MenuItem onTouchTap={this.toggleMenu} leftIcon={<SettingsIcon />}>Settings</MenuItem>
          <MenuItem onTouchTap={this.toggleMenu} leftIcon={<LogoutIcon />}>Logout</MenuItem>
        </Drawer>
        {this.props.children}
      </main>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
