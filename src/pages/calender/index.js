import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'

const CalenderList = () => {

    return(
        <Layout>
            <section className="section has-background-classic-blue">
                <div className="container">
                    <div className="full-height align-items-center">
                        <h1 className="title color-white has-text-centered">
                            セブ島イベントまとめ
                        </h1>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container has-text-centered">
                    <h2 className="title ">
                        2020年
                    </h2>
                    <p className="margin-bottom">
                        <Link to="calender/2020/Jan" className="button is-primary is-size-5 has-text-weight-bold">
                            １月のイベントスケジュール
                        </Link>
                    </p>
                    <p className="margin-bottom">
                        <Link to="calender/2020/Feb" className="button is-primary is-size-5 has-text-weight-bold">
                            2月のイベントスケジュール
                        </Link>
                    </p>
                    <p className="margin-bottom">
                        <Link to="calender/2020/Mar" className="button is-primary is-size-5 has-text-weight-bold">
                            3月のイベントスケジュール
                        </Link>
                    </p>
                </div>
            </section>
            

        </Layout>

    )
}

export default CalenderList