import React from 'react';
import { Button, Card, Icon } from 'semantic-ui-react'
import '../Styles/NewsCard.css'

function NewsCard(props) {
    return (
        <div className="card-wrapper">
            <Card>
                <Card.Content textAlign={"center"}>
                    <h4>{props.article.title}</h4>
                        <Card.Description>
                            <p>{`${props.article.provider.name}`}</p>
                            <p>{`${props.article.publishedDateTime.slice(0,10)}`}</p>
                        </Card.Description>
                        <div className="card-btn-wrapper">
                            <a href={`${props.article.webUrl}`} target="_blank" rel="noopener noreferrer">
                                <Button compact color="blue" active>
                                    See Details <Icon name="arrow circle right"/>
                                </Button>
                            </a>
                        </div>
                </Card.Content>
            </Card>
        </div>
    )
}

export default NewsCard


// import React, { Component } from 'react';
// import { Button, Card, Icon } from 'semantic-ui-react';

// class NewsCard extends Component {
//     render() {
//         return (
//                 <Card color={"blue"}>
//                     <Card.Content textAlign={"center"}>
//                         <Card.Header>{this.props.article.title}</Card.Header>
//                             <Card.Description>
//                                 This is description
//                             </Card.Description>
//                             <a href={`${this.props.article.webUrl}`}>
//                                 <Button compact color="olive" active>
//                                     See Details <Icon name="arrow circle right"/>
//                                 </Button>
//                             </a>
//                     </Card.Content>
//                 </Card>
//         )
//     }
// }

// export default NewsCard