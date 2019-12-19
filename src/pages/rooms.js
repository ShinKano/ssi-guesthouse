import React from 'react'
import { Link } from 'gatsby'
//
import Layout from '../components/Layout'
import Gallery_1_2 from '../elements/Gallery_1_2'
import GalleryHscroll from '../elements/GalleryHscroll'
//
import apas_header from '../img/apas-header.jpg'
import apas_out from '../img/apas_out.jpg'
import apas_living from '../img/apas_living.jpg'
import cebu_city001 from '../img/cebu_city001.jpg'
import apas_single002 from '../img/apas_single002.jpg'
import guadalupe_header from '../img/guadalupe_header.jpg'
import guadalupe_living003 from '../img/guadalupe_living003.jpg'
import guadalupe_living004 from '../img/guadalupe_living004.jpg'
import guadalupe_living005 from '../img/guadalupe_living005.jpg'
import guadalupe_entrance002 from '../img/guadalupe_entrance002.jpg'
import guadalupe_single001 from '../img/guadalupe_single001.jpg'
import guests002 from '../img/guests002.jpg'

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

        <section>
            <figure className="image is-3by1" id="apas">
                <img src={apas_header} />
            </figure>
        </section>

        <section className="section">
            <div className="container">
                <h2 className="subtitle is-size-4 has-text-centered">
                    セブ・アパス
                </h2>
                <hr />
                <p className="has-text-centered">
                    活気に満ちたセブ島の中心地で便利に滞在。
                </p>

                <div className="columns is-centered margin-top-2">
                    <div className="column is-8">
                        <p className="is-size-6 margin-bottom">
                            賑やかなセブの中心地にある「ストーリーシェア・アパス」は、
                            セブで一番大きな「アヤラ・ショッピングモール」や「ガイサノモール」など、
                            ショッピングや普段のお買い物にとても便利なエリアにあります。
                            <br /><br />
                            カフェやローカルレストランも近くにあるので、地元のフィリピンフードも存分に楽しむことができます。
                        </p>
                        <Gallery_1_2
                            img1={apas_living}
                            img2={apas_out}
                            img3={cebu_city001}
                        />
                    </div>
                </div>
                <div className="columns is-centered margin-top-2">
                    <div className="column is-8">
                        <p className="is-size-6 margin-bottom">
                            お部屋は全てシングルルームとなっております。机と椅子のほか、
                            エアコンとワードローブも付いています。（喫煙スペースは客室の外にご用意がございます）
                            <br /><br />
                            また、広い庭とテラスもゲストハウスストーリーシェアの特徴です。
                            賑やかなセブの中心地にありながら、落ち着いた雰囲気で快適に過ごしていただけます。
                            <br /><br />
                            近くの「ITパーク」と呼ばれるエリアには、レストランやカフェが揃っていますので、食事に困ることはありません。
                            さらにゆったり落ち着いてリゾートを満喫するなら「キャンプ ラプラプ」という自然いっぱいのエリアに歩いて行くことも可能です。
                            <br /><br />
                            ゲストハウスストーリーシェアではバイクスクーターのレンタルもご利用できます。 
                            もちろん、バイクを使わなくても、タクシーやジプニーがすぐ捕まえられるエリアですので、
                            どんな場所にも簡単にアクセスできます。
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-5 has-text-centered max-width-1">
                        <h3 className="subtitle is-size-4">
                            シングルルーム
                        </h3>
                        <p className="is-size-5">
                            850PHP/1泊
                            <br /><br />
                            シングルベッド1台
                        </p>
                    </div>
                    <div className="column is-7">
                        <figure className="image">
                            <img className="border-radius" src={apas_single002} alt="apas single room" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <GalleryHscroll 
            images={[apas_out, apas_single002, apas_living, apas_header]}
        />



        <section>
            <figure className="image is-3by1" id="guadalupe">
                <img src={guadalupe_header} />
            </figure>
        </section>

        <section className="section">
            <div className="container">
                <h2 className="subtitle is-size-4 has-text-centered">
                    セブ・グアダルーペ
                </h2>
                <hr />
                <p className="has-text-centered">
                    落ち着いてリラックスできるセブの邸宅に滞在。
                </p>

                <div className="columns is-centered margin-top-2">
                    <div className="column is-8">
                        <p className="is-size-6 margin-bottom">
                            ゲストハウスストーリーシェア「グアダルーペ」は賑やかなセブの中心地から少しだけ離れた場所にあります。
                            静かで落ち着ける場所にありますので、リラックスした環境をお求めのお客様にご好評いただいています。
                            <br /><br />
                            大きな共用リビングルームにはエアコンも完備。観葉植物のグリーンに囲まれながら、心ゆくまでリラックスしていただけます。
                            <br /><br />
                            カフェやローカルレストランも近くにあるので、地元のフィリピンフードも存分に楽しむことができます。
                        </p>
                        <Gallery_1_2
                            img1={guadalupe_entrance002}
                            img2={guadalupe_living003}
                            img3={guadalupe_living004}
                        />
                    </div>
                </div>
                <div className="columns is-centered margin-top-2">
                    <div className="column is-8">
                        <p className="is-size-6 margin-bottom">
                            お部屋は全てシングルルームとなっております。机と椅子のほか、
                            エアコンとワードローブも付いています。（喫煙スペースは客室の外にご用意がございます）
                            <br /><br />
                            また、広い庭とテラスもゲストハウスストーリーシェアの特徴です。
                            賑やかなセブの中心地にありながら、落ち着いた雰囲気で快適に過ごしていただけます。
                            <br /><br />
                            近くの「ITパーク」と呼ばれるエリアには、レストランやカフェが揃っていますので、食事に困ることはありません。
                            さらにゆったり落ち着いてリゾートを満喫するなら「キャンプ ラプラプ」という自然いっぱいのエリアに歩いて行くことも可能です。
                            <br /><br />
                            ゲストハウスストーリーシェアではバイクスクーターのレンタルもご利用できます。 
                            もちろん、バイクを使わなくても、タクシーやジプニーがすぐ捕まえられるエリアですので、
                            どんな場所にも簡単にアクセスできます。
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-5 has-text-centered max-width-1">
                        <h3 className="subtitle is-size-4">
                            シングルルーム
                        </h3>
                        <p className="is-size-5">
                            850PHP/1泊
                            <br /><br />
                            シングルベッド1台
                        </p>
                    </div>
                    <div className="column is-7">
                        <figure className="image">
                            <img className="border-radius" src={guadalupe_single001} alt="guadalupe single room" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <GalleryHscroll 
            images={[guadalupe_living003,guadalupe_living004,guadalupe_living005,guadalupe_single001]}
        />



    </Layout>
)

export default Rooms