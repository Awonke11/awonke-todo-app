import React from 'react'

const RegisterPrompt = () => {
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