import React from 'react'
import styled from 'styled-components'
//
import bgImage from '../img/bg-1.jpg'
import Button from '../elements/Button'


const BackgroundImage = styled.section`
    background-image: url(${bgImage});
    background-position: center;
    background-size: cover;
    height: 90vh;
    display: flex;
    align-items: center;
`

const Hero = () => {
    return (
        <BackgroundImage className="section">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="hero-text column">
                        <h1 className="title color-white is-size-2">
                            <span className="inline-block">GuestHouse</span>
                            <span className="inline-block">&nbsp;Storyshare</span>
                        </h1>
                        <h2 className="subtitle is-6 color-white has-text-weight-bold">
                            <span className="inline-block">&nbsp;ゲストハウス</span>
                            <span className="inline-block">&nbsp;ストーリーシェア</span>
                        </h2>
                        <h2 className="subtitle color-white">
                            旅人が集まる
                            <span className="inline-block">セブ島の</span>
                            <span className="inline-block">日本人経営ゲストハウス</span>
                        </h2>
                        <Button 
                            to="/contact"
                            text="予約はコチラ！"
                        />
                    </div>
                </div>
            </div>
        </BackgroundImage>
    )
}

export default Hero