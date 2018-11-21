import React, {Component} from 'react';

class SearchInput extends Component{
      
    onTextChanged = e => {
        var text = e.target.value.trim();
        this.props.filter(text);
    }
             
    render() {
        return <input className="form-control w-25" placeholder={this.props.placeholder} onChange={this.onTextChanged} />;
    }
}

export default SearchInput;