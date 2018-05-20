module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'dev-tools',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'dev-tools' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#2d8cf0' },
  /**
   * 全局样式
   */
  css: [{
    src: 'assets/sass/style.scss',
    lang: 'sass?indentedSyntax=true'
  }, {
    src: 'iview/dist/styles/iview.css'
  }],
  /**
   * 插件
   */
  plugins: [{
    src: '~plugins/iview.js',
    ssr: true
  }],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
