module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    "@csstools/postcss-oklab-function": {
      preserve: false,
      subFeatures: {
        displayP3: false,
      },
    },
    "postcss-preset-env": {
      stage: 1,
      browsers: ["last 2 versions", "not dead", "> 0.2%"],
      autoprefixer: {},
      features: {
        "cascade-layers": { preserve: false },
        "nesting-rules": { preserve: false },
        "color-functional-notation": true,
        "color-mix": true,
        "oklab-function": { preserve: false },
        "media-query-ranges": true,
        "custom-media-queries": true,
        "custom-properties": { preserve: true },
        "logical-properties-and-values": true,
        "dir-pseudo-class": true,
        "is-pseudo-class": true,
        "image-set-function": true,
        "clamp": true,
        "system-ui-font-family": true,
      },
    },
  },
};
