'use strict'

function greet(name = 'world') {
  return `hello ${name}`
}

if (require.main === module) {
  console.log(greet(process.env.NAME || 'github-actions-demo'))
}

module.exports = { greet }
