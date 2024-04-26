# API Documentation



## APPS

### Get applications

Gets a list of all applications and bookmarks

**Type**: GET

**Call**: `/api/apps/getApps`

### Update Apps

Updates apps list

**Type**: POST

**Call**: `/api/apps/updateApps`



## ACCOUNTS

### Login

Logs in a user

**Type**: POST

**Call**: `/api/accounts/login`



## SEARCH

### Get search options

Gets the search options file from the root directory

**Type**: GET

**Call**: `/api/search/getSearchOptions`

**JSDoc**

 ``` /**
 * Gets search options
 * @returns {JSON} The search options
 */
const getSearchOptions = async () 
 ``` 



## OPTIONS

### Get options

Gets the options file from the root directory

**Type**: GET

**Call**: `/api/options/getOptions`

**JSDoc**

 ``` /**
 * Retrieves the options from config.json
 * @function getOptions
 * @returns {JSON} The options from config.json
 */
const getOptions = async () 
 ``` 

### Update options

Updates the options file in the root directory

**Type**: POST

**Call**: `/api/options/updateOptions`

**JSDoc**

 ``` /**
 * Updates the option in config.json with the given key and new value.
 * @function updateOptions
 * @param {string} key The key of the option to update.
 * @param {string} option The new value to set the option to.
 * @returns {JSON} A success message.
 */
const updateOptions = async (key, option) 
 ``` 

