import { Router } from 'express';
const router = Router();

import apps from '../controllers/apps/index.js';

// Get applications
// Gets a list of all applications and bookmarks
router.get('/getApps', (req, res) => {
    return apps.getApps(req, res);
});

// Update Apps
// Updates apps list
router.post('/updateApps', (req, res) => {
    return apps.updateApps(req, res);
});
export default router;