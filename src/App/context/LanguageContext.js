import React, {useEffect, useState} from 'react';

const LanguageContext = React.createContext();

const LanguageProvider = props => {

    const [language, setLanguage] = useState(null);

    useEffect( () => {
        if (window.localStorage != null) {
            setLanguage(window.localStorage.getItem("lang"));
        }
    }, [])
    const changeLanguage = async (language) => {
       setLanguage(language)
        window.localStorage.setItem("lang" , language)
    }

    const value = {language : language, changeLanguageFn : changeLanguage}
    return (
        <LanguageContext.Provider value={value}>
            {props.children}
        </LanguageContext.Provider>
    )
}

const LanguageConsumer = LanguageContext.Consumer;
export {LanguageProvider, LanguageConsumer}
export default LanguageContext;