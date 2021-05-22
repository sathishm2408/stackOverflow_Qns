import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Button, Icon, Modal, Card } from 'semantic-ui-react';

import './questions.css'

class Questions extends React.Component {
 

    render() {
        let { q } = this.props
        let cdate = new Date(this.props.q.creation_date)
        return (
            <div className="questionDiv" key={q.question_id}>
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


export default connect(null, null)(withRouter(Questions));