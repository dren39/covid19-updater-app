import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NewsCard from '../Components/NewsCard';

class NewsContainer extends Component {
    
    state = {
        newsArray: null,
        statsObject: null
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
            this.setState({newsArray: data.news})
            console.log(this.state.newsArray)
        })

        fetch(`https://api.smartable.ai/coronavirus/stats/US-${this.props.searchTerm}`, {
            method: 'GET',
            headers: {
                'Subscription-Key': '3009d4ccc29e4808af1ccc25c69b4d5d'
            }
        })//end of fetch
        .then(response => response.json())
        .then(data => {
            this.setState({statsObject: data})
            console.log(this.state.statsObject)
        })
        this.props.clearSearchBar()
    }

    renderNewsCards = () => {
        return (
            this.state.newsArray.map(article => <NewsCard key={article.heat} article={article}/>)
        )
    }

    render() {
        return (
            <div>
                <p>This is news container</p>
                <Link to={"/"}>
                    <button>Back</button>
                </Link>
                {this.state.newsArray ? this.renderNewsCards() : null}
            </div>
        )
    }
}

export default NewsContainer
