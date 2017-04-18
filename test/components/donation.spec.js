import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import Donation from '../../public/lib/components/Donation'

describe('Donation', () => {
  const fetchData = sinon.spy()
  it('should have a state of title that is an empty string', () => {
    const wrapper = shallow(<Donation/>)
    expect(wrapper.state().first).to.deep.equal('');
  });
  it('should have a state of name that is an empty string', () => {
    const wrapper = shallow(<Donation/>)
    expect(wrapper.state().last).to.deep.equal('');
  });
  it('should have a state of location that is an empty string', () => {
    const wrapper = shallow(<Donation/>)
    expect(wrapper.state().email).to.deep.equal('');
  });
  it('should have a state of location that is an empty string', () => {
    const wrapper = shallow(<Donation/>)
    expect(wrapper.state().donation).to.deep.equal('');
  });
});
