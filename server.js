var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  //publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  var host = this.address().address;
  if (host === '::') {
    host = 'localhost';
  }
  var port = this.address().port;
  console.log('Listening at http://%s%s', host, port === 80 ? '' : ':' + port);
});
