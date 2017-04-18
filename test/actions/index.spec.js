import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';
import sinon from 'sinon'
import * as actions from '../../public/lib/actions/index'

describe('actions', () => {
  it('should create an action to make an array of featured families', () => {
    const featured = { somejson: 'somejson', somemorejson: 'somemorejson' }
    const expectedAction = {
      type: 'FEATURED',
      featured: { somejson: 'somejson', somemorejson: 'somemorejson' },
    }
    expect(actions.featured(featured)).to.deep.equal(expectedAction)
  })
  // ^^ Should this test be more specific?
  it('should create an action for a user to sign in', () => {
    const email = 'jim@aol.com'
    const password = 'password'
    const user = 'jim'
    const expectedAction = {
      data: 'j',
      type: 'SIGN_IN',
    }
    expect(actions.signIn(email, password, user)).to.deep.equal(expectedAction)
  })
  it('should create an action for a user to sign out', () => {
    const email = 'jim@aol.com'
    const password = 'password'
    const user = 'jim'
    const expectedAction = {
      data: 'jim@aol.com',
      type: 'SIGN_OUT',
    }
    expect(actions.signOut(email, password, user)).to.deep.equal(expectedAction)
  })
  it('should create an action for a user to search a family', () => {
    const searchedFamily = { somejson: 'somejson', somemorejson: 'somemorejson' }
    const expectedAction = {
      type: 'SEARCHED',
      searchedFamily: { somejson: 'somejson', somemorejson: 'somemorejson' },
    }
    expect(actions.searched(searchedFamily)).to.deep.equal(expectedAction)
  })
})
