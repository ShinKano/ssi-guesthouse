import React from 'react'
//
import Button from '../elements/Button'
import Gallery_1_2 from '../elements/Gallery_1_2'
//
import apas_out from '../img/apas_out.jpg'
import apas_single001 from '../img/apas_single001.jpg'
import apas_kitchen from '../img/apas_kitchen.jpg'
import guadalupe_out from '../img/guadalupe_out.jpg'
import guadalupe_single002 from '../img/guadalupe_single002.jpg'
import guadalupe_living002 from '../img/guadalupe_living002.jpg'




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
                                to="/rooms#apas"
                                text="お部屋を見る"
                            />
                        </div>
                    </div>
                    <div className="column is-6">
                        <Gallery_1_2
                            img1={apas_out}
                            img2={apas_single001}
                            img3={apas_kitchen}
                        />
                    </div>
                </div>

                <div className="margin-top-2" />

                <div className="columns reverse margin-top-2">
                    <div className="column is-6">
                        <Gallery_1_2
                            img1={guadalupe_living002}
                            img2={guadalupe_single002}
                            img3={guadalupe_out}
                        />
                    </div>
                    <div className="column max-width-1">
                        <h3 className="title is-4 has-text-centered">セブ・グアダルーペ</h3>
                        <p>
                            ゲストハウスストーリーシェア「グアダルーペ」はセブの中心地から少しだけ離れた場所にあります。
                            <strong>日本語禁止・イングリッシュオンリー（EOP）ですので、ゲストの方は国籍に関わらず英語で会話をします。</strong>
                            そのため、海外のゲスト同士での交流がとても盛んになっています。
                            <br /><br />
                            こうした世界中から集まるゲストとの交流が人気の理由です。
                            語学学校が運営するゲストハウスなので、英語の体験授業も受けていただけます。
                            <br /><br />
                            観光だけでない、ココでしかできない旅の思い出をお作りください。
                        </p>
                        <div className="has-text-centered margin-top-2">
                            <Button
                                to="/rooms#guadalupe"
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