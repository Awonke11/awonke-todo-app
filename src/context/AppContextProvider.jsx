import { createContext, useState } from 'react';

const AppContextProvider = createContext()
export const AppMainContext = ({children}) => {

    const [theme, setTheme] = useState('light');
    const [selectedLight, setSelectedLight] = useState('clicked')
    const [selectedDark, setSelectedDark] = useState('')
    const [notStartedNumber, setNotStartedNumber] = useState(0)
    const [inProgressNumber, setInProgressNumber] = useState(1)
    const [completedNumber, setCompletedNumber] = useState(3)
    const [user, setUser] = useState({
        username: 'Username',
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
            setSelectedDark,
            inProgressNumber,
            setInProgressNumber,
            notStartedNumber,
            setNotStartedNumber,
            completedNumber,
            setCompletedNumber
        }}>
            {children}
        </AppContextProvider.Provider>
    )
}
export default AppContextProvider;