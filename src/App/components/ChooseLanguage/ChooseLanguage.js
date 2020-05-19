import React, {useContext} from "react";
import {Row, Col} from "react-bootstrap";
import LanguageContext from "../../context/LanguageContext";

const ChooseLanguage = () => {
    const {changeLanguageFn} = useContext(LanguageContext);
    return (
        <div>
            <Row>
                <Col>
                    <h2>Choisi une langue</h2>
                    <button onClick={() => {changeLanguageFn("fr")} }>Français</button>
                </Col>
                <Col>
                    <h2>Choose a language</h2>
                    <button onClick={() => {changeLanguageFn("en")} }>English</button>
                </Col>
            </Row>
        </div>
    )
}

export default ChooseLanguage;