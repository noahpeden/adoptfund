import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import Basics from '../../public/lib/components/Basics'
import Button from '../../public/lib/components/Button'

describe('Basics', () => {
  const fetchData = sinon.spy()
  it('should have a state of title that is an empty string', () => {
    const wrapper = shallow(<Basics/>)
    expect(wrapper.state().title).to.deep.equal('');
  });

  it('should have a state of name that is an empty string', () => {
    const wrapper = shallow(<Basics/>)
    expect(wrapper.state().name).to.deep.equal('');
  });

  it('should have a state of location that is an empty string', () => {
    const wrapper = shallow(<Basics/>)
    expect(wrapper.state().location).to.deep.equal('');
  });

  it('should have a state of cost that is an empty string', () => {
    const wrapper = shallow(<Basics/>)
    expect(wrapper.state().cost).to.deep.equal('');
  });

  it('should have a state of story that is an empty string', () => {
    const wrapper = shallow(<Basics/>)
    expect(wrapper.state().story).to.deep.equal('');
  });

  it('should have a state of links that is an empty string', () => {
    const wrapper = shallow(<Basics/>)
    expect(wrapper.state().links).to.deep.equal('');
  });

  it('should have a state of expiration that is an empty string', () => {
    const wrapper = shallow(<Basics/>)
    expect(wrapper.state().expiration).to.deep.equal('');
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

  it('should have a handleClick', () => {
  const handleClick = sinon.spy()
  const wrapper = shallow(<Button handleClick={handleClick} />)
  wrapper.find('button').simulate('click');
  expect(handleClick.calledOnce).to.equal(true)
  });
});
