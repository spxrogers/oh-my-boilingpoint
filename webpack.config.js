const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
        ]
    }
}
