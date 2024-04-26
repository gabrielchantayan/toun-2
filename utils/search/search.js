import { successHandler } from "../misc/miscUtils.js";
import { readFile } from 'fs/promises';

/**
 * Gets search options
 * @returns {JSON} The search options
 */
const getSearchOptions = async () => {
    // Read the file from the root directory
    const searchOptions = JSON.parse(await readFile('searchOptions.json'));

    return successHandler(true, null, searchOptions);
}

export { getSearchOptions }