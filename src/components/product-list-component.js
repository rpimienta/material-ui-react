import React from 'react';
import {TableBody, TableRow, TableRowColumn} from 'material-ui/Table';

class ProductList extends React.Component{

    render () {
        var table =  this.props.tableData.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.employed ? 'Employed': 'Unemployed'}</TableRowColumn>
              </TableRow>
              ));
        return (
            <TableBody
                displayRowCheckbox={this.props.showCheckboxes}
                deselectOnClickaway={this.props.deselectOnClickaway}
                showRowHover={this.props.showRowHover}
                stripedRows={this.props.stripedRows}
            >
                {table}
            </TableBody>
        );
    }
}

export default ProductList;