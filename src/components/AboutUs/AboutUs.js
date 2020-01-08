import React, {Component} from 'react';

import "./AboutUs.css"
import Author from "../Author/Author";
import Contact from "./Contact";


export default class AboutUs extends Component {
    render() {
        return (
            <div className="container">
                <section className="section parallel background">
                    <Author
                        photo="https://media.licdn.com/dms/image/C4D03AQFKNAEL9UNs2A/profile-displayphoto-shrink_200_200/0?e=1583971200&v=beta&t=PwOyeDoN6CPNNXIhwFhri3jPK6a6W1HFk1Hg5ss24Sg"
                        name="Dawid Szczerba"
                        linkedin="https://www.linkedin.com/in/dawid-szczerba/"
                        facebook="https://www.facebook.com/dawid.szczerba2"
                        instagram="https://www.instagram.com/dawid_szczerba/"
                        github="https://github.com/DawidSzczerba"
                        spotify="https://spotify.com"
                    />
                    <Author
                        photo="https://limanowa.in/app/default/assets/sports_import/ba4731bed5a2036c276409ab8dc525cc.jpg?v=1536546806"
                        name="Marcin Kurek"
                        linkedin="https://www.linkedin.com/in/marcin-kurek-172a3b143/"
                        facebook="https://www.facebook.com/marcin.kurek.5095"
                        instagram="https://www.instagram.com/"
                        github="https://github.com/Marcinx15"
                        spotify="https://spotify.com"
                    />
                </section>
                <section className="bar">
                    <h1>If you want to contact us, scroll down.</h1>
                    <br/><br/>
                </section>
                <section className="section parallel background2">
                <Contact name='Dawid' mail='dawid100298@o2.pl' telephone="564896324" skypeAddress="DawidSzczerba"/>
                <Contact name='Marcin' mail='marcin16@gmail.com' telephone="756985634" skypeAddress="MarcinX"/>
                </section>
                <section className="bar2">
                    <h1>Thank you for visiting our website.</h1>
                </section>
            </div>
        );
    }
}