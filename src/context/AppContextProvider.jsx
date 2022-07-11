import { createContext, useState } from 'react';

const AppContextProvider = createContext()
export const AppMainContext = ({children}) => {

    const [theme, setTheme] = useState('light');
    const [selectedLight, setSelectedLight] = useState('clicked')
    const [selectedDark, setSelectedDark] = useState('')
    const [user, setUser] = useState({
        username: 'User',
        email: 'user@email.com',
        login: false
    })

    return (
        <AppContextProvider.Provider value={{
            user, 
            setUser, 
            theme, 
            setTheme,
            selectedLight, 
            setSelectedLight,
            selectedDark,
            setSelectedDark
        }}>
            {children}
        </AppContextProvider.Provider>
    )
}
export default AppContextProvider;