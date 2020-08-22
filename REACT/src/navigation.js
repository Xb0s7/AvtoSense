import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home/home-page';
import MapPage from './pages/map-page/mapPage';
import ReviewsPage from './pages/reviews-page/reviews-page'
import Login from './pages/login/login';
import Register from './pages/register/register';
const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route  path="/services" component={Home}/>
                <Route  path="/reviews" component={ReviewsPage}/>
                <Route  path="/directions" component={MapPage}/>
                <Route  path="/login" component={Login}/>
                <Route  path="/register" component={Register}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Navigation