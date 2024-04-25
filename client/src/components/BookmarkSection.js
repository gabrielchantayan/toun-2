import React from 'react';
import { tNoBracket } from '../assets/js/locale';
// import BookmarkItem from './ApplicationItem';

export default function BookmarkSection(props) {

	return (
		<div id={props.data.name} className='bookmarkSection'>
			<h2 className='bookmarkSectionHeader'>{tNoBracket(props.data.name)}</h2>
			<div>
				<ul>
					{props.data.entries.map((e) => {
						// return <ApplicationItem data={e} />;
						return (
							<li>
								<a href={e.url}>{e.name}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
