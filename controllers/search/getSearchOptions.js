import asyncWrapper from '../../middleware/asyncWrapper.js';
import { getSearchOptions as mainFunction } from '../../utils/search/search.js';

// Get search options
// Gets the search options file from the root directory
const getSearchOptions = asyncWrapper(async (req, res) => {

    const ret = await mainFunction(req);

    res.status(200).json(ret);

});

export default getSearchOptions;
