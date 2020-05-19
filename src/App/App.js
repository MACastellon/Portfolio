import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ProjectSlider from "./components/Projects/Project/ProjectSlider";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import ChooseLanguage from "./components/ChooseLanguage/ChooseLanguage";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, Redirect} from "react-router-dom";
import "./App.css"
import {Container} from "react-bootstrap";
import {LanguageProvider, LanguageConsumer} from "./context/LanguageContext";

const App = (props) => {


    const showRoute = (context) => {
        return context.language != null?(
            <main className={"main"}>
                Langue choisi = {context.language}
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
        ) : (
            <main className={"main"}>
                Choisi ta langue
                <Container>
                    <div className={"container-content"}>
                        <Switch>
                            <Route path="/" component={ChooseLanguage}/>
                            <Redirect to={"/"} />
                        </Switch>
                    </div>
                </Container>
            </main>
        )
    }

    return (
        <div>
            <LanguageProvider>
                <Header/>
                <LanguageConsumer>
                    {showRoute}
                </LanguageConsumer>
                <Footer/>
            </LanguageProvider>

        </div>
    )
}

export default App;
