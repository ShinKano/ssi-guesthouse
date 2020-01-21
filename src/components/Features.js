import React from 'react'
import { useIntl } from "gatsby-plugin-intl"
//
import food from '../img/food.jpg'
import guests from '../img/guests.jpg'
import eop from '../img/eop.jpg'
import lesson from '../img/lesson.jpg'
import activity from '../img/activity.jpg'
import moterbike from '../img/moterbike.jpg'


const Features = () => {
    const intl = useIntl()
    const features = [
        {title: intl.formatMessage({ id: "features01-title" }),
         desc : intl.formatMessage({ id: "features01-desc" }),
         image: moterbike},
        
        {title: intl.formatMessage({ id: "features02-title" }),
         desc : intl.formatMessage({ id: "features02-desc" }),
         image: food},
        
        {title: intl.formatMessage({ id: "features03-title" }),
         desc : intl.formatMessage({ id: "features03-desc" }),
         image: lesson},
        
        {title: intl.formatMessage({ id: "features04-title" }),
         desc : intl.formatMessage({ id: "features04-desc" }),
         image: activity},
        
        {title: intl.formatMessage({ id: "features05-title" }),
         desc : intl.formatMessage({ id: "features05-desc" }),
         image: eop},
        
        {title: intl.formatMessage({ id: "features06-title" }),
         desc : intl.formatMessage({ id: "features06-desc" }),
         image: guests},
    ];

    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h2 className="title has-text-centered">
                            <span className="inline-block">
                                {intl.formatMessage({ id: "special-features01" })}
                            </span>
                            <span className="inline-block">
                                {intl.formatMessage({ id: "special-features02" })}
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="columns is-multiline">

                    {features.map(feature => (
                        <div className="column is-one-third" key={feature.title}>
                            <div className="card border-radius">
                                <div className="card-image">
                                    <figure className="image is-2by1">
                                        <img className="border-radius" src={feature.image} alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="margin-bottom">
                                        <p className="title is-4 has-text-centered">{feature.title}</p>
                                    </div>
                                    <div className="content">
                                        {feature.desc}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    

                </div>
            </div>
        </section>
    )
}

export default Features