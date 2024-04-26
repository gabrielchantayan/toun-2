import { readFile, writeFile } from 'fs/promises';
import { successHandler } from './miscUtils.js';

/**
 * Retrieves the options from config.json
 * @function getOptions
 * @returns {JSON} The options from config.json
 */
const getOptions = async () => {
	// Read the config.json file
	const config = JSON.parse(await readFile('../../config.json'));

	// Return a success message with the options
	return successHandler(true, null, config);
};


/**
 * Updates the option in config.json with the given key and new value.
 * @function updateOptions
 * @param {string} key The key of the option to update.
 * @param {string} option The new value to set the option to.
 * @returns {JSON} A success message.
 */
const updateOptions = async (key, option) => {
    // Read the config.json file
    let config = JSON.parse(await readFile('../../config.json'));

    // Update the config with the new option
    config[key] = option;

    // Write the updated config.json file
    await writeFile('../../config.json', JSON.stringify(config));

    // Return a success message with the key of the updated option
    return successHandler(true, 'updatedOption');
};


export { getOptions, updateOptions };
