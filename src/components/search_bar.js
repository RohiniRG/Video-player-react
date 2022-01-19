import React, { Component } from "react"

class SearchBar extends Component {
    constructor(props) {
        // super calls Component's (i.e., parent class' constructor)
        super(props)

        // Initializing state in constructor only (Only class based components have state)
        // We want to notice the change on the prop term
        this.state = { term: '' }
    }

    render() {
        // Prop/property of onChange is passed
        // onChange event requires an event handler
        // Modifying state with this.setState()
        // Any vanilla JS code will be written in {}
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        )
    }

    // This is the event handler
    // onInputChange(event) {
    //     console.log(event.target.value)
    // }
}

// Whenever a module imports searchBar, we export it to make it available
export default SearchBar
