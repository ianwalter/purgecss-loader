# @ianwalter/purgecss-loader
> [Purgecss][purgeCssUrl] loader for [Webpack][webpackUrl]

## Installation

```console
yarn add @ianwalter/purgecss-loader --dev
```

## Usage

Here is an example of how to use the loader in a Webpack configuration with
Vue.js Single File Components:

```js
{
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          {
            loader: '@ianwalter/purgecss-loader',
            options: {
              content: [
                path.join(__dirname, 'src/components/**/*.vue')
              ],
              whitelistPatterns: [
                /alert/
              ]
            }
          }
        ]
      }
    ]
  }
}
```

[purgeCssUrl]: https://www.purgecss.com
[webpackUrl]: https://webpack.js.org
