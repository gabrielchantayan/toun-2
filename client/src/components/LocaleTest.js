import React, { useEffect } from 'react';
import { t } from '../assets/js/locale';

let entries = {
	toun: 'Toun',
	applications: 'Applications',
	bookmarks: 'Bookmarks',
	goodMorning: 'Good Morning!',
	goodAfternoon: 'Good Afternoon!',
	goodEvening: 'Good Evening!',
	goodNight: 'Good Night!',
	options: 'Options',
	themes: 'Themes',
	searchOptions: 'Search Options',
	close: 'Close',
	website: 'Website',
	prefix: 'Prefix',
	langSettings: 'Language Settings',
	adminLogin: 'Admin Login',
	adminSettings: 'Admin Settings',
	login: 'Login',
	editDefault: 'Edit default settings',
	username: 'Username',
	password: 'Password',
	passIncorrect: 'Incorrect Password',
	theme_blackboard: 'Blackboard',
	theme_gazette: 'Gazette',
	theme_espresso: 'Espresso',
	theme_armCoffee: 'Armenian Coffee',
	theme_blues: 'Blues',
	theme_cab: 'Cab',
	theme_cloud: 'Cloud',
	theme_lime: 'Lime',
	theme_white: 'White',
	theme_tron: 'Tron',
	theme_passion: 'Passion',
	theme_chalk: 'Chalk',
	theme_paper: 'Paper',
	theme_neon: 'Neon',
	theme_pumpkin: 'Pumpkin',
	theme_onedark: 'OneDark',
	theme_mint: 'Mint',
	theme_vampire: 'Vampire',
	theme_latte: 'Latte',
	theme_forest: 'Forest',
	theme_timberwolf: 'Timberwolf',
	theme_plum: 'Plum',
	theme_roseQuartz: 'Rose Quartz',
	theme_khaki: 'Khaki',
	server: 'Server',
	media: 'Media',
	communication: 'Communication',
	cloud: 'Cloud',
	design: 'Design',
	technology: 'Technology',
	reading: 'Reading',
	programming: 'Programming',
	lifestyle: 'Lifestyle',
	utilities: 'Utilities',
	socialmedia: 'Social Media',
	rss: 'RSS',
	utility: 'Utility',
	statusMessageSuccess: 'Success',
	statusMessageError: 'Uh oh! A problem has occurred',
	searchProviders: 'Search Providers',
	provider: 'Provider',
	defaultLanguage: 'Default Language',
	defaultTheme: 'Default Theme',
	font_inter: 'Inter',
	font_geist: 'Mono',
	font_polska: 'Polska',
	font_svenska: 'Svenska',
	font_deustch: 'Deustch',
	font_calson: 'Calson',
	theme_black: 'Black',
	fontSettings: 'Font Settings',
	defaultFont: 'Default Font',
};

export default function LocaleTest() {
	let [e, setE] = React.useState([]);

	/**
	 * Handles change of the font selection dropdown
	 *
	 * @param {Event} e the change event of the select element
	 */
	const d = () => {
		console.log('OIHIOHIOHJIOHOHIOH');
		let dwef = [];
		for (const [key, value] of Object.entries(entries)) {
			let f = <p>{t(key)}</p>;
			dwef.push(f);
		}

		setE(dwef);
	};

	useEffect(() => {
		d();
	}, []);

	return <div>{e}</div>;
}
