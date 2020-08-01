import React, { Component } from 'react';
import './About.scss'
import { Row, Col } from 'react-bootstrap';
class About extends Component {
    render() {
        return (
            <div className="container about-me" id="skills">
                <section className="section about-2 position-relative">
                    <div className="container">
                        <Row>
                                <Col className="col-lg-6 col-md-4">
                                    <div className="about-item pr-3 mb-5 mb-lg-0">
                                        <span className="h6 text-color">Who am I</span>
                                        <h2 className="mt-3 mb-4 position-relative content-title">I'm a Software Developer based in
                                            Vilnius, Lithuania.</h2>
                                        <p className="mb-5" style={{color: 'white'}}>I have a passion for software engineering and love to
                                            create desktop and mobile applications.
                                            I enjoy each aspect of the development process, and love building sites & mobile apps
                                            from start to finish.</p>
                                    </div>
                                </Col>
                                <Col className="col-lg-3 col-md-4">
                                    <div className="about-item pr-3 mb-5 mb-lg-0">
                                        <span className="h6 text-color">What I do</span>
                                        <h2 className="mt-3 mb-4 position-relative content-title">Backend</h2>
                                        <p className="mb-5" style={{color: 'white'}}>Python, Java, MongoDB, MySQL, C#, C++</p>
                                        <h2 className="mt-3 mb-4 position-relative content-title">Framework</h2>
                                        <p className="mb-5" style={{color: 'white'}}>Django, PyQT, .NET, Koa</p>
                                    </div>
                                </Col>

                                <Col className="col-lg-3 col-md-4">
                                    <div className="about-item pr-3 mb-4 mb-lg-0">
                                        <br/>
                                        <h2 class="mt-3 mb-4 position-relative content-title">Frontend</h2>
                                        <p class="mb-5" style={{color: 'white'}}>React, HTML, CSS, Node.js, Angular</p>
                                        <h2 class="mt-3 mb-4 position-relative content-title">Others</h2>
                                        <p class="mb-5" style={{color: 'white'}}>AWS, Unit Testing</p>
                                    </div>
                                </Col>
                        </Row>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;