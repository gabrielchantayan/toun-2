import { Icon } from '@iconify/react';

export default function Button({ startIcon, endIcon, label, onClick }) {
	return (
		<button onClick={onClick}>
			{startIcon && <Icon className='startIcon' icon={startIcon} />}
			{label}
			{endIcon && <Icon className='endIcon' icon={endIcon} />}
		</button>
	);
}
