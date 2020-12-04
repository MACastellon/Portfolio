import React, {useEffect, useState} from 'react';
import en_projects_data from "../../data/en_projects";
import fr_projects_data from "../../data/fr_projects";

const LanguageContext = React.createContext();

const LanguageProvider = props => {
    const en_projects = [...en_projects_data];
    const fr_projects = [...fr_projects_data];

    fr_projects.reverse()
    en_projects.reverse()

    const [language, setLanguage] = useState(null);
    const [projects, setProjects] = useState(fr_projects);


    useEffect(  () => {
        if (window.localStorage != null) {
            setLanguage(window.localStorage.getItem("lang"));
            if (language === "fr") {
                setProjects(fr_projects);
            } else {
                setProjects(en_projects);
            }
        }
    },[language])


    const changeLanguage =  (language) => {
        setLanguage(language);
        window.localStorage.setItem("lang" , language);
    }

    const value = {language : language, projects: projects,setProjects : setProjects, changeLanguageFn : changeLanguage}
    return (
        <LanguageContext.Provider value={value}>
            {props.children}
        </LanguageContext.Provider>
    )
}

const LanguageConsumer = LanguageContext.Consumer;
export {LanguageProvider, LanguageConsumer}
export default LanguageContext;