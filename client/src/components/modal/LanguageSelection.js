import React, { useEffect } from 'react';
import { getLocales, t, tNoBracket } from '../../assets/js/locale';
import ThemeButton from './ThemeButton';
import themes from '../../assets/styles/themes.json';

export default function LanguageSelection(props) {
	let selectedLang = localStorage.getItem('locale') || 'en-US';
	let localeList = getLocales();
	let localeSelect = [];

	for (const [locale, name] of Object.entries(localeList)) {
		localeSelect.push(<option value={locale}>{name}</option>);
	}

	const handleLanguageChange = (e) => {
		localStorage.setItem('locale', e.target.value);
		window.location.reload();
	};

	return (
		<div className='halfWidth'>
			<h1 className='modalSectionHeader'>{t('langSettings')}</h1>
			<select onChange={handleLanguageChange} defaultValue={selectedLang} id='themeButtonSection'>
				{localeSelect}
			</select>
		</div>
	);
}
