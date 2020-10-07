import * as React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Processes from '../pages/processes/processes';
import Contact from '../pages/contact/contact';
import AboutMe from '../pages/aboutme/aboutme';
import Clients from '../pages/clients/clients';

export default class content extends React.Component {
  
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} /> 
                <Route path='/processes' component={Processes} /> 
                <Route path='/contact' component={Contact} />
                <Route path='/clients' component={Clients} /> 
                <Route path='/about-me' component={AboutMe} />
            </Switch>
        );
    }
}