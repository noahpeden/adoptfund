import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import HeroSection from '../../public/lib/components/HeroSection'
import Button from '../../public/lib/components/Button'

describe('HeroSection', () => {
  it('should show title "Adopt Fund"', () => {
    const wrapper = shallow(<HeroSection />);
    expect(wrapper.find('h1').text()).to.equal('Adopt Fund');
  });

  it('should have a handleClick', () => {
    const handleClick = sinon.spy()
    const wrapper = shallow(<Button handleClick={handleClick} />)
    wrapper.find('button').simulate('click');
    expect(handleClick.calledOnce).to.equal(true)
  });

  it('should trigger "click"', () => {
    const click = sinon.spy()
    const wrapper = mount(<Button handleClick={click} />)
    wrapper.simulate('click')
    expect(click.calledOnce).to.equal(true)
  });

  it('should have a link', () => {
    const wrapper = shallow(<HeroSection />);
    expect(wrapper.find('Link').prop('to')).to.equal('/list');
  });
});
