import React from 'react'
//
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import News from '../components/News'
import { Link } from 'gatsby'

import("../../src/index.sass")

const Tetete = () => (
    <Layout>
        <Hero />
        <News />
        <div className="margin-top-2" />
        <About />


        <section 
            className="main content"
            style={{

            }}
        >
            <div className="full-height align-items-center flex-flow-column">
                    <h2 className="has-text-primary">
                        病気・ケガ
                    </h2>
                    <Link className="button is-link" to='/tags/病気・ケガ/'>
                        一覧をみる
                    </Link>

            </div>
        </section>


        <section 
            className="main content background-color-main"
            style={{

            }}
        >
            <div className="full-height align-items-center flex-flow-column">
                    <h2 className="has-text-primary">
                        結婚
                    </h2>
                    <Link className="button is-link" to='/tags/病気・ケガ/'>
                        一覧をみる
                    </Link>
            </div>
        </section>


        <section 
            className="main content"
            style={{

            }}
        >
            <div className="full-height align-items-center flex-flow-column">
                    <h2 className="has-text-primary">
                        出産
                    </h2>
                    <Link className="button is-link" to='/tags/病気・ケガ/'>
                        一覧をみる
                    </Link>
            </div>
        </section>
        

        <section 
            className="main content background-color-main"
            style={{

            }}
        >
            <div className="full-height align-items-center flex-flow-column">
                    <h2 className="has-text-primary">
                        子育て
                    </h2>
                    <Link className="button is-link" to='/tags/病気・ケガ/'>
                        一覧をみる
                    </Link>
            </div>
        </section>


        <section 
            className="main content"
            style={{

            }}
        >
            <div className="full-height align-items-center flex-flow-column">
                    <h2 className="has-text-primary">
                        出産
                    </h2>
                    <Link className="button is-link" to='/tags/病気・ケガ/'>
                        一覧をみる
                    </Link>
            </div>
        </section>


        <section 
            className="main content background-color-main"
            style={{

            }}
        >
            <div className="full-height align-items-center flex-flow-column">
                    <h2 className="has-text-primary">
                        仕事・休職・退職・就職
                    </h2>
                    <Link className="button is-link" to='/tags/病気・ケガ/'>
                        一覧をみる
                    </Link>
            </div>
        </section>
    </Layout>
)

export default Tetete;