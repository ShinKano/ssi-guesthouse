import React from 'react'
import { Link } from 'gatsby'
//
import Layout from '../components/Layout'
//
import apas_header from '../img/apas-header.jpg'

const Rooms = () => (

    <Layout>
        <section className="section has-background-classic-blue">
            <div className="container">
            <div className="full-height align-items-center">
                    <h1 className="title color-white has-text-centered">
                        お部屋の紹介
                    </h1>
                </div>
            </div>
        </section>

        <section className="">
            <figure className="image is-3by1">
                <img src={apas_header} />
            </figure>
        </section>

        <section className="section">
            <div className="container">
                <h1 className="subtitle is-size-4 has-text-centered">
                    セブ・アパス
                </h1>
            </div>
        </section>

    </Layout>
)

export default Rooms