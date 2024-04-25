import React from 'react';
import { t } from '../../assets/js/locale';
import FloatingLabelInput from '../fragments/FloatingLabelInput';

export default function ModalAdminPage() {
	const [password, setPassword] = React.useState();

	return (
		<div id='modalBody' className='center'>
			<div>
				<form>
					<FloatingLabelInput label={t('password')} type='password' value={password} onChange={setPassword} />
				</form>
			</div>
		</div>
	);
}
