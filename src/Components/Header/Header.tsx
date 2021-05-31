import React from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-inverse fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="logo">StackOverflow Questions</Link>
                        
                    </div>
                    <form className="navbar-form navbar-nav search-form">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" />
                                <div className="input-group-btn i-search">
                                    <button className="btn btn-default" type="submit">
                                        <i className="glyphicon glyphicon-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <form className="navbar-form navbar-right">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" />
                                <div className="input-group-btn">
                                    <button className="btn btn-default search" type="submit">
                                        <i className="glyphicon glyphicon-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

        )
    }

}


export default connect(null, null)(withRouter(Header));