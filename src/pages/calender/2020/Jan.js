import React from 'react'
//
import Layout from '../../../components/Layout'
import ButtonEx from '../../../elements/ButtonEx'
//
import sinulog01 from '../../../img/calender/sinulog01.jpg'
import beachfes from '../../../img/calender/beachfes.jpg'
import tatto from '../../../img/calender/tatto.png'
import hydroCebu from '../../../img/calender/hydro-cebu.jpg'
import marathon from '../../../img/calender/marathon.jpg'



const Jan = () => {

    const events = [
        {
            name: "セブ シティマラソン",
            date: "1/10",
            desc1: "セブ シティマラソン（Cebu City Marathon）はセブで行われる新春マラソン大会です。5kmのビギナー向けラン、ハーフマラソン、フルマラソンの３つの部があります。",
            desc2: "マラソンは長年、毎年の恒例イベントとなっていて、日本のマラソン大会と同じくExpoの催しもあります。登録は以下リンク先のセブマラソン公式サイトから。",
            image: marathon,
            link: "https://worldsmarathons.com/marathon/cebu-marathon"
        },
        {
            name: "Party In Paradise Tattoo Expo",
            date: "1/10~1/12",
            desc1: "セブ タトゥー博覧会は、セブで年に一度のタトゥーイベントです。タトゥーアーティストが多数参加し、その技術を一同にお披露目します。もちろん、観覧のみの一般客も参加可能です。",
            desc2: "会場はSMセブ内のTrade Hollです。入場料が必要なのでご注意ください。入場料は300ペソとなっています。",
            image: tatto,
            link: "http://partyinparadisetattooexpo.com/ticket-infomation.html"
        },
        {
            name: "Hydro Cebu Music Festival",
            date: "1/17~1/18",
            desc1: "「La Plage Club」で行われる最大級のプールパーティです。最高ののDJ、著名なアーティストたちが集結し、夜までぶち上げます。",
            desc2: "",
            image: hydroCebu,
            link: "https://www.facebook.com/events/413064389632034/?active_tab=discussion"
        },
        {
            name: "シヌログ祭",
            date: "1/17~1/19",
            desc1: "「サントニーニョ」と呼ばれる、子供の姿をしたキリストを称えてお祝いをするお祭りです。サントニーニョ像は大航海時代にマゼランがセブ島に上陸した際、当時のセブ王へ贈ったものとされています。",
            desc2: "シヌログ祭では、パレードや出店が通りを埋め尽くし、豪華展覧なダンスや、ド派手なパフォーマンスがストリートを埋め尽くします。キリスト教が広く普及しているセブの年に1度のビッグイベントです！",
            image: sinulog01,
            link: "https://www.ss-guesthouse.com/blog/2019-12-28-%E3%82%B7%E3%83%8C%E3%83%AD%E3%82%B0%E7%A5%AD%E3%81%A8%E3%81%AF%EF%BC%9F2020%E3%81%AE%E5%85%A8%E6%97%A5%E7%A8%8B%E3%83%BB%E3%82%B9%E3%82%B1%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AF%E3%82%B3%E3%83%81%E3%83%A9%EF%BC%81%E3%80%90sinulog2020%E3%80%91/"
        },
        {
            name: "Cebu International Beach Festival",
            date: "1/24~1/26",
            desc1: "マクタン島で行われるダンスフェス！３日間に渡って、国内外のアーティストやDJ、ダンサーが多数集結し、海、青空、太陽の下でパフォーマンスするなど、様々なイベントが目白押し！",
            desc2: "ビーチフェスでは、ダンスパーティーや様々なワークショップ、プールパーティーなども行われるので、気になるイベントは要チェック。以下のリンクから公式のFacebookページへ移動できます。",
            image: beachfes,
            link: "https://p-upload.facebook.com/CebuBeachFestival/"
        },
        
    ];

    return(
        <Layout>
            <section className="section has-background-classic-blue">
                <div className="container">
                    <div className="full-height align-items-center">
                        <h1 className="title color-white has-text-centered">
                            【2020年1月】セブ島イベントカレンダー
                        </h1>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="columns is-centered margin-top-2">
                        <div className="column is-8">
                            <p className="is-size-6 margin-bottom">
                                2020年1月に予定されているセブ島のお祭りやイベント情報をまとめています。
                                <br /><br />
                                年末年始を含む1月はニューイヤー花火、シヌログ祭り、バザー、マラソンなど、
                                参加したいイベントが盛りだくさん！
                                お祭り好きなフィリピン人も大盛り上がりのカレンダーになっています。
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

export default Jan