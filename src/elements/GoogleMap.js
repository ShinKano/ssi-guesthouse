import React from 'react'

const GoogleMap = (props) => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <figure className="image has-text-centered">
                            <iframe className="map" src={props.src} width="600" height="450" frameBorder="0"></iframe>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GoogleMap