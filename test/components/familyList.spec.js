import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import FamilyList from '../../public/lib/components/FamilyList'

describe('FamilyList', () => {
  it('renders a div', function() {
  expect(shallow(<FamilyList />).contains(<div/>)).to.equal(true);
  });
});
