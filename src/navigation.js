import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/home/home-page';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route  path="/services" component={Home}/>
                <Route  path="/reviews" component={Home}/>
                <Route  path="/directions" component={Home}/>
                <Route  path="/schedule" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Navigation