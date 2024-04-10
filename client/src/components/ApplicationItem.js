import { Icon } from '@iconify/react';

export default function ApplicationItem(props) {

	const navigate = () => {
		window.location.href = props.data.url;
	};

	return (
		// <div id={props.data.name}>
		// 	<h2 class="applicationName">{props.data.name}</h2>
		// </div>

		<div className='applicationContainer' onClick={navigate}>
			<div className='applicationIcon'>
				<Icon className='icon' icon={props.data.icon} />
			</div>
			<div className='applicationText'>
				<a className='applicationName' href={props.data.url}>
					{props.data.name}
				</a>
				<span className='applicationLink'>{props.data.url}</span>
			</div>
		</div>
	);
}
