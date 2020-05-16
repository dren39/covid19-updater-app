import React, {Component} from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from "./Components/Home";
import SearchBar from "./Components/SearchBar";
import NewsContainer from "./Components/NewsContainer"

class App extends Component {
    state = {
        location: null,
        searchTerm: ""
    }
    // getNews = () => {
    //     fetch('https://api.smartable.ai/coronavirus/news/US-NY', {
    //         method: 'GET',
    //         headers: {
    //             'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d'
    //         }
    //     })//end of fetch
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         this.setState({location: data.location.provinceOrState})
    //     })
    // }//end of function

    // getStats = () => {
    //     fetch(`https://corona.lmao.ninja/v2/states/${this.state.location}?yesterday=false`)
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    // }

    searchHandler = (event) => {
        this.setState({searchTerm: event.target.value.toUpperCase()}, console.log(this.state.searchTerm));
    }

    renderNewsContainer = () => {
        return <NewsContainer searchTerm={this.state.searchTerm}/>
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <SearchBar searchTerm={this.state.searchTerm} searchHandler={this.searchHandler}/>
                    <Switch>
                        <Route path='/:state' component={this.renderNewsContainer}/>
                        <Route path='/' component={Home}/>
                    </Switch>

                    {/* <button onClick={this.getNews}>Make fetch</button> */}
                    {/* { this.state.location ? <button onClick={this.getStats}>Would you like to see stats in {this.state.location}</button> : null } */}
                </div>
            </BrowserRouter>
        );
    }

}

export default App;
