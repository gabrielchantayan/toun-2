import { Router } from 'express';
const router = Router();

import search from '../controllers/search/index.js';

// Get search options
// Gets the search options file from the root directory
router.get('/getSearchOptions', (req, res) => {
    return search.getSearchOptions(req, res);
});
export default router;