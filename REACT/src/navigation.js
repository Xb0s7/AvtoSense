import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home/home-page';
import MapPage from './components/map-page/mapPage';
import ReviewsPage from './components/reviews-page/reviews-page'
const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route  path="/services" component={Home}/>
                <Route  path="/reviews" component={ReviewsPage}/>
                <Route  path="/directions" component={MapPage}/>
                <Route  path="/schedule" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Navigation