import React from 'react'
import Layout from '../../../components/Layout'
import styled from 'styled-components'
//
import sinulog01 from '../../../img/calender/sinulog01.jpg'


const Jan = () => {

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

            <section className="section">
                <div className="container">
                <span className="tag is-info is-large">1/2</span><br />
                    <h2 className="title margin-top">
                        
                        シヌログ祭
                    </h2>

                    <div className="columns reverse">
                        <div className="column">
                        もともと幼きイエス「サントニーニョ」を称えてお祝いを始めたのがお祭りの根源。サントニーニョ像は大航海時代にマゼランがセブ島に上陸した際、当時のセブ島の王様へ贈ったものとされています。
その後、戦時中にもかかわらずサントニーニョ像だけは被害を免れてきたことから、奇跡のシンボルとして人々に崇められています。

シヌログ祭では、現地の人たちがサントニーニョ像を模した人形を持って、パレードで行進、踊っている様子を見かけるでしょう。キリスト教信者が9割近くを占めるセブ島では、シヌログ祭は年に1度のビッグイベントなんです！
                        </div>
                        <div className="column">
                            <figure className="image is-5by3">
                                <img className="border-radius" src={sinulog01} alt="sinulog festival"/>
                            </figure>
                        </div>
                    </div>
                    
                </div>
            </section>
            
        </Layout>

    )
}

export default Jan