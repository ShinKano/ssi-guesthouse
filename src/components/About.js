import React from 'react'
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
//
import about from '../img/bg-1.jpg'


const About = () => {
    const intl = useIntl()
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        {/* blank space here */}
                    </div>
                    <div className="column">
                        <h2 className="title has-text-centered">
                            <span className="inline-block">
                                <FormattedMessage id="about-heading01" />
                            </span>
                            <span className="inline-block">
                                <FormattedMessage id="about-heading02" />
                            </span>
                        </h2>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-6">
                        <img className="border-radius" src={about} alt="about" />
                    </div>
                    <div className="column max-width-1">
                        <p>
                            {intl.formatMessage({ id: "about-text01" })}
                        </p>
                        <p className="margin-top">
                            
                            {intl.formatMessage({ id: "about-text02" })}
                        </p>
                        <p className="margin-top">
                            {intl.formatMessage({ id: "about-text02" })}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About