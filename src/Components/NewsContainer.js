import React from 'react'
import { Card } from 'semantic-ui-react'
import NewsCard from './NewsCard'
import '../Styles/NewsContainer.css'

function NewsContainer(props) {

    return (
        <div className="news-wrapper">
            <div className="news-header">
                {props.location ?
                <h2>News from {`${props.location}`}</h2> :
                <h2>News from the USA</h2> }
            </div>
            <div className="card-group-wrapper">
                <Card.Group itemsPerRow={4}>
                    {props.newsArray.map((article, index) => <NewsCard article={article} key={index}/>)}
                </Card.Group>
            </div>
        </div>
    )
}

export default NewsContainer
