import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AlertNotify({ type, title, message, icon, show, onClose }) {
  if (show) {
    return (
      <Alert variant={type} className='d-flex align-items-center' onClose={onClose} dismissible>
        { icon && <FontAwesomeIcon icon={icon} className='me-2' size="2x" /> }
        { message }
      </Alert>
    );
  }
}

export default AlertNotify;