import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react'
import './questions.css'

class Questions extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {q} = this.props
        let cdate = new Date(this.props.q.creation_date)
        return (
            <div className="questionDiv">
                <Card.Group className="cardDiv">
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>{q.title}</Card.Header>
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