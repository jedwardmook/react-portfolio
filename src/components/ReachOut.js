import { useRef, useState } from 'react';
import styles from './reachout.module.css';
import emailjs from '@emailjs/browser';
import send from '../icons/send.svg'

function ReachOut() {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    contactName: '',
    contactEmail: '',
    messageSubject: '',
    messageBody: ''
  });

  const handleForm = (e) => {
    const {name, value} = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault()
    if (formValues.contactName && formValues.contactEmail && formValues.messageBody !== ''){
      emailjs
        .sendForm('service_9s7vueh', 'template_9kwp1h4', form.current, {
          publicKey: '1FRD8OfceVnIcjUZK',
        })
        .then(
          () => {
            // eslint-disable-next-line no-console
            console.log('SUCCESS!');
            setFormValues({
              contactName: '',
              contactEmail: '',
              messageSubject: '',
              messageBody: ''
            });
          },
          (error) => {
            // eslint-disable-next-line no-console
            console.log('FAILED...', error.text);
          },
        );
      } else {
        // eslint-disable-next-line no-console
        console.log("Name, email, and message cannot be blank")
      }
  };

  return (
    <section className={styles['reach-out']}>
      <div id='contact' className={styles['reach-out-container']}>
        <div className={styles['reach-out-info']}>
          <h2>REACH OUT!</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <div className={styles['form-stacked-div']}>
                <label htmlFor='contactName'>Name:</label>
                <input
                  type='text'
                  name='contactName'
                  value={formValues.contactName}
                  onChange={handleForm}
                  placeholder='Name'
                  className={styles['small-input']}
                />
              </div>
              <div className={styles['form-stacked-div']}>
                <label htmlFor='contactEmail'>Email:</label>
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
            <div className={styles['form-stacked-div']}>
              <label htmlFor='messageSubject'>Subject:</label>
              <input
                type='text'
                name='messageSubject'
                value={formValues.messageSubject}
                onChange={handleForm}
                placeholder='Subject'
              />
            </div>
            <div className={styles['form-stacked-div']}>
              <label htmlFor='messageBody'>Body:</label>
              <textarea
                type='text'
                name='messageBody'
                value={formValues.messageBody}
                onChange={handleForm}
                placeholder='Message'
              />
            </div>
            <div>
              <p>Send a message or schedule a meeting: <a href='https://calendly.com/jedwardmook'>Calendly</a>.</p>
              <button type='submit' className={styles['submit-button']}><img src={send} alt='Send your message'/></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ReachOut