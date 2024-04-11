module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre",
                exclude: /node_modules\/@mediapipe\/tasks-vision/,
            },
        ],
    },
};