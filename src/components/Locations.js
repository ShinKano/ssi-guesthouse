import React from 'react'
import styled from 'styled-components'
//
import Button from '../elements/Button'
import about from '../img/bg-1.jpg'
import Gallery_1_2 from '../elements/Gallery_1_2'



const Locations = () => {
    return(
        <section className="section has-background-lightblue">
            <div className="container">
                <h2 className="title has-text-centered is-spaced">
                    <span className="inline-block">選べる</span>
                    <span className="inline-block">ロケーション</span>
                </h2>
                <div className="columns margin-top-2">
                    <div className="column max-width-1">
                        <h3 className="title is-4 has-text-centered">セブ・アパス</h3>
                        <p>
                            ゲストハウスストーリーシェア「アパス」は賑やかなセブの中心街に位置しています。
                            <br /><br />
                            たくさんのアクティビティやお店が近くにありながら、治安もよく、落ち着いた雰囲気でリラックスしていただけます。
                            <br /><br />
                            ゲストハウスはwifiも完備。リビングでご自身のスマホやパソコンでご使用いただけます。 
                            一人で過ごされたいお客様用の静かなスペースのご用意もございます。
                        </p>
                        <div className="has-text-centered margin-top-2">
                            <Button
                                href="https://www.storyshare.jp/estimation_inquiry/"
                                text="お部屋を見る"
                            />
                        </div>
                    </div>
                    <div className="column is-6">
                        <Gallery_1_2
                            img1={about}
                            img2={about}
                            img3={about}
                        />
                    </div>
                </div>

                <div className="margin-top-2" />

                <div className="columns reverse margin-top-2">
                    <div className="column is-6">
                        <Gallery_1_2
                            img1={about}
                            img2={about}
                            img3={about}
                        />
                    </div>
                    <div className="column max-width-1">
                        <h3 className="title is-4 has-text-centered">セブ・グアダルーペ</h3>
                        <p>
                            ゲストハウスストーリーシェア「アパス」は賑やかなセブの中心街に位置しています。
                            <br /><br />
                            たくさんのアクティビティやお店が近くにありながら、治安もよく、落ち着いた雰囲気でリラックスしていただけます。
                            <br /><br />
                            ゲストハウスはwifiも完備。リビングでご自身のスマホやパソコンでご使用いただけます。 
                            一人で過ごされたいお客様用の静かなスペースのご用意もございます。
                        </p>
                        <div className="has-text-centered margin-top-2">
                            <Button
                                href="https://www.storyshare.jp/estimation_inquiry/"
                                text="お部屋を見る"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Locations