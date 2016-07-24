/*
 * Helper: root(), and rootDir() are defined at the bottom
 */
var path = require('path');

// Webpack Plugins
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const autoprefixer = require('autoprefixer');

// Meta data
var metadata = {
    title: 'Blocklevel',
    host: 'localhost',
    port: 8080,
    ENV: ENV
};

/*
 * Config
 */
module.exports = {
    // static data for index.html
    metadata: metadata,
    // for faster builds use 'eval'
    devtool: 'source-map', //to point console errors to ts files instead of compiled js
    debug: true,

    entry: [
        './src/main.ts' //app main file
    ],

    // Config for our build files
    output: {
        path: root('dist'),
        outputPath: root(),
        filename: '[name][hash].bundle.js',
        sourceMapFilename: '[name][hash].map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        // ensure loader extensions match
        root: root(),
        extensions: ['', '.ts', '.js', '.json', '.css', '.scss', '.sass', '.html', 'png', 'jpg', 'jpeg', 'gif', 'svg'],
        fallback: [path.join(__dirname, './node_modules')],
        alias: {
            'asset': root('/src/asset/')
        }
    },

    resolveLoader: {
        fallback: [path.join(__dirname, './node_modules')]
    },

    module: {
        loaders: [
            // Support for .ts files.
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: [/\.(spec|e2e)\.ts$/]
            },

            // support for *.json files.
            { test: /\.json$/, loader: 'json-loader' },

            // support for CSS as raw text
            { test: /\.css$/, loaders: ['style', 'css'] },
            { test: /\.(scss|sass)$/, loaders: ['style', 'css', 'sass'] },

            // support for .html as raw text
            { test: /\.html$/, loader: 'vue-html-loader', exclude: [ root('src/index.html') ] },

            // images
            { test: /\.(jpe?g|gif|svg)$/i, loader: 'file-loader?name=img/img-[hash:6].[ext]' },
            { test: /\.png$/, loader: "url-loader?limit=10000" },

            // fonts
            { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url-loader?name=font/[name].[ext]' }
        ]
    },

    postcss: [autoprefixer], // <--- postcss

    plugins: [
        // clear dist folder
        new CleanWebpackPlugin(['dist'], {
            root: root(),
            verbose: true,
            dry: false
        }),

        new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', minChunks: Infinity }),

        // static assets
        new CopyWebpackPlugin([{ from: 'src/asset', to: 'asset' }]),

        // generating html
        new HtmlWebpackPlugin({ template: 'src/index.html' }),

        // replace
        new DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(metadata.ENV),
                'NODE_ENV': JSON.stringify(metadata.ENV)
            }
        }),

        //Make jquery and Vue globally available without the need to import them
        new ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            Vue: 'vue',
            TweenMax: 'gsap',
            TimelineMax: 'gsap'
        })
    ],

    vue: {
        root: root()
    },


    // our Webpack Development Server config
    devServer: {
        port: metadata.port,
        host: metadata.host,
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 }
    }
};

// Helper functions
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}

function rootNode(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return root.apply(path, ['node_modules'].concat(args));
}
