const path = require('path');
module.exports ={
  entry:'./src/app/main.js',
  output: {
    path: path.join(__dirname,'src/public/js'),
    filename:'bundle.js'
  },
  
  module: {
    rules:[
      { 
        enforce: 'pre',
        test: /\.(js|vue)$/, 
        exclude: /node_modules/, 
        //loader: "babel-loader" ,
        use: ['babel-loader', 'eslint-loader']
      },
    ],
    loaders: [
      {
          test: /\.vue$/,
          exclude: /node_modules/,
          use: {
            loader: 'vue-loader'
          }
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
    ],
  },
}