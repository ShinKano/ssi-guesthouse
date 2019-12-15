import React from 'react'
import styled from 'styled-components'
//
import about from '../img/bg-1.jpg'


const About = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        {/* blank space here */}
                    </div>
                    <div className="column">
                        <h2 className="title has-text-centered heading-3">
                            <span className="inline-block">出会いのある旅は、</span>
                            <span className="inline-block">素敵だ。</span>
                        </h2>
                    </div>
                </div>
                <div className="columns is-gapless reverse">
                    <div className="column">
                        <img className="" src={about} alt="about" />
                    </div>
                    <div className="column">
                        <p>
                            リゾートホテルやシティホステルにはない、
                            特別な魅力がいっぱいの「ゲストハウス・ストーリーシェア」がフィリピンのセブ島に誕生しました。
                            <br /><br />
                            ホテルのように、高級なベッドやルームサービスはありませんが、
                            その分格安で、温かみのあるご滞在のサポートを心がけています。
                            <br /><br />
                            ゲストハウスは語学学校に併設していますので、英語ができない方でも安心です。
                            外国人ゲストやバックパッカー、旅人も大勢いらっしゃいますので、出会いに溢れた空間になっています。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About