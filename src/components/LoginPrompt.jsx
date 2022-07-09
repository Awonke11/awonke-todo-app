import React, {useState} from 'react'

const LoginPrompt = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

  return (
    <div className='user-authentication'>
        <form className='user-authentication-prompt'>
            <div className='user-authentication-prompt-inputs login'>
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
                <button className='user-authentication-prompt-submit-button'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default LoginPrompt;