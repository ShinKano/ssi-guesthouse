import React from 'react'
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {    faUtensils,
            faPaw,
            faWifi,
            faConciergeBell,
            faTshirt,
            faParking,
            faHome,
            faLanguage,
            faSuitcaseRolling,
            faBan,
            faBaby,
            faGlassCheers,
            faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
//
import Layout from '../components/Layout'
import Gallery_1_2 from '../elements/Gallery_1_2'
import GalleryHscroll from '../elements/GalleryHscroll'
import Button from '../elements/Button'
import ButtonEx from '../elements/ButtonEx'
import GoogleMap from '../elements/GoogleMap'
//
import apas_header from '../img/apas-header.jpg'
import apas_out from '../img/apas_out.jpg'
import apas_living from '../img/apas_living.jpg'
import cebu_city001 from '../img/cebu_city001.jpg'
import apas_single001 from '../img/apas_single001.jpg'
import apas_single002 from '../img/apas_single002.jpg'
import guadalupe_header from '../img/guadalupe_header.jpg'
import guadalupe_living003 from '../img/guadalupe_living003.jpg'
import guadalupe_living004 from '../img/guadalupe_living004.jpg'
import guadalupe_living005 from '../img/guadalupe_living005.jpg'
import guadalupe_entrance002 from '../img/guadalupe_entrance002.jpg'
import guadalupe_single002 from '../img/guadalupe_single002.jpg'
import guadalupe_double from '../img/guadalupe_double.jpg'


const Rooms = () => {
    const intl = useIntl()
    return(
    <Layout>
        <section className="section has-background-classic-blue">
            <div className="container">
            <div className="full-height align-items-center">
                    <h1 className="title color-white has-text-centered">
                        <FormattedMessage id="rooms-title" />
                    </h1>
                </div>
            </div>
        </section>

        <section>
            <figure className="image is-3by1" id="apas">
                <img src={apas_header} />
            </figure>
        </section>

        <section className="section">
            <div className="container">
                <h2 className="subtitle is-size-4 has-text-centered">
                    <FormattedMessage id="cebu-apas" />
                </h2>
                <hr />
                <p className="has-text-centered">
                    <FormattedMessage id="rooms-apas-subtitle" />
                </p>

                <div className="columns is-centered margin-top-2">
                    <div className="column is-8">
                        <p className="is-size-6 margin-bottom">
                            <FormattedMessage id="rooms-apas-text01" />
                        </p>
                        <p className="is-size-6 margin-bottom">
                            <FormattedMessage id="rooms-apas-text02" />
                        </p>
                        <Gallery_1_2
                            img1={apas_living}
                            img2={apas_out}
                            img3={cebu_city001}
                        />
                    </div>
                </div>
                <div className="columns is-centered margin-top-2">
                    <div className="column is-8">
                        <p className="is-size-6 margin-bottom">
                            <FormattedMessage id="rooms-apas-text03" />
                        </p>
                        <p className="is-size-6 margin-bottom">
                            <FormattedMessage id="rooms-apas-text04" />
                        </p>
                        <p className="is-size-6 margin-bottom">
                            <FormattedMessage id="rooms-apas-text05" />
                        </p>
                        <p className="is-size-6 margin-bottom">
                            <FormattedMessage id="rooms-apas-text06" />
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <section className="section">
            <div className="container">
                        
                <div className="columns">
                    <div className="column is-5 has-text-centered max-width-1">
                        <div className="columns is-mobile">
                            <div className="column">
                                <p className="subtitle is-size-5">
                                    <FormattedMessage id="single-room" />
                                </p>
                            </div>
                            <div className="column">
                                <p className="is-size-5">
                                    800PHP/night
                                </p>
                            </div>
                        </div>
                        <div className="columns is-mobile">
                            <div className="column">
                                <h3 className="subtitle is-size-5">
                                    <FormattedMessage id="budget-single-room" />
                                </h3>
                            </div>
                            <div className="column">
                                <p className="is-size-5">
                                    650PHP/night
                                </p>
                            </div>
                        </div>
                        <div className="columns is-mobile">
                            <div className="column">
                                <ButtonEx
                                    href="https://booking.com/hotel/ph/story-share-inc.html"
                                    text={intl.formatMessage({ id: "book-via-booking.com" })}
                                />
                                
                            </div>
                            <div className="column">
                                <Button
                                    to="/contact"
                                    text={intl.formatMessage({ id: "book-via-this-site" })}
                                    green={true}
                                />
                            </div>
                        </div>
                        <p>
                            <FormattedMessage id="expensive?" />
                        </p>
                        <p>
                            <FormattedMessage id="book-directly" />
                        </p>
                    </div>

                    <div className="column is-7">
                        <figure className="image">
                            <img className="border-radius" src={apas_single001} alt="apas single room" />
                        </figure>
                    </div>
                </div>

                <div className="columns margin-top-2">
                    <div className="column is-5 has-text-centered max-width-1">
                        
                        <div className="columns is-mobile">
                            <div className="column">
                                <p className="subtitle is-size-5">
                                    <FormattedMessage id="twin-room" />
                                </p>
                            </div>
                            <div className="column">
                                <p className="is-size-5">
                                    1000PHP/night
                                </p>
                            </div>
                        </div>
                        
                        <div className="columns is-mobile">
                            <div className="column">
                                <ButtonEx
                                    href="https://booking.com/hotel/ph/story-share-inc.html"
                                    text={intl.formatMessage({ id: "book-via-booking.com" })}
                                />
                                
                            </div>
                            <div className="column">
                                <Button
                                    to="/contact"
                                    text={intl.formatMessage({ id: "book-via-this-site" })}
                                    green={true}
                                />
                            </div>
                        </div>
                        <p>
                            <FormattedMessage id="expensive?" />
                        </p>
                        <p>
                            <FormattedMessage id="book-directly" />
                        </p>
                        
                    </div>
                    <div className="column is-7">
                        <figure className="image">
                            <img className="border-radius" src={guadalupe_double} alt="guadalupe twin room" />
                        </figure>
                    </div>
                </div>

                
            </div>
        </section>
        <GalleryHscroll
            images={[apas_out, apas_single002, apas_living, apas_header]}
        />

        <GoogleMap
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.0314941896636!2d123.90291771420006!3d10.33936469261902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a998de64afaebf%3A0x7f489632ffbf423c!2sStoryshare%20Apas!5e0!3m2!1sen!2sjp!4v1577014737639!5m2!1sen!2sjp"
        />


        <section>
            <figure className="image is-3by1" id="guadalupe">
                <img src={guadalupe_header} />
            </figure>
        </section>

        <section className="section">
            <div className="container">
                <h2 className="subtitle is-size-4 has-text-centered">
                    <FormattedMessage id="cebu-guadalupe" />
                </h2>
                <h2 className="subtitle is-size-5 has-text-centered">
                    <FormattedMessage id="EOP" />
                </h2>
                <hr />
                <p className="has-text-centered">
                    <FormattedMessage id="rooms-guadalupe-subtitle" />
                </p>

                <div className="columns is-centered margin-top-2">
                    <div className="column is-8">
                        <p className="is-size-6 margin-bottom">
                            <FormattedMessage id="rooms-guadalupe-text01" />
                        </p>
                        <p className="is-size-6 margin-bottom">
                            <FormattedMessage id="rooms-guadalupe-text02" />
                        </p>
                        <p className="is-size-6 margin-bottom">
                            <FormattedMessage id="rooms-guadalupe-text03" />
                        </p>
                        <Gallery_1_2
                            img1={guadalupe_entrance002}
                            img2={guadalupe_living003}
                            img3={guadalupe_living004}
                        />
                    </div>
                </div>
                <div className="columns is-centered margin-top-2">
                    <div className="column is-8">
                        <p className="is-size-6 margin-bottom">
                            <FormattedMessage id="rooms-guadalupe-text04" />
                        </p>
                        <p className="is-size-6 margin-bottom">
                            <FormattedMessage id="rooms-guadalupe-text05" />
                        </p>
                        <p className="is-size-6 margin-bottom">
                            <FormattedMessage id="rooms-guadalupe-text06" />
                        </p>
                        <p className="is-size-6 margin-bottom">
                            <FormattedMessage id="rooms-guadalupe-text07" />
                        </p>
                        <p className="is-size-6 margin-bottom">
                            <FormattedMessage id="rooms-guadalupe-text08" />
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-5 has-text-centered max-width-1">

                        <div className="columns is-mobile">
                            <div className="column">
                                <p className="subtitle is-size-5">
                                    <FormattedMessage id="single-room" />
                                </p>
                            </div>
                            <div className="column">
                                <p className="is-size-5">
                                    700PHP/night
                                </p>
                            </div>
                        </div>
                        <div className="columns is-mobile">
                            <div className="column">
                                <h3 className="subtitle is-size-5">
                                    <FormattedMessage id="budget-single-room" />
                                </h3>
                            </div>
                            <div className="column">
                                <p className="is-size-5">
                                    550PHP/night
                                </p>
                            </div>
                        </div>
                        <div className="columns is-mobile">
                            <div className="column">
                                <ButtonEx
                                    href="https://www.booking.com/hotel/ph/storyshare-inc-guesthouse.html"
                                    text={intl.formatMessage({ id: "book-via-booking.com" })}
                                />
                                
                            </div>
                            <div className="column">
                                <Button
                                    to="/contact"
                                    text={intl.formatMessage({ id: "book-via-this-site" })}
                                    green={true}
                                />
                            </div>
                        </div>
                        <p>
                            <FormattedMessage id="expensive?" />
                        </p>
                        <p>
                            <FormattedMessage id="book-directly" />
                        </p>

                    </div>
                    <div className="column is-7">
                        <figure className="image">
                            <img className="border-radius" src={guadalupe_single002} alt="guadalupe single room" />
                        </figure>
                    </div>
                </div>
                <div className="columns margin-top-2">
                    <div className="column is-5 has-text-centered max-width-1">

                        <div className="columns is-mobile">
                            <div className="column">
                                <p className="subtitle is-size-5">
                                    <FormattedMessage id="twin-room" />
                                </p>
                            </div>
                            <div className="column">
                                <p className="is-size-5">
                                    900PHP/night
                                </p>
                            </div>
                        </div>
                        
                        <div className="columns is-mobile">
                            <div className="column">
                                <ButtonEx
                                    href="https://www.booking.com/hotel/ph/storyshare-inc-guesthouse.html"
                                    text={intl.formatMessage({ id: "book-via-booking.com" })}
                                />
                                
                            </div>
                            <div className="column">
                                <Button
                                    to="/contact"
                                    text={intl.formatMessage({ id: "book-via-this-site" })}
                                    green={true}
                                />
                            </div>
                        </div>
                        <p>
                            <FormattedMessage id="expensive?" />
                        </p>
                        <p>
                            <FormattedMessage id="book-directly" />
                        </p>
                        
                    </div>
                    <div className="column is-7">
                        <figure className="image">
                            <img className="border-radius" src={guadalupe_double} alt="guadalupe twin room" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <GalleryHscroll 
            images={[guadalupe_living003,guadalupe_living004,guadalupe_living005,]}
        />

        <GoogleMap
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.277346410621!2d123.88376981419985!3d10.319674892632456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999352d8b3def%3A0xd057d1a06a7901fc!2z44K544OI44O844Oq44O844K344Kn44KiIOiLseiqnuWtpuagoe-8huOCsuOCueODiOODj-OCpuOCuSDml6XmnKzoqp7lrozlhajnpoHmraLmoKHoiI4!5e0!3m2!1sen!2sjp!4v1577015718949!5m2!1sen!2sjp"
        />

        <section className="section">
            <div className="container">
                <h2 className="subtitle is-size-4 has-text-centered">
                    <FormattedMessage id="facilities-title" />
                </h2>
                <hr />
                <p className="has-text-centered">
                    <FormattedMessage id="facilities-subtitle" />
                </p>

                <div className="columns is-mobile is-multiline margin-top-2">
                    <div className="column is-size-5 is-half-mobile">
                        <FontAwesomeIcon icon={faUtensils} /><span className="subtitle">&nbsp;<FormattedMessage id="ketchen" /></span>
                        <p><FormattedMessage id="ketchen-desc" /></p>
                        <br />
                        <FontAwesomeIcon icon={faPaw} /><span className="subtitle">&nbsp;<FormattedMessage id="pet" /></span>
                        <p><FormattedMessage id="pet-desc" /></p>
                        <br />
                        <FontAwesomeIcon icon={faWifi} /><span className="subtitle">&nbsp;<FormattedMessage id="wifi" /></span>
                        <p><FormattedMessage id="wifi-desc" /></p>
                    </div>

                    <div className="column is-size-5 is-half-mobile">
                        <FontAwesomeIcon icon={faConciergeBell} /><span className="subtitle">&nbsp;<FormattedMessage id="service" /></span>
                        <p><FormattedMessage id="service-desc" /></p>
                        <br />
                        <FontAwesomeIcon icon={faTshirt} /><span className="subtitle">&nbsp;<FormattedMessage id="laundry" /></span>
                        <p><FormattedMessage id="laundry-desc" /></p>
                        <br />
                        <FontAwesomeIcon icon={faParking} /><span className="subtitle">&nbsp;<FormattedMessage id="parking" /></span>
                        <p><FormattedMessage id="parking-desc" /></p>
                    </div>

                    <div className="column is-size-5 is-half-mobile">
                        <FontAwesomeIcon icon={faHome} /><span className="subtitle">&nbsp;<FormattedMessage id="general" /></span>
                        <p><FormattedMessage id="general-desc01" /></p>
                        <p><FormattedMessage id="general-desc02" /></p>
                        <p><FormattedMessage id="general-desc03" /></p>
                        <p><FormattedMessage id="general-desc04" /></p>
                        <br />
                        <FontAwesomeIcon icon={faLanguage} /><span className="subtitle">&nbsp;<FormattedMessage id="languages" /></span>
                        <p><FormattedMessage id="languages-desc" /></p>
                    </div>
                    
                    
                </div>
                
            </div>
        </section>


        <section className="section">
            <div className="container">
                <h2 className="subtitle is-size-4 has-text-centered">
                    <FormattedMessage id="house-rules-title" />
                </h2>
                <hr />
                <p className="has-text-centered">
                    <FormattedMessage id="house-rules-subtitle" />
                </p>

                <div className="columns is-mobile is-multiline margin-top-2">
                    <div className="column is-size-5 is-half-mobile">
                        <FontAwesomeIcon icon={faSuitcaseRolling} />
                        <span className="subtitle">&nbsp;<FormattedMessage id="checkin-checkout" /></span>
                        
                        <p><br /><FormattedMessage id="checkin-checkout-desc01" /><br /> 3:00 PM - 7:00 PM</p>
                        <br />
                        <p><FormattedMessage id="checkin-checkout-desc02" /><br /> 10:00 AM</p>
                        <br />
                        <FontAwesomeIcon icon={faGlassCheers} />
                        <span className="subtitle">&nbsp;<FormattedMessage id="age-restriction" /></span>
                        <p><FormattedMessage id="age-restriction-desc" /></p>
                        
                    </div>

                    <div className="column is-size-5 is-half-mobile">
                        <FontAwesomeIcon icon={faBaby} />
                        <span className="subtitle">&nbsp;<FormattedMessage id="children-beds" /></span>
                        <p><FormattedMessage id="children-beds-desc01" /></p>
                        <p><FormattedMessage id="children-beds-desc02" /></p>
                        <p><FormattedMessage id="children-beds-desc03" /></p>
                        <br />
                        <FontAwesomeIcon icon={faBan} />
                        <span className="subtitle">&nbsp;<FormattedMessage id="cancellations-payment" /></span>
                        <p><FormattedMessage id="cancellations-payment-desc" /></p>
                    </div>

                    <div className="column is-size-5 is-half-mobile">
                        <FontAwesomeIcon icon={faMoneyBillAlt} />
                        <span className="subtitle">&nbsp;<FormattedMessage id="cash-only" /></span>
                        <p><FormattedMessage id="cash-only-desc" /></p>
                        <br />
                        <FontAwesomeIcon icon={faPaw} />
                        <span className="subtitle">&nbsp;<FormattedMessage id="pet" /></span>
                        <p><FormattedMessage id="pet-desc" /></p>
                    </div>
                </div>
            </div>
        </section>

    </Layout>
    )
}

export default Rooms