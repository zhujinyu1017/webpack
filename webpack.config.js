/**
 * Created by zhujinyu on 2017/5/22.
 */
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var webpack = require("webpack");
console.log(APP_PATH);
module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: {
        index:'./app/index.js',
        second:['./app/bb.js','./app/cc.js'],
        three:['./app/cc.js'],
        server:['./app/server/server.js'],
        base:['./app/main.css','./app/main1.css'],
        maintest:['./app/maintest.scss','./app/test.scss']

    },
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                // test: /\.css$/,
                // loaders:'style-loader!css-loader'
                test: /\.css$/,
                // loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                loader:   ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })

            },
            // { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', "css!sass")},
            {
                test: /\.scss$/,
                loader:   ExtractTextPlugin.extract({fallback:'style-loader',use: "css-loader!sass-loader"}),
                // loaders: 'style-loader!css-loader!sass-loader',
                include: APP_PATH
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader??limit=40000'
            }
        ]
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new HtmlwebpackPlugin({
            title: 'hello  World app1',
            filename:'./index.html',
            chunks: ['index'],
            inject:'true',
            hasg:'true',
            minify:{
                removeComments:false,
                collapseWhitespace:false
            }
        }),
        new HtmlwebpackPlugin({
            title: 'hello  World app2',
            filename:'./index1.html',
            chunks: ['second'],
            inject:'true',
            hasg:'true',
            minify:{
                removeComments:false,
                collapseWhitespace:false
            }
        }),
        new HtmlwebpackPlugin({
            title: 'hello  World app3',
            filename:'./index3.html',
            chunks: ['three'],
            inject:'true',
            hasg:'true',
            minify:{
                removeComments:false,
                collapseWhitespace:false
            }
        }),
        new HtmlwebpackPlugin({
            title: 'hello  World app4',
            filename:'./index4.html',
            chunks: ['server'],
            inject:'true',
            hasg:'true',
            minify:{
                removeComments:false,
                collapseWhitespace:false
            }
        }),
        new HtmlwebpackPlugin({
            title: 'hello  World app5',
            filename:'./view/index5.html',
            chunks: ['server'],
            inject:'true',
            hasg:'true',
            minify:{
                removeComments:false,
                collapseWhitespace:false
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css'),
        new ExtractTextPlugin('maintest.css')
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        // progress: true,
    }
};