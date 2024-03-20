import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './reachout.module.css';
import emailjs from '@emailjs/browser';
import send from '../icons/send.svg'
import ReachOutModal from './ReachOutModal';

function ReachOut() {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    contactName: '',
    contactEmail: '',
    messageSubject: '',
    messageBody: ''
  });
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState({
    status: '',
    message: '',
    buttonText: 'Okay'
  })

  const handleForm = (e) => {
    const {name, value} = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const sendEmail =  async (e) => {
    e.preventDefault()

    let status;
    let message;

    if (
      formValues.contactName
      && formValues.contactEmail
      && formValues.messageBody
    ) {
      try {
        await emailjs.sendForm(
          'service_9s7vueh',
          'template_9kwp1h4',
          form.current, {
            publicKey: '1FRD8OfceVnIcjUZK',
          }
        )

        status = 'Success!';
        message = 'Thank you. Your email has been sent.';

        setIsOpen(!isOpen)
        setFormValues({
          contactName: '',
          contactEmail: '',
          messageSubject: '',
          messageBody: ''
        });
      } catch (error) {
        status = 'Error';
        message = error.text;
      }
    } else {
      setIsOpen(!isOpen);

      status = 'Error';
      message = 'Name, email, or body cannot be blank.';
    }

    setModalProps({
      ...modalProps,
      status,
      message,
    })
  }

  return (
    <section className={styles['reach-out']}>
      <div id='contact' className={styles['reach-out-container']}>
        <div className={styles['reach-out-info']}>
          <h2 className={styles['reach-out-header']}>REACH OUT!</h2>
          <form className={styles['reach-out-form']} ref={form} onSubmit={sendEmail}>
            <div className={styles['reach-out-two-input']}>
              <div className={styles['form-stacked-container']}>
                <label className={styles['form-label']} htmlFor='contactName'>Name:</label>
                <input
                  type='text'
                  name='contactName'
                  value={formValues.contactName}
                  onChange={handleForm}
                  placeholder='Name'
                  className={styles['small-input']}
                />
              </div>
              <div className={styles['form-stacked-container']}>
                <label className={styles['form-label']} htmlFor='contactEmail'>Email:</label>
                <input
                  type='email'
                  name='contactEmail'
                  value={formValues.contactEmail}
                  onChange={handleForm}
                  placeholder='Email'
                  className={styles['small-input']}
                />
              </div>
            </div>
            <div className={styles['form-stacked-container']}>
              <label className={styles['form-label']} htmlFor='messageSubject'>Subject:</label>
              <input
                type='text'
                name='messageSubject'
                value={formValues.messageSubject}
                onChange={handleForm}
                placeholder='Subject'
                className={styles['long-input']}
              />
            </div>
            <div className={styles['form-stacked-container']}>
              <label className={styles['form-label']} htmlFor='messageBody'>Body:</label>
              <textarea
                type='text'
                name='messageBody'
                value={formValues.messageBody}
                onChange={handleForm}
                placeholder='Message'
                className={styles['form-textarea']}
              />
            </div>
            <div className={styles['form-meeting-container']}>
              <p className={styles['form-meeting-message']}>Send a message or schedule a meeting: <a className={styles['form-meeting-link']} href='https://calendly.com/jedwardmook'>Calendly</a>.</p>
              <button type='submit' className={styles['submit-button']}><img className={styles['submit-image']} src={send} alt='Send your message'/></button>
            </div>
          </form>
        </div>
      </div>
      {createPortal(
        <ReachOutModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          modalProps={modalProps}
          styles={styles}
        />,
        document.getElementById('modal-root')
      )}
    </section>
  )
}

export default ReachOut