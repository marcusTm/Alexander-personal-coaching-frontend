import React, { Component } from 'react';
import Header from './components/header/navbar';
import Content from './components/content/content'
import Footer from './components/footer/footer';
import './app.css'

export default class App extends Component {

    render() {
        return(
            <div id="page-container">
                <Header />
                <Content />
                <Footer />
            </div>
        );
    }
}