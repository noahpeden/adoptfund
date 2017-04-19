import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { storeFake } from '../fakeData/storeFake';
import DonationContainer from '../../public/lib/containers/DonationContainer';
import Donation from '../../public/lib/components/Donation';

describe('DonationContainer', () => {
	let Component;
	let DonationComponent;

	beforeEach(() => {
		const store = storeFake({});

		const wrapper = mount(
			<Provider store={store}>
				<DonationContainer />
			</Provider>
		);

		Component = wrapper.find(DonationContainer);
		DonationComponent = Component.find(Donation);
	});
	
	it('should render', () => {
		expect(Component.length).toBeTruthy();
		expect(DonationComponent.length).toBeTruthy();
	});
});
