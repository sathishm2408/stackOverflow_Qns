import React from 'react';
import './Home.css'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Questions from '../Questions/Questions';
import { getQuestions } from '../../actions/index'

class Home extends React.Component {

    componentDidMount() {
        this.props.getQuestions()
    }

    render() {
        console.log("pppp",this.props);
        
        return (

            <div className="homeDiv">
                <div className="homeContainer">
                    <div class="row">
                        <div class="col-sm-8 col-md-8 col-sm-8 col-lg-8 col-xl-8 col-12">
                            {this.props.questions&&this.props.questions.data.items.map((question)=><Questions q={question} />)}
                            
                        </div>
                        <div class="col-sm-4 col-md-4 col-sm-4 col-lg-4 col-xl-4 d-none d-sm-block"></div>
                    </div>
                </div>
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