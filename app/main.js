import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import Home from './components/Home'
import SvgBox from './components/SvgBox'
import CanvasBox from './components/CanvasBox'

ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={Home}>
                <IndexRoute component={CanvasBox}/>
                <Route path="/svg" component={SvgBox} />
                <Route path="/canvas" component={CanvasBox} />
            </Route>
        </Router>
    ),
    document.getElementById('app')
);

