const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')

module.exports = withTypescript(withSass({
    distDir: 'build',
    webpack(config, options) {
        // Further custom configuration here
        config.module.rules.push( {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
                {
                    loader: 'file-loader'
                }
            ]
        })
        return config
    }
}))