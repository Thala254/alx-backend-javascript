const { expect } = require('chai');
const  { spy } = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const spyfunc = spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(spyfunc.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spyfunc.calculateNumber.callCount).to.be.equal(1);
    spyfunc.calculateNumber.restore();
  });
});
