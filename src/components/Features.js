import React from 'react'
//
import about from '../img/bg-1.jpg'
import food from '../img/food.jpg'
import guests from '../img/guests.jpg'
import eop from '../img/eop.jpg'
import lesson from '../img/lesson.jpg'
import activity from '../img/activity.jpg'
import moterbike from '../img/moterbike.jpg'


const Features = () => {

    const features = [
        {title: 'レンタルバイク', 
         desc : '便利なスクーターの貸し出しサービスが利用可能。フィリピン・セブ島の街をすみずみまで探検してみましょう。',
         image: moterbike},
        
        {title: '食事サービス', 
         desc : 'ご希望の方にはランチやディナーを1食100ペソでご用意します。格安でセブ島のローカル料理をご堪能ください。',
         image: food},
        
        {title: '英語レッスン', 
         desc : '語学学校が運営するゲストハウスなので、英語レッスンも受けられます。1レッスン350ペソ〜で発音矯正も。',
         image: lesson},
        
        {title: '週末ツアー', 
         desc : 'ツアーを不定期開催しています。ジンベイサメと泳いだり、滝に飛び込んだりセブのアクティビティを満喫！',
         image: activity},
        
        {title: '人気のEOP', 
         desc : '2つのハウスのうち１つは英語オンリー。国籍に関わらず全ての人が英語で喋るので、国際交流にピッタリです。',
         image: eop},
        
        {title: '色々な国のゲスト', 
         desc : 'ゲスト同士での交流や学び合いも盛んです。色々な国のゲストとランゲージエクスチェンジもできちゃいます。',
         image: guests},
    ];

    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <h2 className="title has-text-centered">
                            <span className="inline-block">ストーリーシェアの</span>
                            <span className="inline-block">特別なサービス</span>
                        </h2>
                    </div>
                </div>

                <div className="columns is-multiline">

                    {features.map(feature => (
                        <div className="column is-one-third" key={feature.title}>
                            <div className="card border-radius">
                                <div className="card-image">
                                    <figure className="image is-2by1">
                                        <img className="border-radius" src={feature.image} alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4 has-text-centered">{feature.title}</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        {feature.desc}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    

                </div>
            </div>
        </section>
    )
}

export default Features