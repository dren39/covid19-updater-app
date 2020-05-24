import React, { Component } from 'react'

class NewsCard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.article.title}</h1>
            </div>
        )
    }
}

export default NewsCard
