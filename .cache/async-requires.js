// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": () => import("../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-templates-tags-js": () => import("../src/templates/tags.js" /* webpackChunkName: "component---src-templates-tags-js" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-blog-index-js": () => import("../src/pages/blog/index.js" /* webpackChunkName: "component---src-pages-blog-index-js" */),
  "component---src-pages-contact-file-upload-js": () => import("../src/pages/contact/file-upload.js" /* webpackChunkName: "component---src-pages-contact-file-upload-js" */),
  "component---src-pages-contact-index-js": () => import("../src/pages/contact/index.js" /* webpackChunkName: "component---src-pages-contact-index-js" */),
  "component---src-pages-contact-thanks-js": () => import("../src/pages/contact/thanks.js" /* webpackChunkName: "component---src-pages-contact-thanks-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-tags-index-js": () => import("../src/pages/tags/index.js" /* webpackChunkName: "component---src-pages-tags-index-js" */)
}

