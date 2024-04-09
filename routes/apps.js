import { Router } from 'express';
const router = Router();

import apps from '../controllers/apps/index.js';

// Get applications
// Gets a list of all applications and bookmarks
router.get('/getApps', (req, res) => {
    return apps.getApps(req, res);
});


export default router;