import {useState, useContext} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../auth/firebase";
import AppContextProvider from '../context/AppContextProvider';
import {useNavigate} from 'react-router-dom'

const RegisterPrompt = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(AppContextProvider);

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' && email === '' && password === '') {
            alert("All fields are required")
        } else {
            createUserWithEmailAndPassword(auth, email, password).then((response) => {
                console.log(response.user.displayName)
                response.user.displayName = username
                setUser({
                    username: username,
                    email: email,
                    login: true
                });
                navigate('/')
            }).catch((err) => {
                alert("User not created")
                console.log(err.message)
            })
        }
    }

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
                <button className='user-authentication-prompt-submit-button' onClick={handleSubmit}>Register</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterPrompt;