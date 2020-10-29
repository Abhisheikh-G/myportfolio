const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
  },
});

module.exports = {
  env: {
    API_URL: "https://agill-portfolio.herokuapp.com/",
  },
};
