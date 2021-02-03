import React from 'react'

class SearchBar extends React.Component{
    state = {term: ''}

    onInputChange = event => {
        this.setState({term: event.target.value})
    };
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };


    render(){
        const myStyle ={
            backgroundColor: '#5570bc',
            marginTop: "20px"
        }
        return (
        <div className="search-bar ui segment" style={myStyle}>
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={this.state.term} onChange={this.onInputChange}></input>
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar