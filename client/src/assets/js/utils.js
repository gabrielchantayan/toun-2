import { getLocale } from './locale';


const protocolRegex = /^.*?:\/\//

// Gets a cookie
const getCookie = (key) => {
	var b = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
	return b ? b.pop() : '';
};

// import * as locale from './localeManager.js'; // Import Locale manager

// Date function for main page
const date = () => {
	let currentDate = new Date();
	let dateOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	// Set date to locale
	// const loc = await locale.getLocale();
	const loc = getLocale();

	let date = currentDate.toLocaleDateString(loc, dateOptions);
	return date;
};

const greet = () => {
	let currentTime = new Date();
	let greet = Math.floor(currentTime.getHours() / 3);
	switch (greet) {
		case 7:
		case 8:
		case 0:
		case 1:
			return 'goodNight';
		case 2:
		case 3:
			return 'goodMorning';
		case 4:
		case 5:
			return 'goodAfternoon';
		case 6:
			return 'goodEvening';
		default:
			return 'Hello!';
	}
};

/**
 *
 * @param {Array} fileData The filedata in [an array]
 * @param {String} fileName The name of the file to download
 * @param {String} fileType The file type
 */
const makeFile = (fileData, fileName, fileType) => {
	let tempFile = new File(fileData, fileName, { type: fileType });
	let fileURL = window.URL.createObjectURL(tempFile);

	const a = document.createElement('a');
	a.style = 'display: none';
	document.body.appendChild(a);
	a.href = fileURL;
	a.download = fileName;
	a.click();
	window.URL.revokeObjectURL(fileURL);
};

/**
 * Strips a protocol from a link
 * @param {String} link Link to strip from
 * @returns {String}
 */
const stripProtocol = (link) => {
	return link.replace(protocolRegex, '');
}

export { getCookie, greet, makeFile, date, stripProtocol };
