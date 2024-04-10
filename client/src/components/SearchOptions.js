import React, { useEffect } from 'react';
import { t, tNoBracket } from '../assets/js/locale';
import ThemeButton from './ThemeButton';
import themes from '../assets/styles/themes.json';

export default function SearchOptions(props) {


    let themeButtons = []

        for (const [key, data] of Object.entries(themes['themes'])){
            themeButtons.push(<ThemeButton themeName={key} data={data} />);
        }


    
	return (
		<div className='halfWidth'>
			<h1 className='modalSectionHeader'>{t('searchOptions')}</h1>
			<div id='themeButtonSection'>{themeButtons}</div>
		</div>
	);
}
