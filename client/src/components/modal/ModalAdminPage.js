import React, { useEffect } from 'react';
import { t } from '../../assets/js/locale';
import FloatingLabelInput from '../fragments/FloatingLabelInput';
import LanguageSelection from '../fragments/LanguageSelection';
import { getThemeList } from '../../assets/js/themes';

export default function ModalAdminPage() {
	const [selectedLang, setSelectedLang] = React.useState(localStorage.getItem('locale') || 'en-US');
	const [themeOptions, setThemeOptions] = React.useState([]);

	const handleLanguageChange = (e) => {
		setSelectedLang(e.target.value);
	};

	const makeOptions = () => {
		let options = []

		let themes = getThemeList();

		themes.forEach((theme) => {

			options.push(<option value={theme[0]}>{theme[1]}</option>);
		})

		setThemeOptions(options);
		return;
	};


	useEffect(() => {
		makeOptions();
	}, []);



	return (
		<div id='modalBody' className='center'>
			<div>
				{t('defaultLanguage')}
				<LanguageSelection handleLanguageChange={handleLanguageChange} selectedLang={selectedLang} />
			</div>

			<div>
				{t('defaultTheme')}
				<select>
					{themeOptions}
				</select>
			</div>
		</div>
	);
}
