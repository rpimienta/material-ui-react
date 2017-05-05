import React from 'react';
import AppBar from 'material-ui/AppBar';
 
const TopMenu = (props) => (
  <AppBar
    title="Material Design Sample App"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onClick={props.toggleSidenav}
  />
);
 
export default TopMenu;
