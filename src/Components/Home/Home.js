import React from 'react';
import './Home.css'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Questions from '../Questions/Questions';
import { getQuestions } from '../../actions/index'
import { Button, Icon, Modal, Card } from 'semantic-ui-react';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    componentDidMount() {
        this.props.getQuestions()
    }

    openModal=(title, link)=>{
        this.setState({open: true, title, link})
    }
    render() {
        console.log("pppp",this.props);
        
        return (

            <div className="homeDiv">
                <div className="homeContainer">
                    <div class="row">
                        <div class="col-sm-8 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-12">
                            {this.props.questions&&this.props.questions.data.items.map((question)=><Questions q={question} modalChange={this.openModal}/>)}
                            
                        </div>
                        <div class="col-sm-4 col-md-4 col-sm-4 col-lg-4 col-xl-4 d-none d-sm-block">
                            <img src="https://thumbs.dreamstime.com/z/office-work-place-website-vertical-banner-concept-business-space-68094020.jpg" alt="ads" className="ads"></img>
                        </div>
                    </div>
                </div>
                <Modal
                    size='mini'
                    className="ModalDiv"
                    open={this.state.open}
                    onClose={() => this.setState({ open: false })}
                >
                    {/* <Modal.Header>Delete Your Account</Modal.Header> */}
                    <Modal.Content>
                        <h2>{this.state.title}</h2>
                        <a href={this.state.link} target="_blank">{this.state.link}</a>
                        <Button positive 
                        className="modalClose"
                        onClick={() => this.setState({ open: false })}>
                            Close
                        </Button>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        questions: state.questions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getQuestions: () => dispatch(getQuestions())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));