import React, {Component} from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from "./Components/Home";
// import SearchBar from "./Components/SearchBar";
import SearchResultContainer from "./Components/SearchResultContainer";
// import OptionDropdown from "./Components/OptionDropdown";
// import StatsTable from "./Components/StatsTable";
import Navbar from "./Components/Navbar";
import About from "./Components/About";

class App extends Component {

    state = {
        location: null,
        searchTerm: "",
        // newsTab: false,
        // showDropdown: false
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
        this.setState({searchTerm: event.target.value}, console.log(this.state.searchTerm));
    }

    clearSearchBar = () => {
        this.setState({searchTerm: ""});
    }

    renderSearchResults = () => {
        return <SearchResultContainer searchTerm={this.state.searchTerm} clearSearchBar={this.clearSearchBar}/>
    }

    // showDropdown = () => {
    //     this.setState({showDropdown: !this.state.showDropdown}, this.renderNewsContainer())
    // }


    renderHome = () => {
        return <Home searchTerm={this.state.searchTerm} searchHandler={this.searchHandler}/>
    }


    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    {/* <SearchBar searchTerm={this.state.searchTerm} searchHandler={this.searchHandler}/> */}
                    {/* {this.state.showDropdown ? <OptionDropdown/> : null} */}
                    <Switch>
                        <Route path='/about' component={About}/>
                        <Route path='/:state' component={this.renderSearchResults}/>
                        <Route path='/' component={this.renderHome}/>
                    </Switch>

                    {/* <button onClick={this.getNews}>Make fetch</button> */}
                    {/* { this.state.location ? <button onClick={this.getStats}>Would you like to see stats in {this.state.location}</button> : null } */}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
