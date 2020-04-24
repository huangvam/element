const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  devServer: {
    // can be overwritten by process.env.HOST
    host: '0.0.0.0',
    port: 10086
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'));
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          icon: './public/Start_icon.ico'
        },
        mac: {
          icon: './public/Start_icon.ico'
        },
        productName: '咕咕',
        "nsis": {
          "oneClick": false,
          "allowToChangeInstallationDirectory": true,
          "perMachine": true,
          "installerIcon": "./public/Start_icon.ico",
          "installerHeaderIcon": "./public/Start_icon.ico",
        }
      }
    }
  }
};
