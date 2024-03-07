import PropTypes from 'prop-types';


function ReachOutModal({isOpen, setIsOpen, modalProps, styles}) {
  if (!isOpen) return null;

  return (
      <div className={styles['modal-background']}>
        <dialog className={styles['modal-dialog']} open={isOpen}>
          <h3>{modalProps.status}</h3>
          <p>{modalProps.message}</p>
          <button className={styles['modal-button']} onClick={() => setIsOpen(!isOpen)}><strong>{modalProps.buttonText}</strong></button>
        </dialog>
      </div>
  )
}

ReachOutModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  modalProps: PropTypes.object,
  styles: PropTypes.object
}

export default ReachOutModal