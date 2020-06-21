import React from 'react'
import { Card } from 'semantic-ui-react'
import NewsCard from './NewsCard'
import '../Styles/NewsContainer.css'

function NewsContainer(props) {

    const newsArray = ()=> {
        if(props.newsObject.news) {
            return props.newsObject.news;
        } else {
            return props.newsObject;
        }
    };
    return (
        <div className="news-wrapper">
            <div className="news-header">
                {props.newsObject.location ? 
                <h2>News from {`${props.newsObject.location.provinceOrState}`}</h2> :
                <h2>News from the United States</h2> }
            </div>
            <div className="card-group-wrapper">
                <Card.Group itemsPerRow={6}>
                    {newsArray().map((article, index) => <NewsCard article={article} key={index}/>)}
                </Card.Group>
            </div>
        </div>
    )
}

export default NewsContainer
