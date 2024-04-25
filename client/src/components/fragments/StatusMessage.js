import * as React from 'react';
import { t } from '../../assets/js/locale';

const StatusMessage = ({ loading = false, showMessage = false, showHeader = true, success = false, message }) => (
	<div className='statusMessageContainer'>
		{/* Loading bar */}
		{loading && (
			<div className='loadingBarContainer'>
				<div className='loadingBarBackground'></div>
				<div className='loadingBarValue'></div>
			</div>
		)}

		{/* Error */}
		{showMessage && (
            <div className="statusMessage">
                {
                    showHeader && (

                        <p className={success ? 'success result' : 'error result'}>
                            {success ? t('statusMessageSuccess') : t('statusMessageError')}
                        </p>
                    )
                }
                <p className="message">{t(message)}</p>
            </div>
		)}
	</div>
);

export default StatusMessage;
