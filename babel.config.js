/* eslint-disable semi */
/* eslint-disable comma-dangle */
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  ignore: [
    '**/*.test.ts'
  ]
}
