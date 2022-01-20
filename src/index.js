import React, { Component } from "react"
import ReactDOM from "react-dom"
import SearchBar from "./components/search_bar"
import YTSearch from "youtube-api-search"
import VideoList from "./components/video_list"
import VideoDetail from "./components/video_details"
import _ from 'lodash'

const API_KEY = ""
console.log(API_KEY)
//  Create a new REACT component. This component produces some HTML
class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('cardigan')
    }
    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            // ES6 syntax if key and value have same name ({ videos: videos })
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }
    // HTML in between is known as JSX, which looks like HTML but is JS itself
    // This code is later passed through webpack and babel to transpile and create vanilla JS  like code
    // which ultimately produces HTML 
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
        // We are passing a prop to VideoList
        return <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                videos={this.state.videos} />
        </div>
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')) 
