/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `
        @import "./src/styles/mixins.scss";
        @import "./src/styles/unit.scss";
        @import "./src/styles/variables.scss";
        `,
    additionalData: `
        @import "./src/styles/mixins.scss";
        @import "./src/styles/unit.scss";
        @import "./src/styles/variables.scss";
        `,
  },
};

module.exports = nextConfig;
