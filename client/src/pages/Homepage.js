import React, { useEffect } from 'react';
import { t } from '../assets/js/locale.js';
import { date, greet } from '../assets/js/utils.js';
import { useCookies } from 'react-cookie';
import * as api from '../assets/js/api.js';
import ApplicationSection from '../components/ApplicationSection.js';
import { applyTheme } from '../assets/js/themes.js';
import ModalButton from '../components/ModalButton.js';

export default function PageOne(params) {
	const [username, setUsername] = React.useState(''); // Username
	const [password, setPassword] = React.useState(''); // Password
	const [cookies, setCookie] = useCookies(['user']); // Any cookies

	const [displayPage, setDisplayPage] = React.useState(false); // Any cookies
	const [appsJSON, setAppsJSON] = React.useState({}); // Password

	const [appSection, setAppSection] = React.useState([]); // Password

	const [locale, setLocale] = React.useState();

	const [eatShit, fuckYouReact] = React.useState(false); // Any cookies

	const buildAppMenu = (data) => {
		return <ApplicationSection data={data} />;
	};

	// Get apps
	const getApps = async () => {
		setDisplayPage(false);

		// Get apps from API
		let ret = await api.get(['apps', 'getApps']);

		let appSectionBuilder = [];

		// Sort the application sections by order
		ret.applications.sort((a, b) => {
			return a.order - b.order;
		});

		// Iterate through application sections
		for (const [key, data] of Object.entries(ret.applications)) {
			// Sort each application section entry
			data['entries'].sort((a, b) => {
				return a.order - b.order;
			});

			appSectionBuilder.push(buildAppMenu(data));
		}

		setAppSection(appSectionBuilder);
		setAppsJSON(ret);
		setDisplayPage(true);
	};

	useEffect(() => {
		applyTheme();
		getApps();
	}, []);

	return (
		<div id='mainContainer'>
			<div class='section'>
				<p id='date'>{date()}</p>
				<p id='greet'>{t(greet())}</p>
			</div>

			<div class='section'>{appSection}</div>

			<ModalButton />
		</div>
	);
}
