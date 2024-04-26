import React from 'react';
import CurrentLanguageSelection from './CurrentLanguageSelection';
import SearchOptions from '../SearchOptions';
import ThemeButtonSection from './ThemeButtonSection';

export default function ModalOptions() {
	return (
		<div id='modalBody'>
			<ThemeButtonSection />

			<div className='halfWidthContainer'>
				<SearchOptions />
				<CurrentLanguageSelection />
			</div>
		</div>
	);
}
