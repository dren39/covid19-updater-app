import React from 'react'
import { Card } from 'semantic-ui-react'
import NewsCard from './NewsCard'
import '../Styles/NewsContainer.css'

function NewsContainer(props) {
    return (
        <div>
            <div className="news-header">
                <h2>News from {`${props.newsObject.location.provinceOrState}`}</h2>
            </div>
            <div className="card-group-wrapper">
                <Card.Group itemsPerRow={6}>
                    {props.newsObject.news.map((article, index) => <NewsCard article={article} key={index}/>)}
                </Card.Group>
            </div>
        </div>
    )
}

export default NewsContainer
