module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-intl/gatsby-browser.js'),
      options: {"plugins":[],"path":"/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/intl","languages":["en","ja"],"defaultLanguage":"ja","redirect":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-83299337-3","head":true,"exclude":["/preview/**","/do-not-track/me/too/"],"pageTransitionDelay":0},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":2048},
    },{
      plugin: require('../node_modules/gatsby-plugin-netlify-cms/gatsby-browser.js'),
      options: {"plugins":[],"modulePath":"/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/cms/cms.js"},
    }]
