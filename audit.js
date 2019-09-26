
const old = '2019/09/15.json.br'
const prob = '2019/09/21.json.br'
const { readFileSync } = require('fs')
const { brotliDecompressSync } = require('zlib')
const parse = s => JSON.parse(brotliDecompressSync(readFileSync(s)))

const test = [parse(old), parse(prob)]

Object.keys(test[0]).forEach(k => console.log(0, k))
Object.keys(test[1]).forEach(k => console.log(1, k))
