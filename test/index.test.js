'use strict'

const { describe, it } = require('node:test')
const assert = require('node:assert/strict')
const { greet } = require('../src/index.js')

describe('greet', () => {
  it('returns a greeting', () => {
    assert.equal(greet('ci'), 'hello ci')
  })
})
