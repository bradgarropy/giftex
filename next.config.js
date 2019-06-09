require("dotenv").config({
    path: ".env.build",
})

const withAssetRelocator = (nextConfig = {}) => {
    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            const {isServer} = options

            if (isServer) {
                config.node = Object.assign({}, config.node, {
                    __dirname: false,
                    __filename: false,
                })

                config.module.rules.unshift({
                    test: /\.(m?js|node)$/,
                    parser: {amd: false},
                    use: {
                        loader: "@zeit/webpack-asset-relocator-loader",
                        options: {
                            outputAssetBase: "assets",
                            existingAssetNames: [],
                            wrapperCompatibility: true,
                            production: true,
                        },
                    },
                })
            }

            if (typeof nextConfig.webpack === "function") {
                return nextConfig.webpack(config, options)
            }

            return config
        },
    })
}

const config = {
    target: "serverless",
    env: {
        firebase: {
            apiKey: process.env.FIREBASE_API_KEY,
            projectId: process.env.FIREBASE_PROJECT_ID,
            senderId: process.env.FIREBASE_SENDER_ID,
            appId: process.env.FIREBASE_APP_ID,
        },
    },
}

module.exports = withAssetRelocator(config)
