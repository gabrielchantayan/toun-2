import asyncWrapper from '../../middleware/asyncWrapper.js';
import { updateApps as mainFunction } from '../../utils/apps/api.js';

// Update Apps
// Updates apps list
const updateApps = asyncWrapper(async (req, res) => {

    const ret = await mainFunction(req);

    res.status(200).json(ret);

});

export default updateApps;
