import React, {Component} from 'react'

class Search extends Component{
             
    constructor(props){
        super(props);
        this.onTextChanged = this.onTextChanged.bind(this);
    }
             
    onTextChanged(e){
        var text = e.target.value.trim();
        this.props.filter(text);
    }
             
    render() {
        return <input placeholder="Search" onChange={this.onTextChanged} />;
    }
}

export default Search