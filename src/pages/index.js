import React from 'react'
//
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import News from '../components/News'
import Features from '../components/Features'
import Locations from '../components/Locations'

import("../../src/index.sass")

const Tetete = (props) => {

    // Display blog posts only for Japanese.
    const isJapanese = (props.path == "/ja/") ? true : false

    return (
    <Layout>
        <Hero />
        {isJapanese ?  <News /> : "" }
        <div className="margin-top-2" />
        <About />
        <Locations />
        <Features />


        
    </Layout>
    )
}

export default Tetete;