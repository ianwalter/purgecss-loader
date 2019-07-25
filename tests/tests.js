const path = require('path')
const { test } = require('@ianwalter/bff')
const webpack = require('webpack')
const MemoryFileSystem = require('memory-fs')

test('loader removes unused CSS rules', ({ expect }) => {
  return new Promise(resolve => {
    const compiler = webpack({
      entry: path.join(__dirname, './fixtures/example.css'),
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: '@ianwalter/callback-loader',
                options: {
                  callback: function (content) {
                    expect(content).toMatchSnapshot()
                    resolve()
                  }
                }
              },
              {
                loader: path.join(__dirname, '../'),
                options: {
                  content: [path.join(__dirname, 'fixtures/example.html')]
                }
              }
            ]
          }
        ]
      }
    })
    compiler.outputFileSystem = new MemoryFileSystem()
    compiler.run()
  })
})
