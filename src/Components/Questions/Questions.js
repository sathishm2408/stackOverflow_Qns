import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react'

class Questions extends React.Component {

    render() {
        return (
            <div className="questionDiv">
                <Card.Group>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Matthew Harris</Card.Header>
                            <Card.Meta>Co-Worker</Card.Meta>
                            <Card.Description>
                                Matthew is a pianist living in Nashville.
                            </Card.Description>
                        </Card.Content>
                    </Card>

                </Card.Group>


            </div>


        )
    }

}


export default connect(null, null)(withRouter(Questions));