const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
});

const IMAGE_CONFIG = {};

const ENV_CONFIG = {
  env: {
    API_URL: "https://agill-portfolio.herokuapp.com",
  },
};

module.exports = {
  ENV_CONFIG,
  images: {
    domains: [
      "https://agill-portfolio.herokuapp.com/",
      "agill-portfolio.herokuapp.com",
      "https://agill-portfolio.herokuapp.com/photos",
    ],
  },
};
