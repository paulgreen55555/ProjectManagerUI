import React, {Component} from 'react';

class SearchInput extends Component{
      
    onTextChanged = e => {
        debugger;
        var text = e.target.value.trim();
        this.props.filter(text);
    }
             
    render() {
        return <input className="m-2" placeholder={this.props.placeholder} onChange={this.onTextChanged} />;
    }
}

export default SearchInput;