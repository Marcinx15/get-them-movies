import React, {Component} from 'react';

import "./AboutUs.css"
import Author from "../Author/Author";


export default class AboutUs extends Component {
    render() {
        return (
            <div className="contact">
                <section className="contact-section contact-parallel background">
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
            </div>
        );
    }
}