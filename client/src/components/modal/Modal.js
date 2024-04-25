import { Icon } from '@iconify/react';
import React from 'react';
import { t } from '../../assets/js/locale';
import ModalAdminLogin from './ModalAdminLogin';
import ModalOptions from './ModalOptions';
import ModalAdminPage from './ModalAdminPage';

export default function Modal(props) {
	const [tab, setTab] = React.useState('options'); // Password

	const handleChildElementClick = (e) => {
		e.stopPropagation();
		// Do other stuff here
	};

	const github = () => {
		window.location.href = 'https://github.com/gabrielchantayan/toun-2';
	};

	const changeTab = (tab) => {
		setTab(tab);
	};

	const handleModalClose = () => {
		props.showModalToggle();
		if (tab !== 'options') setTab('options');
	};

	const handleModalTabChange = () => {
		if (tab !== 'options') setTab('options');
		else props.showModalToggle();
	};

	return (
		props.show && (
			<div id='modalBackground' onClick={handleModalClose}>
				<div id='modal' onClick={handleChildElementClick}>
					<div id='modalHeader'>
						<h1>{t(tab)}</h1>

						{tab == 'options' ? (
							<Icon className='icon' onClick={handleModalClose} icon='mdi:close' />
						) : (
							<div>
								<Icon className='icon' onClick={handleModalTabChange} icon='mdi:arrow-back' />
								<Icon className='icon' onClick={handleModalClose} icon='mdi:close' />
							</div>
						)}
					</div>

					<div className='mainTab'>
						{tab === 'options' ? (
							<ModalOptions />
						) : tab === 'adminLogin' ? (
							<ModalAdminLogin changeTab={changeTab} />
						) : tab === 'adminSettings' ? (
							<ModalAdminPage changeTab={changeTab} />
						) : (
							''
						)}
					</div>

					<div id='modalFooter'>
						<div className='modalFooterContainer' onClick={github}>
							<Icon className='icon' icon='jam:github' />
							<a className='modalFooterText' href='https://github.com/gabrielchantayan/toun-2'>
								Github
							</a>
						</div>

						{tab != 'adminLogin' && tab != 'adminSettings' && (
							<div
								className='modalFooterContainer'
								onClick={() => {
									changeTab('adminLogin');
								}}>
								<Icon className='icon' icon='mdi:account-supervisor-circle' />
								<a className='modalFooterText' href='#'>
									{t('adminLogin')}
								</a>
							</div>
						)}
					</div>
				</div>
			</div>
		)
	);
}
