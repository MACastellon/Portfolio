import React, {useContext} from "react";
import {Row, Col, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import LanguageContext from "../../context/LanguageContext";

const Home = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const {language} = useContext(LanguageContext);
    return (

        <>
            <h2 className={"underline"}>{language === "fr" ? ("À propos") : ("About")}</h2>

            <Row lg={2} md={2} xs={1}>
                <Col lg={9}>
                    {language === "fr" ? (
                        <>
                            <p>
                                Bonjour, je suis Marc-André Castellon et je suis un <b>développeur full stack</b>. J'ai fait une Technique d’intégration multimédia au cégep de Saint-Jérôme.
                                J’adore <b>programmer</b> que ça soit des <b>jeux</b> ou des <b>applications web</b>.
                            </p>
                            <p>
                                J'aime relever des défis et apprendre des nouvelles choses! Lorsque j'ai du temps libre, j'aime travailler sur des <b>projets personnels</b> et prendre des <b>cours en ligne</b> afin d'approfondir mes connaissances.
                            </p>
                        </>

                    ):(
                        <>
                            <p>
                                Hello, my name is Marc-André Castellon and I’m a <b>full stack developer</b>. I did a Technique in multimedia integration
                                at Saint-Jérôme’s CEGEP. I love to <b>code</b>, whether it’s <b>games</b> or <b>web applications</b>.

                            </p>
                            <p>
                                I like to take on challenges and learn new things. When I have some spare time I like to work on <b>hobby projects</b> and take <b>online courses</b> in order to deepen my knowledge.
                            </p>
                        </>
                    )}

                </Col>
                <Col lg={3}>
                    <div className={"profil-img"}>
                        <Image src={"/images/img_profil.jpg"} fluid alt={""}/>
                    </div>
                </Col>
            </Row>
            <h2 className={"underline"}>Technologies</h2>
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
                        <div className={"knowledge-logo"}>
                            <img  width={"90px"} src="https://www.php.net//images/logos/new-php-logo.svg" alt="Logo de C#"/>
                            <span id={"logo-span"}>PHP</span>
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
                            <span id={"logo-span"}>React.js</span>
                        </div>
                        <div id={'jquery-logo'} className={"knowledge-logo"}>
                            <img   width={"65px"} src="/images/jquery.png" alt="jQuery logo"/>
                            <span id={"logo-span"}>jQuery</span>
                        </div>
                        <div id={'sass-logo'} className={"knowledge-logo"}>
                            <img   width={"65px"} src="/images/sass.png" alt="Sass logo"/>
                            <span id={"logo-span"}>Sass</span>
                        </div>
                        <div className={"knowledge-logo"}>
                            <img  width={"55px"} src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap Logo"/>
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
                            <img  width={"80px"} src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js Logo"/>
                            <span id={"logo-span"}>Node.js</span>
                        </div>
                        <div className={"knowledge-logo"}>
                            <img  width={"140px"} src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express.js Logo"/>
                            <span id={"logo-span"}>Express.js</span>
                        </div>
                        <div id={"laravel-logo"} className={"knowledge-logo"}>
                            <img  width={"60px"} src="https://laravel.com/img/logomark.min.svg" alt="Laravel Logo"/>
                            <span id={"logo-span"}>Laravel</span>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={"contact-title"}>
                        <h3>{language === "fr" ? ("Outils"):("Tools")}</h3>
                    </div>
                    <div className={"skills"}>
                        <div className={"knowledge-logo"}>
                            <img  width={"65px"} src="/images/git.png" alt="Jira Logo"/>
                            <span id={"logo-span"}>Git</span>
                        </div>
                        <div className={"knowledge-logo"}>
                            <img  width={"60px"} src="/images/sourcetree.svg" alt="Sourcetree Logo"/>
                            <span id={"logo-span"}>Sourcetree</span>
                        </div>
                        <div className={"knowledge-logo"}>
                            <img  width={"65px"} src="/images/jira.svg" alt="Jira Logo"/>
                            <span id={"logo-span"}>Jira</span>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={"contact-title"}>
                        <h3>{language === "fr" ? ("Engin"):("Engine")}</h3>
                    </div>
                    <div className={"skills"}>
                        <div className={"knowledge-logo"}>
                            <img  width={"55px"} src="https://seeklogo.com/images/U/unity-logo-988A22E703-seeklogo.com.png" alt="Unity Logo"/>
                            <span id={"logo-span"}>Unity</span>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className={"contact-title"}>
                        <h3>{language === "fr" ? ("Base de données"):("Database")}</h3>
                    </div>
                    <div className={"skills"}>
                        <div className={"knowledge-logo"}>
                            <img  width={"110px"} src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg" alt="MongoDB Logo"/>
                            <span id={"logo-span"}>MongoDB</span>
                        </div>
                        <div className={"knowledge-logo"}>
                            <img  width={"80px"} src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt="SQL Logo"/>
                            <span id={"logo-span"}>MySQL</span>
                        </div>
                    </div>
                </Col>
            </Row>
           <div className="center "><Link  to={"/projects"} class={"btLink btPortfolio"}>{language === "fr" ? ("Voir Portfolio"):("See Portfolio")} <FontAwesomeIcon icon={faArrowRight}/></Link></div>
        </>

    )
}

export default Home;