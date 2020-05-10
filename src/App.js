import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        location: null
    }
    getNews = () => {
        fetch('https://api.smartable.ai/coronavirus/news/US-NY', {
            method: 'GET',
            headers: {
                'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d'
            }
        })//end of fetch
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({location: data.location.provinceOrState})
        })
    }//end of function

    getStats = () => {
        fetch(`https://corona.lmao.ninja/v2/states/${this.state.location}?yesterday=true`)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                </a>
                </header>
                <button onClick={this.getNews}>Make fetch</button>
                { this.state.location ? <button onClick={this.getStats}>Would you like to see stats in {this.state.location}</button> : null }
            </div>
        );
    }

}

export default App;
