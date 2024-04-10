import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { t } from '../assets/js/locale';
import ThemeButtonSection from './ThemeButtonSection';
import LanguageSelection from './LanguageSelection';
import SearchOptions from './SearchOptions';


export default function Modal(props) {

	const handleChildElementClick = (e) => {
      e.stopPropagation()
      // Do other stuff here
   }

	return (
		props.show && (
			<div id='modalBackground' onClick={props.showModalToggle}>
				<div id='modal' onClick={handleChildElementClick}>
					<div id='modalHeader'>
						<h1>{t('options')}</h1>
						<Icon className='icon' onClick={props.showModalToggle} icon='mdi-close' />
					</div>

					<div id='modalBody'>
						<ThemeButtonSection />

						<SearchOptions />
						<LanguageSelection />
					</div>

					<div id='modalFooter'></div>
				</div>
			</div>
		)
	);
}
