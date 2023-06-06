const concat = require("concat");
(async function build() {
  const files = [
    "dist/mfe2/main.js",
    "dist/mfe2/polyfills.js",
    "dist/mfe2/runtime.js",
  ];

  await concat(files, "cdn/mfe-two.js");
})();
