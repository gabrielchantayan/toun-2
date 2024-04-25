import React from 'react';
import LanguageSelection from './LanguageSelection';
import SearchOptions from '../SearchOptions';
import ThemeButtonSection from './ThemeButtonSection';

export default function ModalOptions() {
	return (
		<div id='modalBody'>
			<ThemeButtonSection />
			<SearchOptions />
			<LanguageSelection />
		</div>
	);
}
