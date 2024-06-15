import { copyFile, readdir } from 'fs/promises';

const initialize = async () => {
	console.log('Initializing server...');
	console.log(`Admin portal password: ${process.env.ADMIN_PASSWORD}`);


    console.log('Checking config files...');

	// Create a list of all files in /config
	const configDir = './config';
	const configFiles = await readdir(configDir);

	// Create a list of all files in /defaults/config
	const defaultConfigDir = './defaults/config';
	const defaultConfigFiles = await readdir(defaultConfigDir);

	// Copy any files that dont exist in /config from /defaults/config
	for (const file of defaultConfigFiles) {
		if (!configFiles.includes(file)) {
            console.log(`Copying ${file}...`);
			await copyFile(`${defaultConfigDir}/${file}`, `${configDir}/${file}`);
		}
	}

    console.log('Finished initializing server.');
};

export default initialize;
