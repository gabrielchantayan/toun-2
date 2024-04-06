// import locale from '../locale.json' assert { type: `json` };
import locale from '../locale.json'
import { getCookie } from './utils'

const t = (text) => {
    return locale[(getCookie('locale') || 'en-US')][text] || `[[${text}]]`
}

const getLocaleMappings = (text) => {
	return locale['info']['locales'];
};

export { t, getLocaleMappings };