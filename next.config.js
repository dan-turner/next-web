// eslint-disable-next-line @typescript-eslint/no-var-requires, unicorn/prefer-module
const { i18n } = require("./next-i18next.config");

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  reactStrictMode: true,
  i18n,
  images: {
    // eslint-disable-next-line i18next/no-literal-string
    domains: ["images.ctfassets.net"],
  },
};
