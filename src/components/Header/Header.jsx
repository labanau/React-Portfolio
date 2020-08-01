import React, { Component } from 'react';
import './Header.scss';
import { Container } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
                <header className="header">
                    <Container>
                        <h6 className="mb-0">
                                Hi, my name is
                        </h6>
                        <h1 className="authorName">Rokas Labanauskas</h1>
                        <div className="paragraph">
                            <p>
                                    I'm a Software Developer based in Vilnius, Lithuania.
                                    I have a passion for software engineering and love to create desktop and mobile applications.
                            </p>
                        </div>
                        <button className="btn btn-main goContact" name="submit" type="submit">CONTACT ME</button>
                    </Container>
                </header>
        );
    }
}

export default Header;