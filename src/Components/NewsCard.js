import React from 'react';
import { Button, Card, Icon } from 'semantic-ui-react';

function NewsCard(props) {
    return (
        // <div>
            <Card color={"blue"}>
                <Card.Content textAlign={"center"}>
                    <Card.Header>{props.article.title}</Card.Header>
                        <Card.Description>
                            This is description
                        </Card.Description>
                        <a href={`${props.article.webUrl}`}>
                            <Button compact color="olive" active>
                                See Details <Icon name="arrow circle right"/>
                            </Button>
                        </a>
                </Card.Content>
            </Card>
        // </div>
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