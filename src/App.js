import React, {Component} from 'react'
import './App.css'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Home from "./Components/Home"
import SearchResultContainer from "./Components/SearchResultContainer"
import Navbar from "./Components/Navbar"
import About from "./Components/About"

class App extends Component {

    state = {
        searchTerm: "",
        usStatObject: null,
        usNewsObject: null,
        currentPage: 1,
        postsPerPage: 8,
        indexOfLastPost: 8,
        indexOfFirstPost: 0,
        totalPosts: 0
    }

    componentDidMount() {
        // fetch stats for the US
        fetch('https://api.smartable.ai/coronavirus/stats/US', {
            method: 'GET',
            headers: {
                'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d'
            }
        })//end of fetch
        .then(response => response.json())
        .then(data => {
            this.setState({usStatObject: data}, ()=>console.log("this is stat saved to state:",this.state.usStatObject))
    
        })
        // fetch news for the US
        fetch('https://api.smartable.ai/coronavirus/news/US', {
            method: 'GET',
            headers: {
                'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d'
            }
        })//end of fetch
        .then(response => response.json())
        .then( data => {
            this.setState({usNewsObject: data, totalPosts: data.news.length}, ()=>console.log("this is news saved to state:",this.state.usNewsObject))
        })
    }


    searchHandler = (event) => {
        this.setState({searchTerm: event.target.value}, ()=>localStorage.setItem('searchTerm', this.state.searchTerm));
    }

    clearSearchBar = () => {
        this.setState({searchTerm: ""});
    }

    renderSearchResults = () => {
        return <SearchResultContainer searchTerm={this.state.searchTerm} clearSearchBar={this.clearSearchBar}/>
    }

    currentPosts = () => {
        // this method returns an array of posts sliced from the original array
        // with just the indexes provided, this creates the paginated view
        // conditional prevents program from crashing on component load when state is undefined
        if(this.state.usNewsObject){
            return this.state.usNewsObject.news.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost);
        }
    }

    paginateHandler = (pageNumber) => {
        // this will update the values of first/last index post every time a new page is clicked
        // when state is reset it will change the pagination list
        console.log(pageNumber)
        const indexOfLastPost = pageNumber*this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost-this.state.postsPerPage;
        this.setState({currentPage: pageNumber, indexOfLastPost: indexOfLastPost, indexOfFirstPost: indexOfFirstPost},()=>console.log(this.state.indexOfLastPost))
    }

    renderHome = () => {
        return (
            <Home 
                searchTerm={this.state.searchTerm} 
                searchHandler={this.searchHandler}
                usStatObject={this.state.usStatObject}
                usNewsArray={this.currentPosts()}
                postsPerPage={this.state.postsPerPage}
                totalPosts={this.state.totalPosts}
                paginateHandler={this.paginateHandler}
            />
        )
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route path='/about' component={About}/>
                        <Route path='/:state' component={this.renderSearchResults}/>
                        <Route path='/' component={this.renderHome}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
