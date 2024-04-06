// Gets a cookie
const getCookie = (key) => {
	var b = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
	return b ? b.pop() : '';
};



const greet = () => {
	let currentTime = new Date();
	let greet = Math.floor(currentTime.getHours() / 3);
	switch (greet) {
		case 7:
		case 8:
		case 0:
		case 1:
			return 'Good night!';
		case 2:
		case 3:
			return 'Good morning!';
		case 4:
		case 5:
			return 'Good afternoon!';
		case 6:
			return 'Good evening!';
		default:
			return 'Hello!';
	}
};

/**
 *
 * @param {Array} fileData The filedata in [an array]
 * @param {String} fileName The name of the file to download
 * @param {String} fileType The file type
 */
const makeFile = (fileData, fileName, fileType) => {
	let tempFile = new File(fileData, fileName, { type: fileType });
	let fileURL = window.URL.createObjectURL(tempFile);

	const a = document.createElement('a');
	a.style = 'display: none';
	document.body.appendChild(a);
	a.href = fileURL;
	a.download = fileName;
	a.click();
	window.URL.revokeObjectURL(fileURL);
};

export { getCookie, greet, makeFile };
