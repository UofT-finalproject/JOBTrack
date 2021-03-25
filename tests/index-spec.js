/* eslint-disable */
require("mocha");

const expect = require('chai').expect;
const server = require('../server');

console.log('running test: against server.js');

describe('title: Simple test', () => {
  it('this simple test checks the string', () => {
    expect('Test CI with Travis.' ).to.equal('Test CI with Travis.');
  });
});
