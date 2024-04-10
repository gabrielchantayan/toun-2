import React from 'react';
import { tNoBracket } from '../assets/js/locale';
import ApplicationItem from './ApplicationItem';

export default function ApplicationSection(props) {

	return (
		<div id={props.data.name}>
			<h1 className='applicationHeader'>{tNoBracket(props.data.name)}</h1>
			<div className="applicationSection">
				{props.data.entries.map((e) => {
					return <ApplicationItem data={e} />;
				})}

			</div>
		</div>
	);
}
