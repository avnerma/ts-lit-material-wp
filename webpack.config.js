const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts', // Entry point for TypeScript
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader', // Transpile TypeScript
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // Process CSS and inject into <style> tags
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // HTML template
            inject: true, // Automatically inject bundled JS and CSS into HTML
        }),
    ],
    output: {
        filename: 'bundle.js', // Webpack output bundle
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Clean output folder before each build
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        liveReload: true, // Enable live reload on file changes
        watchFiles: ['src/**/*.html', 'src/**/*.ts', 'src/**/*.css'], // Watch for file changes
        open: true, // Automatically open the browser
        hot: false, // Disable Hot Module Replacement (HMR)
    },
};
