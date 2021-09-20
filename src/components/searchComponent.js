import React, {Component} from "react";

export class SearchForm extends Component { 
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value})
    }

    _handleSubmit = (e) => { 
        e.preventDefault()
        alert(this.state.inputMovie)
    }
    render () { 
        return (
        <form onSubmit={this._handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input className="input" type="text" placeholder="Find a movie" onChange={this._handleChange}></input>
                </div>

                <div className="control">
                    <button className="button is-info">
                        Search
                    </button>
                </div>
            </div>
        </form>
        )
    }
}
