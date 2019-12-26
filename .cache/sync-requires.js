const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/templates/blog-post.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/templates/tags.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/pages/404.js"))),
  "component---src-pages-blog-index-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/pages/blog/index.js"))),
  "component---src-pages-calender-2020-jan-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/pages/calender/2020/Jan.js"))),
  "component---src-pages-calender-index-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/pages/calender/index.js"))),
  "component---src-pages-contact-file-upload-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/pages/contact/file-upload.js"))),
  "component---src-pages-contact-index-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/pages/contact/index.js"))),
  "component---src-pages-contact-thanks-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/pages/contact/thanks.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/pages/index.js"))),
  "component---src-pages-rooms-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/pages/rooms.js"))),
  "component---src-pages-tags-index-js": hot(preferDefault(require("/Users/Shinnosuke/Documents/batch5/ssi-guesthouse/src/pages/tags/index.js")))
}

