import React from 'react';
import { Card } from 'semantic-ui-react';

import './questions.css'

interface IComponentProps{
    key:any;
    q?:{
        creation_date:any,
        title: string,
        link: string,
        question_id: any,
        owner:{
            display_name: string   
        },
        [x:string]: any;
    };
    modalChange(title:string, link:string):void;
}

class Questions extends React.Component<IComponentProps> {
 

    render() {
        let { q } = this.props
        let cdate = new Date(q.creation_date)
        return (
            <div className="questionDiv">
                <Card.Group className="cardDiv" onClick={() => this.props.modalChange(q.title, q.link)}>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header className="qTitle">{q.title}</Card.Header>
                            <Card.Meta>Created on - {cdate.toString()}</Card.Meta>
                            <Card.Description>
                                created by - {q.owner.display_name}
                            </Card.Description>
                        </Card.Content>
                    </Card>

                </Card.Group>
          
            </div>
        )
    }

}

export default Questions;