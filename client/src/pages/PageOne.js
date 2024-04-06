import React, { useEffect } from 'react';


import { useNavigate } from 'react-router-dom';

export default function PageOne(params) {
	const [pages, setPages] = React.useState(null);

	const navigate = useNavigate();
	// useEffect(() => {

	//     async function getData() {
	//         let ret = await account.getListOfAllPermissiblePages();

	//         ret.sort((a, b) => a.sort - b.sort);

	//         setPages(ret);
	//     }

	//     getData();

	// }, [])

	const goToLogin = () => {
		navigate('/login');
	};

	// const lll = await api.post(['accounts', 'listAllPermissiblePages'], { 'username': username, 'token': ret.token });
	// console.log(lll)

	return (
		<div>
			<p>Page 1!</p>
		</div>
	);
}
