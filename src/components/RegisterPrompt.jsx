import React, {useState} from 'react';

const RegisterPrompt = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='user-authentication'>
        <form className='user-authentication-prompt'>
            <div className='user-authentication-prompt-inputs'>
                <div className='user-authentication-prompt-inputs-input'>
                    <label for='username' className='user-authentication-prompt-inputs-input-label'>Name</label>
                    <input 
                        type='text' 
                        name='username'
                        placeholder="Enter your name..."
                        className='user-authentication-prompt-inputs-input-type'
                        required
                        value={username}
                        onChange={(e) => {setUsername(e.target.value)}}
                    />
                </div>
                <div className='user-authentication-prompt-inputs-input'>
                    <label for='email' className='user-authentication-prompt-inputs-input-label'>Email</label>
                    <input 
                        type='email' 
                        name='email'
                        placeholder="Enter your email..."
                        className='user-authentication-prompt-inputs-input-type'
                        required
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                </div>
                <div className='user-authentication-prompt-inputs-input'>
                    <label for='password' className='user-authentication-prompt-inputs-input-label'>Password</label>
                    <input 
                        type='password' 
                        name='password'
                        placeholder="Enter your password..."
                        className='user-authentication-prompt-inputs-input-type'
                        required
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                </div>
            </div>
            <div className='user-authentication-prompt-submit'>
                <button className='user-authentication-prompt-submit-button'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterPrompt;