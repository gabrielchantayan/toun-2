import React from 'react';
import { t } from '../../assets/js/locale';
import FloatingLabelInput from '../fragments/FloatingLabelInput';
import LanguageSelection from '../fragments/LanguageSelection';

export default function ModalAdminPage() {
	const [selectedLang, setSelectedLang] = React.useState(localStorage.getItem('locale') || 'en-US');

	const handleLanguageChange = (e) => {
		setSelectedLang(e.target.value);
	};


	return (
		<div id='modalBody' className='center'>
			<div>
				{t('defaultLanguage')}
				<LanguageSelection handleLanguageChange={handleLanguageChange} selectedLang={selectedLang} />
			</div>
		</div>
	);
}
