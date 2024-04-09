import asyncWrapper from '../../middleware/asyncWrapper.js';
import { getApplications as mainFunction } from '../../utils/apps/api.js';
import { successHandler } from '../../utils/misc/miscUtils.js';

// Get applications
// Gets a list of all applications and bookmarks
const getApps = asyncWrapper(async (req, res) => {

    const ret = await mainFunction(req);

    res.status(200).json(successHandler(true, null, ret));

});

export default getApps;
