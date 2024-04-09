import { Icon } from '@iconify/react';

export default function ApplicationItem(props) {
	return (
		// <div id={props.data.name}>
		// 	<h2 class="applicationName">{props.data.name}</h2>
		// </div>

		<div className='applicationContainer'>
			<div className='applicationIcon'>
				<Icon className='icon' icon={props.data.icon} />
			</div>
			<div className='applicationText'>
				<a className='applicationName' href={props.data.url}>
					{props.data.name}
				</a>
				<span id='app-address'>{props.data.url}</span>
			</div>
		</div>
	);
}
