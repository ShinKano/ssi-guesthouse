import React from 'react'
//import { Link } from 'gatsby'
import { Link, FormattedMessage } from "gatsby-plugin-intl"
//
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-classic-blue has-text-white-ter">
        
        <div className="content has-text-centered has-background-classic-blue has-text-white-ter">
          <div className="container has-background-classic-blue color-white">
            <div 
                className="columns"
                style={{
                    marginRight: '0rem',
                }}
            >
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item footer-item">
                        <FormattedMessage id="home" />
                      </Link>
                    </li>
                    
                    {/* <li>
                      <a
                        className="navbar-item footer-item"
                        href="/calender"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FormattedMessage id="nav03" />
                      </a>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item footer-item" to="/blog">
                        <FormattedMessage id="nav02" />
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item footer-item" to="/contact">
                        <FormattedMessage id="book" />
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social margin-top-2">
                <a title="facebook" href="https://www.facebook.com/StoryShare/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/ssistaff">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/daily_english_for_you/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
