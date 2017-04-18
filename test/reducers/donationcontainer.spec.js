import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { storeFake } from '../fakeData/storeFake';
import FamilyCardContainer from '../../public/lib/containers/FamilyCardContainer';
import FamilyCard from '../../public/lib/components/FamilyCard';

describe('FamilyCardContainer', () => {
	let Component;
	let FamilyCardComponent;

	beforeEach(() => {
		const store = storeFake({});

		const wrapper = mount(
			<Provider store={store}>
				<FamilyCardContainer />
			</Provider>
		);

		Component = wrapper.find(FamilyCardContainer);
		FamilyCardComponent = Component.find(FamilyCard);
	});

  it('should render the quiz with a quiz name from the quiz data', () => {
    expect(FamilyCardComponent.prop('quizName')).toBe(quizName)
  })

	it('should render', () => {
		expect(Component.length).toBeTruthy();
		expect(FamilyCardComponent.length).toBeTruthy();
	});
});
