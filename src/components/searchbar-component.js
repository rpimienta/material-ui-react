import React from 'react';

class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
    }

    handleSearchChange (e) {
        this.props.inputChange(e.target.value);
    }
    handleCheckChange (e) {
        this.props.employeeChange(e.target.checked);
    }

    render () {
        return(
            <form>
                <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.handleSearchChange}/>
                <input type="checkbox"  checked={this.props.employedOnly} onChange={this.handleCheckChange}/>
                {' '}
                Only show employed personel
            </form>
        );
    }
}

export default SearchBar;