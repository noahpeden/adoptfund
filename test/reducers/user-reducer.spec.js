import { expect, assert } from 'chai'
import user from '../../public/lib/reducers/user-reducer'


describe('user reducer', () => {
  it('should return state when someone signs in', () => {
    const action = {
      type: 'SIGN_IN',
      password: 'alligator',
      email: 'lauren@gmail.com',
    }
    expect(user(undefined, action)).to.deep.equal({
      email: 'lauren@gmail.com',
      password: 'alligator',});
  });

  // it('SIGN_IN should change the initial state', () => {
  //   const action = {
  //     user: {
  //       user: [user]
  //     },
  //   }
  //   expect(user(undefined, action)).to.deep.equal({ user: { user } })
  // });
});
