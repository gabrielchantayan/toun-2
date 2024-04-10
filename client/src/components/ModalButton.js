import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import Modal from './Modal';


export default function ModalButton(props) {
	const [showModal, setShowModal] = React.useState(false); // Password

	const toggleModal = () => {
		setShowModal(!showModal)
	}

	return (
		<>
			<div id='modalToggleButton' onClick={toggleModal}>
				<Icon id='modalToggleButtonIcon' icon='mdi-xbox-controller-menu' />
			</div>

			<Modal showModalToggle={toggleModal} show={showModal} />
		</>
	);
}
