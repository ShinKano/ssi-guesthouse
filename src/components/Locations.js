import React from 'react'
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
//
import Button from '../elements/Button'
import Gallery_1_2 from '../elements/Gallery_1_2'
//
import guadalupe_out from '../img/guadalupe_out.jpg'
import guadalupe_single002 from '../img/guadalupe_single002.jpg'
import guadalupe_living001 from '../img/guadalupe_living001.jpg'




const Locations = () => {
    const intl = useIntl()
    return(
        <section className="section has-background-lightblue">
            <div className="container">
                <h2 className="title has-text-centered is-spaced">
                    <span className="inline-block">
                        <FormattedMessage id="locations01" />
                    </span>
                    <span className="inline-block">
                        <FormattedMessage id="locations02" />
                    </span>
                </h2>

                <div className="margin-top-2" />

                <div className="columns reverse margin-top-2">
                    <div className="column is-6">
                        <Gallery_1_2
                            img1={guadalupe_living001}
                            img2={guadalupe_single002}
                            img3={guadalupe_out}
                        />
                    </div>
                    <div className="column max-width-1">
                        <h3 className="title is-4 has-text-centered">
                            <FormattedMessage id="cebu-guadalupe" />
                        </h3>
                        <p className="margin-top">
                            <FormattedMessage id="guadalupe-text01" />
                        </p>
                        <p className="margin-top">
                            <FormattedMessage id="guadalupe-text02" />
                        </p>
                        <p className="margin-top">
                            <FormattedMessage id="guadalupe-text03" />
                        </p>
                        <div className="has-text-centered margin-top-2">
                            <Button
                                to="/rooms#guadalupe"
                                text={intl.formatMessage({ id: "button-rooms" })}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Locations