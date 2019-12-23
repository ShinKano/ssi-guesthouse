import React from 'react'
//
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import News from '../components/News'
import Features from '../components/Features'
import Locations from '../components/Locations'

import("../../src/index.sass")

const Tetete = () => (
    <Layout>
        <Hero />
        <News />
        <div className="margin-top-2" />
        <About />
        <Locations />
        <Features />


        
    </Layout>
)

export default Tetete;