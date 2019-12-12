const pxToViewPort = require("postcss-px-to-viewport");
module.exports = {
    plugins: [
        pxToViewPort({
            viewportWidth: 720,
            unitPrecision: 5,
            viewportUnit: "vmin",
            fontViewportUnit: "vmin",
            // selectorBlackList: [],
        })
    ]
}