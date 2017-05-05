import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import SearchBar from './searchbar-component';

var tableData = [
  {
    name: 'John Smith',
    employed: true,
    selected: true,
  },
  {
    name: 'Randal White',
    employed: false,
  },
  {
    name: 'Stephanie Sanders',
    employed: true,
    selected: true,
  },
  {
    name: 'Steve Brown',
    employed: true,
  },
  {
    name: 'Joyce Whitten',
    employed: true,
  },
  {
    name: 'Samuel Roberts',
    employed: false,
  },
  {
    name: 'Adam Moore',
    employed: true,
  },
  {
    name: 'Jack White',
    employed: true,
  },
  {
    name: 'Carlos Nava',
    employed: false,
  },
  {
    name: 'Fernando Lopez',
    employed: true,
  }
];
const arrowStyle = {
  cursor:"pointer",
  height: "15px" 
}


export default class Inbox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: false,
      stripedRows: true,
      showRowHover: true,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '500px',
      filterText: '',
      employedOnly: false
    };
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  handleSearchInputChange = (value) => {
    this.setState({filterText: value});
  };
  handleEmployeeChange = (value) => {
    this.setState({employedOnly: value});
  }

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
             <TableHeaderColumn>
              <SearchBar 
                filterText={this.state.filterText}
                employedOnly={this.state.employedOnly}
                inputChange={this.handleSearchInputChange}
                employeeChange={this.handleEmployeeChange}
              />
             </TableHeaderColumn>
              <TableHeaderColumn ></TableHeaderColumn>
              <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID" >ID </TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              row.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) <= -1 || (this.state.employedOnly && !row.employed) ? '': 
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.employed ? 'Employed': 'Unemployed'}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
 
