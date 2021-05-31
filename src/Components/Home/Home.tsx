import React from 'react';
import './Home.css'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Questions from '../Questions/Questions';
import { getQuestions } from '../../actions/index'
import { Button, Icon, Modal, Card } from 'semantic-ui-react';
import loader from '../../asset/Fidget-spinner.gif'

interface IComponentProps{
 getQuestions:()=>any; 
 questions:any;  
 apiError:any
}

interface IComponentState{
    open:boolean;
    title:string;
    link:string;
}

class Home extends React.Component<IComponentProps,IComponentState> {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            title: '',
            link:''
        }
    }

    componentDidMount() {
        this.props.getQuestions()
    }

    openModal = (title, link) => {
        this.setState({ open: true, title, link })
    }
    render() {
        console.log("pppp", this.props);
        // let qns = [];
        return (

            <div className="homeDiv">
                <div className="homeContainer">
                    <div className="row">
                        <div className="col-sm-8 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-12">

                            {/* {this.getQn()} */}
                            {this.props.questions ? this.props.questions.data.items.map((question:any) => <Questions key={question.question_id} q={question} modalChange={this.openModal} />)
                                :
                                <div id="loading">
                                    <img id="loading-image" src={loader} alt="Loading..." />
                                </div>
                            }
                            {this.props.apiError && <h1 className="errMsg">Error While fetching data from API</h1>}
                        </div>
                        <div className="col-sm-4 col-md-4 col-sm-4 col-lg-4 col-xl-4 d-none d-sm-block">
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
        questions: state.questions,
        apiError: state.apiError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getQuestions: () => dispatch(getQuestions())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));