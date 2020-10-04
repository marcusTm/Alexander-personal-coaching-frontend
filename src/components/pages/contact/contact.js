import React, { Component } from 'react';
import axios from 'axios';

export default class Contact extends Component {

    state = {
        name: '',
        message: '',
        emailAddress: '',
        sent: false,
        buttonText: 'Send Message'
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        this.setState({
            buttonText: '...sending'
        })

        let CustomerMessage = {
            name: this.state.name,
            message: this.state.message,
            emailAddress: this.state.emailAddress
        }

        try {
            console.log(CustomerMessage)
            await axios.post('http://localhost:8080/send-mail', CustomerMessage,  
            {headers: {
                crossDomain: true,
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }} )
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            this.setState({ sent: true }, this.resetForm())
        } catch(err) {
            console.log(err)
        }

    }

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            emailAddress: '',
            buttonText: 'Send Message'
        })
    }

    render() {
        return(
            <div className="row img-bg contact-page">
				<div className="offset-2 d-none d-sm-none d-md-none d-lg-block"></div>
				<div className="col-sm-11 col-md-12 col-lg-10">
					<div className="row">
                        <div className="col-sm-12 col-md-9 col-lg-7">
                            <div className="main-section" id="contact">
                                <h1>Contact Me</h1>
                                <div className="sep-small"></div>

                                <form className="contact-form" onSubmit={ (e) => this.handleSubmit(e)}>
                                    <label className="message" htmlFor="message-input">Your Message</label>
                                    <textarea onChange={e => this.setState({ message: e.target.value})} name="message" className="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>
                                    <div className="sep-small"></div>

                                    <label className="message-name" htmlFor="message-name">Your Name</label>
                                    <input onChange={e => this.setState({ name: e.target.value})} name="name" className="message-name" type="text" placeholder="Your Name" value={this.state.name}/>
                                    <div className="sep-small"></div>

                                    <label className="message-email" htmlFor="message-email">Your Email</label>
                                    <input onChange={(e) => this.setState({ emailAddress: e.target.value})} name="emailAddress" className="message-email" type="email" placeholder="your@email.com" required value={this.state.emailAddress} />
                                    <div className="sep-medium"></div>

                                    <div className="button--container">
                                        { (!this.state.sent)
                                        ?
                                        <button type="submit" className="button button-primary">{this.state.buttonText}</button>
                                        :
                                        <button className="button button-disabled">Message Sent</button>
                                        }
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
        );
    }
}