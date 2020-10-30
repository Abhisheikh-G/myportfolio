const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
});

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
