import React, { useEffect } from 'react';
import { t, tNoBracket } from '../assets/js/locale';
import ThemeButton from './modal/ThemeButton';
import themes from '../assets/styles/themes.json';

export default function SearchOptions() {
	let searchPrefixTable = [];

	// Get the prefix map from localStorage
	const prefixMap = JSON.parse(localStorage.getItem('prefixMap'));
	const searchOptions = JSON.parse(localStorage.getItem('searchOptions'));

	// Iterate through the prefix map
	for (const [key, value] of Object.entries(prefixMap)) {
		
		// Push two table columns to the searchPrefixTable,
		// one for the prefix and one for the provider
		searchPrefixTable.push(
			<tr>
				<td>{`${searchOptions['prefixes'][0]}${key}`}</td>
				<td>{value['provider']}</td>
			</tr>
		);
	}

	return (
		<div className='halfWidth'>
			<h1 className='modalSectionHeader'>{t('searchProviders')}</h1>
			<table id='searchPrefixTable'>
				<tr>
					<th>{t('prefix')}</th>
					<th>{t('provider')}</th>
				</tr>

				{searchPrefixTable}
			</table>
		</div>
	);
}
