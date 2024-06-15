import { readFile, writeFile } from 'fs/promises';
import { successHandler } from '../misc/miscUtils.js';


const getApplications = async () => {
    const appsFileRAW = await readFile('./config/apps.json');
	const appsFile = JSON.parse(appsFileRAW);


    return(successHandler(true,null,appsFile));
};

const updateApps = async (appData) => {
    
}

export { getApplications, updateApps };
