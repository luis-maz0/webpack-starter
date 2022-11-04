
//Importamos el htmlwebpackplugin. 
const HtmlWebpackPlugin = require("html-webpack-plugin"); 
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    //Establecemos el modo de desarrollo. 
    //Se ve reflejado en el dist/main.js
    mode:"development",
    
    //Limpiamos el output(dist) cada vez que hacemos el build.
    output:{
        clean:true
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
        }]
    },
    optimization:{},
    plugins:[
        //Configuramos como queremos que sea nuestro HTML que irá en dist. 
        new HtmlWebpackPlugin({
            title : "Mi webpack app",
            filename:"index.html",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename:"[name].css",
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