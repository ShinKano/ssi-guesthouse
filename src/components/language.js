import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  ja: "Japanese",
  en: "English",
}

const Language = () => {
  return (
    <div
        style={{
            display: "flex",
            alignItems: "center",
        }}
    >
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `crimson` : `darkgray`,
                textDecoration: currentLocale === language ? `underline` : `none`,
                cursor: `pointer`,
                margin: 10,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language