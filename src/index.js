import React, { Component } from "react"
import ReactDOM from "react-dom"
import SearchBar from "./components/search_bar"
import YTSearch from "youtube-api-search"
import VideoList from "./components/video_list"

const API_KEY = ""

//  Create a new REACT component. This component produces some HTML
class App extends Component {
    constructor(props) {
        super(props)

        this.state = { videos: [] }

        YTSearch({ key: API_KEY, term: 'recipe' }, (videos) => {
            // ES6 syntax if key and value have same name ({ videos: videos })
            this.setState({ videos })
        })
    }
    // HTML in between is known as JSX, which looks like HTML but is JS itself
    // This code is later passed through webpack and babel to transpile and create vanilla JS  like code
    // which ultimately produces HTML 
    render() {
        // We are passing a prop to VideoList
        return <div>
            <SearchBar />
            <VideoList videos={ this.state.videos } />
        </div>
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')) 
