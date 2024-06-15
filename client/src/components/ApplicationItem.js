import { Icon } from '@iconify/react';
import { stripProtocol } from '../assets/js/utils';

export default function ApplicationItem(props) {

	const navigate = () => {
		window.location.href = props.data.url;
	};

	return (

		<div className='applicationContainer' onClick={navigate}>
			<div className='applicationIcon'>
				<Icon className='icon' icon={props.data.icon} />
			</div>
			<div className='applicationText'>




				<a className='applicationName' href={props.data.url}>
					{props.data.name}
				</a>



				<span className='applicationLink'>{stripProtocol(props.data.url)}</span>
			</div>
		</div>
	);
}
