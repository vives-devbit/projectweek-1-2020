module.exports = {
  title: 'Projectweek 2020',
  description: 'Projectweek 2020',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Toledo', link: 'https://www.vives.be/en/tools/toledo' },
      { text: 'License', link: '/LICENSE.md' },
    ],
    sidebar: [
      ['/', 'Home']
    ],
    repo: 'https://github.com/vives-devbit/projectweek-1-2020',
    docsDir: 'src',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}