import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import { withPrefix } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

//


const TemplateWrapper = ({ children }) => {
  const intl = useIntl()
  //const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        
        <html />
        <title>{intl.formatMessage({ id: "title" })}</title>
        <meta name="description" content={intl.formatMessage({ id: "description" })} />
        <link rel="alternate" hreflang="ja" href="https://www.ss-guesthouse.com/" />
        <link rel="alternate" hreflang="en" href="https://www.ss-guesthouse.com//en/" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />
        
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={intl.formatMessage({ id: "title" })} />
        <meta property="og:url" content="https://www.ss-guesthouse.com/" />
        <meta
          property="og:image"
          content={`https://www.ss-guesthouse.com/img/og-image001.png`}
        />
        <meta name="google-site-verification" content="AtBXV62-NYJ_gWHW-q9hBGDC0iYSt3vkvl2r8lfcTac" />
        
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700|Noto+Sans+JP:400,700" rel="stylesheet" />

      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
