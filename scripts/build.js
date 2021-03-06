const rollup = require('rollup')
const { resolve } = require('path')
const fs = require('fs')
const config = require('./config')

async function build({ input, output }) {
  const bundle = await rollup.rollup(input)
  await bundle.write(output)
}

const promises = [build(config.mainConfig), build(config.rendererConfig)]

Promise.all(promises).catch(console.error)
