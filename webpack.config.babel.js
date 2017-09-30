import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    devtool: 'eval-source-map',
    entry: {
        client: path.join(__dirname, 'app/scripts/client.js')
    },
    output : {
        path: path.join(__dirname, 'public'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            styles: path.resolve(__dirname, 'app/styles'),
            components: path.resolve(__dirname, 'app/scripts/components'),
            scripts: path.resolve(__dirname, 'app/scripts')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                paths: [
                                    path.resolve(__dirname, 'app/styles')
                                ],
                            }
                        }]
                })
            }
        ],
    },
    plugins : [
        new ExtractTextPlugin({
            filename: "[name].css"
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: 'app/index.html',
            filename: 'index.html'
        })
    ],
    devServer : {
        port: 9000,
        historyApiFallback: true
    }
}