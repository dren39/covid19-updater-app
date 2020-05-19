import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class NewsContainer extends Component {
    
    state = {
        locationName: null,
        newsArray: null
    }

    componentDidMount() {
        fetch(`https://api.smartable.ai/coronavirus/news/US-${this.props.searchTerm}`, {
            method: 'GET',
            headers: {
                'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d'
            }
        })//end of fetch
        .then(response => response.json())
        .then(data => {
            // console.log(data.news)
            this.setState({locationName: data.location.provinceOrState, newsArray: data.news})
            console.log(this.state.locationName, this.state.newsArray)
        })

        fetch(`https://api.smartable.ai/coronavirus/stats/US-${this.props.searchTerm}`, {
            method: 'GET',
            headers: {
                'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d'
            }
        })//end of fetch
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        this.props.clearSearchBar()
    }

    render() {
        return (
            <div>
                <p>This is news container</p>
                <Link to={"/"}>
                    <button>Back</button>
                </Link>
            </div>
        )
    }
}

export default NewsContainer
