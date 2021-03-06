const webpack = require('webpack');

module.exports = {
    entry: __dirname+'/get.js',
    output: {
        filename: 'bundle.js'
    },
    module:{
        loaders:[{
            test:/\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query:{
                presets:['es2015', 'es2016']
            }
        }]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compressor:{
                warnings: false
            }
        })
    ],
    devServer:{
        inline: true,
        port: 9999,
        contentBase: __dirname,
        historyApiFallback: true
    }
};
