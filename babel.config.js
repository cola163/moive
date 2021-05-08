module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  //从vant文档复制的
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
