import React, { Component } from 'react';
import Header from './components/header/navbar';
import Main from './components/main/content'
import Footer from './components/footer/footer';
import './app.css'

export default class App extends Component {

    render() {
        return(
            <div id="page-container">
                <Header />
                <div id="content-and-footer">
                    <Main />
                    <Footer />
                </div>
            </div>
        );
    }
}