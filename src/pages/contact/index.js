import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>ご予約・お問い合わせ</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    お名前
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    チェックイン希望日（ご予約の場合）
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'date'}
                      name={'checkin'}
                      onChange={this.handleChange}
                      id={'checkin'}
                      required={false}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    チェックアウト希望日（ご予約の場合）
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'date'}
                      name={'checkout'}
                      onChange={this.handleChange}
                      id={'checkout'}
                      required={false}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    宿泊する人数（ご予約の場合）
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'number'}
                      name={'people'}
                      onChange={this.handleChange}
                      id={'people'}
                      required={false}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    お問い合わせ内容
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                      placeholder="予約したい / 空き状況の確認がしたい etc..."
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-link" type="submit">
                    送信！
                  </button>
                </div>
              </form>
              
              <p className="margin-top-2">
                上記のお問い合わせボタンより、お気軽にお問い合わせください。
                スタッフがあなたのご質問、ご要望にお答えします。 
                <br /><br />
                ※フィリピンの祝祭日、土日以外、通常24時間以内にお返事しております。
                <br />
                ※携帯メールの場合、ご返事をお届けできないケースが増えておりますので、できるだけPCメールをご入力ください。
                <br />
                ※もし24時間たっても返信がない場合は、こちらのメールが届かない状態になっている可能性があります。
                <br />
                ※メールの設定が拒否設定になっていないか、再度ご確認ください。
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}