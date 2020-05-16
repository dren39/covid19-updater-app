import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
// import SearchBar from "./SearchBar";

class Home extends Component {
    // state = {
    //     location: null,
    //     searchTerm: ""
    // }

    // getNews = () => {
        // fetch('https://api.smartable.ai/coronavirus/news/US-NY', {
        //     method: 'GET',
        //     headers: {
        //         'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d'
        //     }
        // })//end of fetch
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data)
        //     this.setState({location: data.location.provinceOrState})
        // })
    // }

    // getStats = () => {
    //     fetch(`https://corona.lmao.ninja/v2/states/${this.state.location}?yesterday=false`)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // }

    // searchHandler = (event) => {
    //     this.setState({searchTerm: event.target.value}, console.log(this.state.searchTerm));
    // }

    render() {
        return (
            <div>
                <p>Stay Home Stay Safe</p>
                {/* <SearchBar searchTerm={this.state.searchTerm} searchHandler={this.searchHandler}/> */}
                {/* <button onClick={this.getNews}>Make fetch</button> */}
                {/* { this.state.location ? 
                  <button onClick={this.getStats}>
                      Would you like to see stats in {this.state.location}
                  </button> : null } */}
            </div>
        )
    }
}

export default withRouter(Home);
