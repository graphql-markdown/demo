module.exports = {
  schema: "https://api.spacex.land/graphql/",
  rootPath: "./docs",
  baseURL: "/",
  homepage: "static/index.md",
  loaders: {
    UrlLoader: "@graphql-tools/url-loader"
  }
};
