import React, { useEffect } from 'react';
import { t, tNoBracket } from '../assets/js/locale';
import ThemeButton from './ThemeButton';
import themes from '../assets/styles/themes.json';

export default function ThemeButtonSection(props) {


    let themeButtons = []

        for (const [key, data] of Object.entries(themes['themes'])){
            themeButtons.push(<ThemeButton themeName={key} data={data} />);
        }


    
	return (
		<div>
			<h1 className='modalSectionHeader'>{t('themes')}</h1>
			<div id='themeButtonSection'>{themeButtons}</div>
		</div>
	);
}
