import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage('Name is required');
      return;
    }
    if (!email) {
      setErrorMessage('Email is required');
      return;
    }
    if (!message) {
      setErrorMessage('Message is required');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1>Contact</h1>
      
      <form onSubmit={handleFormSubmit}>

        <div>
          <input
          value={name}
          name='name'
          onChange={handleInputChange}
          type='text'
          placeholder='Name'
          required={true}
          />
        </div>

        <div>
          <input
          value={email}
          name='email'
          onChange={handleInputChange}
          type='email'
          placeholder='Email'
          required={true}
          />
          </div>

        <div>
          <textarea
          value={message}
          name='message'
          onChange={handleInputChange}
          type='text'
          placeholder='Message'
          required={true}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
};
