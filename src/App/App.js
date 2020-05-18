import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProjectSlider from "./components/Projects/Project/ProjectSlider";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, Redirect} from "react-router-dom";
import "./App.css"
import {Container} from "react-bootstrap";

const App = (props) => {
    const [language, setLanguage] = useState("fr");

    const changeLanguage = (language) => {
        if (language == "fr") {
            setLanguage("en")
        } else {
            setLanguage("fr")
        }
    }
   /* <div>{language}</div>
    <button onClick={() => changeLanguage(language)}>{language == "fr" ? ("en") : ("fr")}</button>*/
    return (
        <>
            <Header/>

            <main className={"main"}>

                <Container>
                    <div className={"container-content"}>
                        <Switch>
                            <Route path="/home" component={Home}/>
                            <Route path="/projects/:id" component={ProjectSlider}/>
                            <Route path="/projects" component={Projects}/>
                            <Route path="/contact/" component={Contact}/>
                            <Redirect to={"/home"} />
                        </Switch>
                    </div>
                </Container>
            </main>
            <Footer/>
        </>
    )
}

export default App;
