import React, { Component, Suspense  } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import './App.css';
const Home = React.lazy(() => import('./Components/Home/Home'));
const Header= React.lazy(() => import('./Components/Header/Header'));

class App extends Component {

  render() {
    return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Switch>
            <Route path="/"> <Home /> </Route>
          </Switch>
        </Suspense>
      </div>
    );
  }
}


export default connect(null, null)(withRouter(App));