import React from 'react'
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {    faUtensils,
            faPaw,
            faWifi,
            faConciergeBell,
            faTshirt,
            faParking,
            faHome,
            faLanguage,
            faSuitcaseRolling,
            faBan,
            faBaby,
            faGlassCheers,
            faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
//
import Layout from '../components/Layout'
import Gallery_1_2 from '../elements/Gallery_1_2'
import GalleryHscroll from '../elements/GalleryHscroll'
import Button from '../elements/Button'
import ButtonEx from '../elements/ButtonEx'
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
import guadalupe_single from '../img/guadalupe_single.jpg'
import guadalupe_double from '../img/guadalupe_double.jpg'

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
                        </p>
                        <ButtonEx
                            href="https://booking.com/hotel/ph/story-share-inc.html"
                            text="Booking.comで予約"
                        />
                        <p>
                            予約サイトの価格が高いですか？<br />
                            直接のご予約で、上記料金を適用できます。
                        </p>
                        <Button
                            to="/contact"
                            text="直接このサイトで予約"
                            green={true}
                        />

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
                            ゲストハウスストーリーシェア「グアダルーペ」はレストランやモールへのお出かけにも遠くないエリアにございます。
                            カフェ、日本食レストラン、韓国レストランは歩いて数分の場所にございます。ショッピングモールへは20分ほどです。
                            <br /><br />
                            もちろん、タクシーやジプニーなどもご利用いただけます。フィリピンではいたるところにタクシーが走っており、
                            初乗り料金100円ほどです。ジプニーと呼ばれるローカルバスや、トライシクルを利用すれば
                            さらに格安でどこへでもお出かけできます。
                            <br /><br />
                            ゲストハウスストーリーシェアではバイクスクーターのレンタルもご利用できます。 
                            もちろん、バイクを使わなくてもタクシーやジプニーがすぐ捕まえられるエリアですので、
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
                        </p>
                        <ButtonEx
                            href="https://www.booking.com/hotel/ph/storyshare-inc-guesthouse.html"
                            text="Booking.comで予約"
                        />
                        <p>
                            予約サイトの価格が高いですか？<br />
                            直接のご予約で、上記料金を適用できます。
                        </p>
                        <Button
                            to="/contact"
                            text="直接このサイトで予約"
                            green={true}
                        />
                    </div>
                    <div className="column is-7">
                        <figure className="image">
                            <img className="border-radius" src={guadalupe_single} alt="guadalupe single room" />
                        </figure>
                    </div>
                </div>
                <div className="columns margin-top-2">
                    <div className="column is-5 has-text-centered max-width-1">
                        <h3 className="subtitle is-size-4">
                            ツインルーム
                        </h3>
                        <p className="is-size-5">
                            850PHP/1泊
                        </p>
                        <ButtonEx
                            href="https://www.booking.com/hotel/ph/storyshare-inc-guesthouse.html"
                            text="Booking.comで予約"
                        />
                        <p>
                            予約サイトの価格が高いですか？<br />
                            直接のご予約で、上記料金を適用できます。
                        </p>
                        <Button
                            to="/contact"
                            text="直接このサイトで予約"
                            green={true}
                        />
                    </div>
                    <div className="column is-7">
                        <figure className="image">
                            <img className="border-radius" src={guadalupe_double} alt="guadalupe twin room" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <GalleryHscroll 
            images={[guadalupe_living003,guadalupe_living004,guadalupe_living005,]}
        />


        <section className="section">
            <div className="container">
                <h2 className="subtitle is-size-4 has-text-centered">
                    お部屋の設備
                </h2>
                <hr />
                <p className="has-text-centered">
                    「アパス」「グアダルーペ」共通
                </p>

                <div className="columns is-mobile is-multiline margin-top-2">
                    <div className="column is-size-5 is-half-mobile">
                        <FontAwesomeIcon icon={faUtensils} /><span className="subtitle"> キッチン</span>
                        <p>共用キッチン利用可</p>
                        <br />
                        <FontAwesomeIcon icon={faPaw} /><span className="subtitle"> ペット</span>
                        <p>ペットの宿泊不可</p>
                        <br />
                        <FontAwesomeIcon icon={faWifi} /><span className="subtitle"> Wifi</span>
                        <p>WiFi無料</p>
                    </div>

                    <div className="column is-size-5 is-half-mobile">
                        <FontAwesomeIcon icon={faConciergeBell} /><span className="subtitle"> サービス</span>
                        <p>専用チェックイン / チェックアウト</p>
                        <br />
                        <FontAwesomeIcon icon={faTshirt} /><span className="subtitle"> ランドリー</span>
                        <p>洗濯サービスは格安にて承ります</p>
                        <br />
                        <FontAwesomeIcon icon={faParking} /><span className="subtitle"> 駐車場</span>
                        <p>駐車スペースは1日20PHPにてご利用できます</p>
                    </div>

                    <div className="column is-size-5 is-half-mobile">
                        <FontAwesomeIcon icon={faHome} /><span className="subtitle"> その他</span>
                        <p>分煙・喫煙スペース有</p>
                        <p>エアコン</p>
                        <p>防音ルーム</p>
                        <p>禁煙スペース有</p>
                        <br />
                        <FontAwesomeIcon icon={faLanguage} /><span className="subtitle"> 対応言語</span>
                        <p>英語 / 日本語</p>
                    </div>
                    
                    
                </div>
                
            </div>
        </section>


        <section className="section">
            <div className="container">
                <h2 className="subtitle is-size-4 has-text-centered">
                    宿泊のルール
                </h2>
                <hr />
                <p className="has-text-centered">
                    「アパス」「グアダルーペ」共通
                </p>

                <div className="columns is-mobile is-multiline margin-top-2">
                    <div className="column is-size-5 is-half-mobile">
                        <FontAwesomeIcon icon={faSuitcaseRolling} /><span className="subtitle"> チェックイン/ チェックアウト</span>
                        
                        <p><br />チェックイン :<br /> 1:00 PM - 7:00 PM</p>
                        <br />
                        <p>チェックアウト :<br /> 11:00 AM - 12:00 PM</p>
                        <br />
                        <FontAwesomeIcon icon={faGlassCheers} /><span className="subtitle"> 年齢制限なし</span>
                        <p>ゲストの年齢制限はありません</p>
                        
                    </div>

                    <div className="column is-size-5 is-half-mobile">
                        <FontAwesomeIcon icon={faBaby} /><span className="subtitle"> お子様とベッド</span>
                        <p>お子様も宿泊できます</p>
                        <p>ベビーベッドのご用意はありません</p>
                        <p>エクストラベッドのご用意はありません</p>
                        <br />
                        <FontAwesomeIcon icon={faBan} /><span className="subtitle"> キャンセル / お支払い</span>
                        <p>キャンセルについてはお部屋によって異なりますので. ご予約の際にお問い合わせください。</p>
                    </div>

                    <div className="column is-size-5 is-half-mobile">
                        <FontAwesomeIcon icon={faMoneyBillAlt} /><span className="subtitle"> 現金のみ</span>
                        <p>現金でのお支払いのみ可能です</p>
                        <br />
                        <FontAwesomeIcon icon={faPaw} /><span className="subtitle"> ペット</span>
                        <p>ペットのお持ち込み不可</p>
                    </div>
                </div>
            </div>
        </section>

    </Layout>
)

export default Rooms