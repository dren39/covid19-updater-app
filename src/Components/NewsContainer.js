import React from 'react'
import { Card } from 'semantic-ui-react'
import NewsCard from './NewsCard'

function NewsContainer(props) {
    return (
        <div>
            <Card.Group itemsPerRow={6} centered>
                {props.newsArray.map((article, index) => <NewsCard article={article} key={index}/>)}
            </Card.Group>
        </div>
    )
}

export default NewsContainer
