
//Importamos el htmlwebpackplugin. 
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizer = require("css-minimizer-webpack-plugin");
const Terser = require ("terser-webpack-plugin"); 

module.exports = {
    //Establecemos el modo de desarrollo. 
    //Se ve reflejado en el dist/main.js
    mode:"production",
    
    //Limpiamos el output(dist) cada vez que hacemos el build.
    output:{
        clean:true,
        filename: "main.[contenthash].js"
    },
    
    module:{
        //Apunto mis archivos html.
        rules:[{
        
            //Usamos expresiones regulares
            test: /\.html$/,
            loader: "html-loader",
            options:{
                sources: false
            }
        },{
            test:/\.css$/,
            exclude:/style\.css$/,
            use:["style-loader","css-loader"]
        },{
            test:/style\.css$/,
            use:[MiniCssExtractPlugin.loader, "css-loader"],
        },{
            test:/\.(png|jpe?g|gif)$/,
            loader:"file-loader",
            options:{
                name: "[name].[ext]"
            }
        },{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
             }
        }
    ]
    },
    optimization:{
        minimize: true,
        minimizer:[
            new CssMinimizer(),
            new Terser()
        ]
    },
    plugins:[
        //Configuramos como queremos que sea nuestro HTML que irá en dist. 
        new HtmlWebpackPlugin({
            title : "Mi webpack app",
            filename:"index.html",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"[name].[fullhash].css",
            //ignoramos el orden de importanciones de css
            ignoreOrder:false
        }),
        new CopyPlugin({
            patterns: [
                {from: "src/assets/",to:"assets"} 
            ]
        }) 
    ],
}