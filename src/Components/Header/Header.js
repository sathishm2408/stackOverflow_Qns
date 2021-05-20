import React from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <Link to="/" className="logo">StackOverflow Questions</Link>
                        <form class="navbar-form navbar-right search-form">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search" />
                                <div class="input-group-btn i-search">
                                    <button class="btn btn-default" type="submit">
                                        <i class="glyphicon glyphicon-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <form class="navbar-form navbar-right">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search" />
                                <div class="input-group-btn">
                                    <button class="btn btn-default search" type="submit">
                                        <i class="glyphicon glyphicon-search"></i>
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