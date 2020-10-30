const withPWA = require("next-pwa");

const PWA_CONFIG = withPWA({
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
  PWA_CONFIG,
  ENV_CONFIG,
  images: {
    domains: [
      "https://agill-portfolio.herokuapp.com/",
      "agill-portfolio.herokuapp.com",
      "https://agill-portfolio.herokuapp.com/photos",
    ],
  },
};
