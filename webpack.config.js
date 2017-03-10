const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const BUILD_TARGET = process.env.npm_lifecycle_event;
const paths = {
    build: path.join(__dirname, 'public'),
    entry: path.join(__dirname, 'src/index.js'),
};

const plugins = [
    new HtmlWebpackPlugin({
        title: 'GraphQL-boilerplate',
        template: 'src/index.ejs', // Load a custom template
        inject: 'body', // Inject all scripts into the body
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        },
    }),
];

const devServerConfig = {
    port: 8081,
    // webpack-dev-server options
    hot: true,
    // Enable special support for Hot Module Replacement
    // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
    // Use "webpack/hot/dev-server" as additional module in your entry point
    // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

    // Set this as true if you want to access dev server from arbitrary url.
    // This is handy if you are using a html5 router.
    historyApiFallback: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
    },
    stats: {
        colors: true,
    },
    noInfo: false,
    quiet: false,
};

// set common configuration options that can be overridden by the CLI flags
const common = {
    // configuration
    entry: paths.entry,
    output: {
        path: paths.build,
        publicPath: '',
        filename: '[name].[hash].js',
    },
    resolve: {
        extensions: ['', '.js'],
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
        ],
    },
    cache: {},
    packageCache: {},
    plugins,
};

// Default configuration
if (BUILD_TARGET === 'start' || !BUILD_TARGET) {
    module.exports = Object.assign(common, {
        debug: 'verbose',
        devtool: 'eval',
        devServer: devServerConfig,
    });
}

// Production configuration
if (BUILD_TARGET === 'build') {
    module.exports = Object.assign(common, {
        plugins: [...plugins,
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
        ],
        devtool: 'cheap-module-source-map',
    });
}
