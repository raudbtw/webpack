const DEV = 'development'
const PROD = 'prodaction'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let mode = DEV


console.log(mode,' env')

if(process.env.NODE_ENV === PROD){
    mode = PROD
}

module.exports = {
    mode:mode,
    output:{
        clean:true,
        assetModuleFilename:"assets/[hash][ext][query]",
    },
    plugins:[
        new MiniCssExtractPlugin({filename:'[name].[contenthash].css'}),
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    module:{
        rules:[
            {
            test:/\.html$/i,
            loader:"html-loader",
        },
        {
            test:/\.(sa|sc|c)ss$/,
            use:[
                mode === DEV ? 'style-loader':MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader:"postcss-loader",
                    options:{
                        postcssOptions:{
                            plugins:[
                                [
                                    "postcss-preset-env"
                                ]
                            ]
                        }
                    }
                },
                "sass-loader",
            ],
        },
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
        },
        {
            test:/\.(woff|woff2|eot|ttf|otf)$/i,
            type:"asset/resource"
        },
        {
            test:/\.m?js$/,
            exclude:/node_modules/,
            use:{
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-env"]
                }
            }
        }
    ]
    }
};