const chai = require('../node_modules/chai/chai');
const expect = chai.expect;
const Util = require('../src/index')
describe("test module src/index.js", function () {
  it("should return a number type", function () {
    let sum = Util.sum(30, 5);
    expect(sum).to.be.a('number');
    sum = Util.sum(-30, 5);
    expect(sum).to.be.a('number');
  });
});