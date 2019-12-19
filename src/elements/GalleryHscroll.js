import React from 'react'

const GalleryHscroll = (props) => {
    return(

        <section className="section has-background-classic-blue">
            <div className="columns is-mobile overflow-scroll">
                {props.images.map(image => (
                    <div className="is-parent column min-width-1" key={image}>
                        <figure className="image is-3by2">
                            <img className="border-radius" src={image} alt="" />
                        </figure>
                    </div>
                ))}        
            </div>
        </section>
    )
}

export default GalleryHscroll