import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { t } from '../assets/js/locale.js';
import { greet } from '../assets/js/utils.js';
import { useCookies } from 'react-cookie';

export default function PageOne(params) {
	const [username, setUsername] = React.useState(''); // Username
	const [password, setPassword] = React.useState(''); // Password
	const [cookies, setCookie] = useCookies(['user']);  // Any cookies

    const [locale, setLocale] = React.useState();

	return (
		<div id='main'>
			<div class='section'>
				'<p>{greet()}</p>
				<p>{t('someText')}</p>
				<p>{t('someMoreText')}</p>
				<p>{t('engOnly')}</p>
				<p>{t('freOnly')}</p>
				<p>{t('armOnly')}</p>
			</div>

			<div class='section'>

                <label>
                    Select a language
                    <select name="localeSelect" value="locale">
                        <option value="en-US">English</option>
                    </select>
                </label>

            </div>
		</div>
	);
}
