const modB = require('./B')

const a = 2

console.log(a + modB.bVal)

module.exports.aVal = a + modB.bVal


console.log(a + modB.bVal)
