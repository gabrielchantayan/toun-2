import * as api from './api.js';
import themes from '../styles/themes.json';

// 'color-background': colors.background,'color-text-pri': colors.primary,'color-text-acc': colors.accent
let colOptions = ['color-background', 'color-primary', 'color-accent'];

/**
 * Sets theme
 * @param {String} theme Theme
 */
const setTheme = (theme) => {
	localStorage.setItem('theme', theme);
    applyTheme(theme);
};

/**
 * Applies a theme to CSS
 * @param {String} theme Theme to apply
 */
const applyTheme = () => {
    let theme = localStorage.getItem('theme') || "blackboard";
    for (const [key, color] of Object.entries(themes['themes'][theme]['colors'])){
        document.documentElement.style.setProperty(`--color-${key}`, color);
    }

};

// Set theme values into variable
// function setValue(property, value) {
// 	if (value) {
// 		document.documentElement.style.setProperty(`--${property}`, value);

// 		const input = document.querySelector(`#${property}`);
// 		if (input) {
// 			value = value.replace('px', '');
// 			input.value = value;
// 		}
// 	}
// }

// function setValueFromLocalStorage(property) {
// 	let value = localStorage.getItem(property);
// 	setValue(property, value);
// }

// // Set theme into variable for CSS
// function setTheme(options) {
// 	for (let option of Object.keys(options)) {
// 		const property = option;
// 		const value = options[option];

// 		setValue(property, value);
// 		localStorage.setItem(property, value);
// 	}
// }

// async function init() {
// 	if (colOptions.every((op) => localStorage.hasOwnProperty(op))) {
// 		for (let opt in colOptions) {
// 			setValueFromLocalStorage(colOptions[opt]);
// 		}
// 	} else {
// 		const theme = await getCurrentThemeSettings();
// 		setTheme(theme);
// 	}
// }

export { setTheme, applyTheme };
