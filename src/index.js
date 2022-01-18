import React from "react"
import ReactDOM from "react-dom" 

//  Create a new REACT component. This component produces some HTML
const App =  () => {
    // HTML in between is known as JSX, which looks like HTML but is JS itself
    // This code is later passed through webpack and babel to transpile and create vanilla JS  like code
    // which ultimately produces HTML 
    return <div>Heyloo!</div>
}
  
// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')) 