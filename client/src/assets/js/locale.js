// import locale from '../locale.json' assert { type: `json` };
import locale from '../locale.json'
import { getCookie } from './utils'


const defaultLocale = 'fr-FR'



const getLocales = () => {
    return locale['info']['locales']
}

const t = (text) => {
    return locale[localStorage.getItem('locale') || defaultLocale ][text] || `[[${text}]]`;
}

const tNoBracket = (text) => {
	return locale[localStorage.getItem('locale') || defaultLocale][text] || `${text}`;
};

const getLocaleMappings = (text) => {
	return locale['info']['locales'];
};

export { t, tNoBracket, getLocaleMappings, defaultLocale, getLocales };