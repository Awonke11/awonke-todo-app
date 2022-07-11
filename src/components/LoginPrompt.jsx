import {useState, useContext} from 'react';
import AppContextProvider from '../context/AppContextProvider';
import { auth } from '../auth/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

const LoginPrompt = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const { setUser, user } = useContext(AppContextProvider)

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '' && password === '') {
            alert("All fields are required")
        } else {
            signInWithEmailAndPassword(auth, email, password).then((response) => {
                alert("User logged in");
                setUser({
                    username: user.username,
                    email: email,
                    login: true
                });
                navigate("/")
            })
        }
    }
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
                <button className='user-authentication-prompt-submit-button' onClick={handleSubmit}>Login</button>
            </div>
        </form>
    </div>
  )
}

export default LoginPrompt;