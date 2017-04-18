import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import Basics from '../../public/lib/components/Basics'

describe('Basics', () => {
  const fakeArray = { favorites: [{ key: 'val' }, { twokey: 'twoval' }, { threekey: 'threeval' }] }
  const fakeMovies = { movies: [{ key: 'val' }, { popularMovies: ['movie1', 'movie2', 'movie3'] }, { threekey: 'threeval' }] }
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
});
