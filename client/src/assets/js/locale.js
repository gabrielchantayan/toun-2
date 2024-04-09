// import locale from '../locale.json' assert { type: `json` };
import locale from '../locale.json'
import { getCookie } from './utils'

const defaultLocale = 'hy-AM'

const getLocale = () => {

}

const t = (text) => {
    return locale[getCookie('locale') || defaultLocale ][text] || `[[${text}]]`;
}

const tNoBracket = (text) => {
	return locale[getCookie('locale') || defaultLocale][text] || `${text}`;
};

const getLocaleMappings = (text) => {
	return locale['info']['locales'];
};

export { t, tNoBracket, getLocaleMappings, defaultLocale };