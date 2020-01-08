import React, { Component } from "react";

import './Contact.css'

export default class Contact extends Component  {

    sendMail() {
        return "mailto:" + this.props.mail;
    }
    call(){
        return "callto://" + this.props.telephone;
    }

    sms(){
        return "sms:" + this.props.telephone;
    }

    skype(){
        return "skype:" + this.props.skypeAdress + "?call";
    }
    render() {
        return (
            <div className='contact'>
                <div className='clear'>
                    <div>
                        <h2>Click on the address to send an e-mail:</h2>
                        <br></br><br></br>
                        <a className='block' href={this.sendMail()}>{this.props.mail}</a>
                        <br></br><br></br>
                        <h2>or call us:</h2>
                        <br></br><br></br>
                        <a className='block' href={this.call()}>{this.props.telephone}</a>
                        <br></br><br></br>
                        <h2>or call us by skype</h2>
                        <br></br><br></br>
                        <a className='block' href={this.skype()}>{this.props.skypeAddress}</a>
                        <br></br><br></br>
                        <h2>You can also send sms for us:</h2>
                        <br></br><br></br>
                        <a className='block' href={this.sms()}>{this.props.telephone}</a>
                    </div>
                </div>
            </div>
        );
    }
}
