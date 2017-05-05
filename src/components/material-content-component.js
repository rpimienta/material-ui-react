import React from 'react';
import TopMenu from './top-menu-component';
import SideNav from './sidenav-component';
import Inbox from './inbox-component';
 

export default class MaterialContent extends React.Component {

  constructor(props) {
    super(props);
    this.toggleSidenav = this.toggleSidenav.bind(this);
    this.state = {
      openSidenav: false
    };
  }
  toggleSidenav () {
    let toggle = this.state.openSidenav;
    this.setState({openSidenav: !toggle});
  }

  render() {
    return (
      <div>
        <TopMenu toggleSidenav={this.toggleSidenav}/>
        <Inbox/>
        <SideNav open={this.state.openSidenav}/>
      </div>
    );
  }
}
 
