import { readFile, writeFile } from 'fs/promises';


const getApplications = async () => {
    const appsFileRAW = await readFile('./apps.json');
	const appsFile = JSON.parse(appsFileRAW);


    return(appsFile);
};

export { getApplications };
