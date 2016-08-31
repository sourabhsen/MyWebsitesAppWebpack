var webpack = require('webpack');
var htmlwebplugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/main.ts',
    output:{
        path:'dist',
        filename:'app.bundle.js'
    },

    module:{
        loaders:[
            {test: /\.ts$/, loader: 'ts'},
            {
                test: /\.html$/,
                loader: 'html'
            }

        ]
    },
    resolve:{
        extensions:['','.js','.ts']
    },
    plugins:[
        new htmlwebplugin({
            template:'./src/index.html'
        })
    ]

}