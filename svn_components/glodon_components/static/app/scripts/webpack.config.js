var path = require('path');

module.exports = {
    entry: {
        app: './app.js',
        login: './login.js'
    },
    output: {
        path: './build',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
           {
               test: /\.js$/,
               loader: 'babel',
               exclude: /(node_modules)/,
               query: {
                    presets: ['babel-preset-react', 'babel-preset-es2015']
               }
           }
        ]
    }
};