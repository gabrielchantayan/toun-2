import asyncWrapper from '../../middleware/asyncWrapper.js';
import { getApplications as mainFunction } from '../../utils/apps/api.js';

// Get applications
// Gets a list of all applications and bookmarks
const getApps = asyncWrapper(async (req, res) => {

    const ret = await mainFunction(req);

    res.status(200).json(ret);

});

export default getApps;
