import React from 'react'
import styled from 'styled-components'
//
import about from '../img/bg-1.jpg'

const Features = () => {

    const features = [
        {title: 'レンタルバイク', 
         desc: '便利なバイクの貸し出しサービスを行っています。セブの街をすみずみまで探検してみましょう。'},
        {title: 'その２', 
         desc: '便利なバイクの貸し出しサービスを行っています。セブの街をすみずみまで探検してみましょう。'},
        {title: 'その3', 
         desc: '便利なバイクidjijjの貸し出しサービスを行っています。セブの街をすみずみまで探検してみましょう。'},
        {title: 'その4', 
         desc: '便利なバイクidjijjの貸し出しサービスを行っています。セブの街をすみずみまで探検してみましょう。'},
        {title: 'その5', 
         desc: '便利なバイクidjijjの貸し出しサービスを行っています。セブの街をすみずみまで探検してみましょう。'},
        {title: 'その6', 
         desc: '便利なバイクidjijjの貸し出しサービスを行っています。セブの街をすみずみまで探検してみましょう。'},
    ];

    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h2 className="title has-text-centered">
                            <span className="inline-block">ストーリーシェアの</span>
                            <span className="inline-block">特別なサービス</span>
                        </h2>
                    </div>
                </div>

                <div className="columns is-multiline">

                    {features.map(feature => (
                        <div className="column is-one-third" key={feature.title}>
                            <div className="card border-radius">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">{feature.title}</p>
                                        </div>
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