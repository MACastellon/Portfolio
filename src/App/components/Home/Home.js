import React, {useContext} from "react";
import {Row, Col, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import LanguageContext from "../../context/LanguageContext";

const Home = () => {
    const {language} = useContext(LanguageContext);
    return (

        <>
            <h2 className={"underline"}>Marc-André Castellon</h2>
            <Row lg={2} md={2} xs={1}>
                <Col lg={9}>
                    {language === "fr" ? (
                        <p>
                            Je suis finissant en techniques d’intégration multimédia et ma passion c’est la programmation !
                            Quand je suis passionné dans un domaine quelconque je suis prêt à me donner corps et âme, car je n’aime pas faire les choses à moiter.
                            J’aime relever des défis et je suis prêt relever des montages. Alors j’espère pourvoir bientôt en relever avec vous!
                        </p>
                    ):(
                        <p>
                           English Version
                        </p>
                    )}

                </Col>
                <Col lg={3}>
                    <div className={"profil-img"}>
                        <Image src={"/images/img_profil.jpg"} fluid alt={""}/>
                    </div>
                </Col>
            </Row>
            <h2 className={"underline"}>{language === "fr" ? ("Mes Connaissances"):("Knowledge")}</h2>
            <Row lg={3} md={3} xs={1}>
                <Col>
                    <div className={"contact-title"}>
                        <h3>{language === "fr" ? ("Langages"):("Languages")}</h3>
                    </div>
                    <div className={"skills"}>
                        <div className={"knowledge-logo"}>
                            <img  width={"55px"} src="/images/csharp_logo.png" alt="Logo de C#"/>
                            <span id={"logo-span"}>C#</span>
                        </div>
                        <div className={"knowledge-logo"}>
                            <img  width={"55px"} src="/images/javascript-1.svg" alt="Logo de C#"/>
                            <span id={"logo-span"}>Javascript <br/> (ES6)</span>
                        </div>
                        <div className={"knowledge-logo"}>
                            <img  width={"60px"} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1200px-HTML5_Badge.svg.png"} alt={"Logo de Html5"}/>
                            <span id={"logo-span"}>Html 5</span>
                        </div>
                        <div className={"knowledge-logo"}>
                            <img width={"55px"} src="/images/css_logo.png" alt="Official Css Logo Png" />
                            <span id={"logo-span"}>CSS 3</span>
                        </div>
                    </div>
                </Col>

                <Col>
                    <div className={"contact-title"}>
                        <h3>Front End</h3>
                    </div>
                    <div className={"skills"}>
                        <div className={"knowledge-logo"}>
                            <img  width={"55px"} src="/images/React-icon.svg" alt="Logo de ReactJs"/>
                            <span id={"logo-span"}>React</span>
                        </div>
                        <div className={"knowledge-logo"}>
                            <img  width={"55px"} src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Logo de Bootstrap"/>
                            <span id={"logo-span"}>Bootstrap</span>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={"contact-title"}>
                        <h3>Back End</h3>
                    </div>
                    <div className={"skills"}>
                        <div className={"knowledge-logo"}>
                            <img  width={"80px"} src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Logo de C#"/>
                            <span id={"logo-span"}>Node Js</span>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={"contact-title"}>
                        <h3>{language === "fr" ? ("Logiciels"):("Softwares")}</h3>
                    </div>
                    <div className={"skills"}>
                        <div className={"knowledge-logo"}>
                            <img  width={"55px"} src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Logo de C#"/>
                            <span id={"logo-span"}>Photoshop</span>
                        </div>
                        <div className={"knowledge-logo"}>
                            <img  width={"55px"} src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" alt="Logo de C#"/>
                            <span id={"logo-span"}>Illustrator</span>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={"contact-title"}>
                        <h3>{language === "fr" ? ("Engin"):("Engine")}</h3>
                    </div>
                    <div className={"skills"}>
                        <div className={"knowledge-logo"}>
                            <img  width={"55px"} src="https://seeklogo.com/images/U/unity-logo-988A22E703-seeklogo.com.png" alt="Logo de C#"/>
                            <span id={"logo-span"}>Unity</span>
                        </div>
                    </div>
                </Col>
            </Row>
           <div className="center "><Link  to={"/projects"} class={"btLink btPortfolio"}>{language === "fr" ? ("Voir Portfolio"):("See Portfolio")} <FontAwesomeIcon icon={faArrowRight}/></Link></div>
        </>

    )
}

export default Home;