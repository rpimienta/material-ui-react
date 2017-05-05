import React from 'react';
import Drawer from 'material-ui/Drawer';
import SideNavMenu from './sidenav-menu-component';


const SideNav = (props) => (
    <div>
      <Drawer open={props.open}>
        <SideNavMenu />
      </Drawer>
    </div>
);
export default  SideNav;