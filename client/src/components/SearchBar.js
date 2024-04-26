import { useState } from "react";
import { search } from "../assets/js/search";

export default function SearchBar() {

	const [value, setValue] = useState('');
	
	const handleChange = (e) => {
		setValue(e.target.value);
	}

	const handleKeyDown = (e) => {
		if (e.keyCode === 13) {
			search(value);
		}
	};

	return (
		<div id='searchBar'>
			<input
				type='text'
				className='searchInput'
				value={value}
				onKeyDown={handleKeyDown}
				onChange={handleChange}
			/>
		</div>
	);
}
