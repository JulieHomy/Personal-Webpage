import { useRef } from 'react';
import { useId, useState } from 'react';
import './Modal.css';
import Button from './Button';

function Modal() {

    const dialogRef = useRef();

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [favorite, setFavorite] = useState('');

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');

    const [greeting, setGreeting] = useState('')

    const id = useId();

    const onSubmit = (e) => {
        e.preventDefault();
        setNameError('');
        setEmailError('');

        if (!name || !email) {
            setNameError(name ? '' : 'Name is required');
            setEmailError(email ? '' : 'Email is required');
            return;
        }

        if (email !== "" && !email.match("@")) {
            setEmailError('Valid email address should include "@"');
            return;
        }

        dialogRef.current.close();
        setGreeting(name);
    }

    return (
        <>
            {/* <div className='modal-container'> */}
            {/* <div className='modal-greeting'>
                    <p className='greeting-name'>{greeting}</p>
                </div> */}
            <div className='click-text__container'>
                <Button visual="link" onClick={() => dialogRef.current.showModal()}>
                    <span className='click-text'>Click to Connect!</span>
                </Button>
            </div>

            <dialog ref={dialogRef}>

                <p>Please enter your information below:</p>
                <form className="form" onSubmit={onSubmit}>
                    <label htmlFor={`${id}-name`}>Name:</label>
                    <input
                        className="form-input"
                        id={`${id}-name`}
                        value={name}
                        onInput={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    {nameError && <div className='input-error'>{nameError}</div>}

                    <label htmlFor={`${id}-phoneNumber`}>Phone Number:</label>
                    <input
                        className="form-input"
                        id={`${id}-phoneNumber`}
                        value={phoneNumber}
                        onInput={(e) => {
                            setPhoneNumber(e.target.value);
                        }}
                    />

                    <label htmlFor={`${id}-email`}>Email Address:</label>
                    <input
                        className="form-input"
                        id={`${id}-email`}
                        value={email}
                        onInput={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    {emailError && <div className='input-error'>{emailError}</div>}

                    <label htmlFor={`${id}-favorite`}>How can I reach out to you:</label>
                    <select className="form-input" id={`${id}-favorite`} onChange={(e) => setFavorite(e.target.value)} value={favorite}>
                        <option value="in-person">In person</option>
                        <option value="phone-call">Phone call</option>
                        <option value="video-talk">Video talk</option>
                        <option value="text">Text</option>
                    </select>
                    <Button visual="link" type="submit">Submit</Button>
                </form>

                <div className='close-button'>
                    <Button visual="button" onClick={() => dialogRef.current.close()}>
                        Close
                    </Button>
                </div>

            </dialog>

            {/* <div className='modal-greeting'> */}
            <p className='greeting-name'>Hi {greeting}! Nice to meet you!</p>
            {/* </div> */}

            {/* </div> */}
        </>
    );
}

export default Modal; 