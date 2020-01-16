import React from 'react'
//
import Layout from '../../../components/Layout'
import ButtonEx from '../../../elements/ButtonEx'
//
import templetour from '../../../img/calender/templetour.jpg'
import beatbox from '../../../img/calender/beatbox.jpg'
import plus63 from '../../../img/calender/plus63.jpg'
import ranevent from '../../../img/calender/ranevent.jpg'




const Feb = () => {

    const events = [
        {
            name: "Plus63 Music and Arts Festival 2020",
            date: "2/2",
            desc1: "2020年で5年目となるSMで行われる音楽フェス！セブのSMシーサイドコンプレックスセブコンサートグラウンドで、Plus63 Music＆Arts Festivalが行われます。",
            desc2: "アメリカのインディーポップバンド「LANY」やセブで有名な「Mandaue Nights」「Three Legged Men」「Sepia Times」など多数出演。チケットは以下のリンク先の公式サイトから購入できます。",
            image: plus63,
            link: "https://www.plus63festival.com/?fbclid=IwAR2mgUAh613P3pYXe4ZrW5rv7p2wW0tbFWvBK5z_sMpcJLZT56SF41jOScQ"
        },
        {
            name: "OYM Xtra Cebu Challenge",
            date: "2/9",
            desc1: "セブで行われるランニングイベント！。「8kmの部」と「5kmの部」があります。日本スポーツ企業の「ミズノ」がメインスポンサーとなっている珍しいイベントです。",
            desc2: "参加登録はアヤラモールか、SMシーサイドモール内にある「ミズノショップ」で行います。当日の会場はセブのパークモール。詳しくは公式Facebookページをチェック！",
            image: ranevent,
            link: "https://www.facebook.com/events/2383435141736130/permalink/2710930635653244/"
        },
        
        {
            name: "セブ寺院ツアー Cebu Temple Tour February 2020",
            date: "2/22",
            desc1: "Cebu Temple Tour February 2020はローカルガイドが案内でセブの寺院を巡るツアーです。「Taoist Temple」「Phu Sian Temple」「Hindu Temple」のセブ３大寺院を巡りながら、通常の観光ではわからないセブと寺院の繋がりについて学びます。",
            desc2: "また、2020年の今回はセブのチャネラーも同行する予定なので、よりディープでスピリチュアルな体験ができるでしょう。",
            image: templetour,
            link: "https://allevents.in/mobile/amp-event.php?event_id=200018783142017"
        },
        {
            name: "Visayas Beatbox Battle Championship 2020",
            date: "2/22",
            desc1: "セブのビートボックスNo.1を決める大会がここに！。セブのビートボクサーたちが集結し、バトルでその腕を競います。",
            desc2: "優勝者、入賞者には賞金も。参戦・観戦は以下のリンク先からチェック。会場は「Azul Cebu」（Streets of Asilo, Gorordo Avenue, 6000 Cebu City）です。",
            image: beatbox,
            link: "https://www.facebook.com/events/949831162045956/"
        },
        
    ];

    return(
        <Layout>
            <section className="section has-background-classic-blue">
                <div className="container">
                    <div className="full-height align-items-center">
                        <h1 className="title color-white has-text-centered">
                            【2020年2月】セブ島イベントカレンダー
                        </h1>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="columns is-centered margin-top-2">
                        <div className="column is-8">
                            <p className="is-size-6 margin-bottom">
                                2020年2月に予定されているセブ島のお祭りやイベント情報をまとめています。
                                <br /><br />
                                シヌログ祭りで賑わう1月が終わっても、セブはまだまだアツい！
                                参加したいイベントが盛りだくさんとなっています。
                                お祭り好きなフィリピン人も大盛り上がりのカレンダーを随時更新。
                                <br />
                                カレンダーをチェックして、セブ観光を楽しみましょう！
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {events.map(event => (
                <section className="section" key={event.name}>
                    <div className="container">
                        <span className="tag is-info is-large has-text-weight-bold">{event.date}</span><br />
                        <h2 className="title margin-top">
                            {event.name}
                        </h2>

                        <div className="columns reverse">
                            <div className="column">
                                <h3 className="subtitle">{event.name} とは</h3>
                                <p>
                                    {event.desc1}
                                </p>
                                <p className="margin-top">
                                    {event.desc2}
                                </p>
                            </div>
                            <div className="column">
                                <figure className="image is-5by3">
                                    <img className="border-radius" src={event.image} alt={event.names} />
                                </figure>
                            </div>
                        </div>

                        <ButtonEx
                            href={event.link}
                            text="詳細はコチラ"
                        />
                        
                    </div>
                </section>

            ))}

            
        </Layout>

    )
}

export default Feb