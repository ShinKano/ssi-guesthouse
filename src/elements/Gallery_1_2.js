import React from 'react'

const Gallery_1_2 = (props) => (
    <div>
        <div className="columns">
            <div className="column">
                <figure className="image is-5by3">
                    <img className="border-radius" src={props.img1} alt="" />
                </figure>
            </div>
        </div>
        <div className="columns">
            <div className="column">
                <div className="columns is-mobile">
                    <div className="column is-6">
                        <figure className="image is-5by3">
                            <img className="border-radius" src={props.img2} alt="" />
                        </figure>
                    </div>

                    <div className="column is-6">
                        <figure className="image is-5by3">
                            <img className="border-radius" src={props.img3} alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
)


export default Gallery_1_2