import React, { Component } from 'react';
import './Education.scss'

class Education extends Component {
    render() {
        return (
            <div>
                <div className="container education">
                    <div className="container">
                        <h2 className="font-weight-bold text-left my-4 stroke" id="projects">Work Experience</h2>
                    </div>
                    <div className="row uni">
                        <div className="col-md-9 col-sm-6">
                            <div className="tabs-left">
                                <div className="tab-content">
                                    <div className="tab-pane2 active" id="Amazon">
                                        <h2>Amazon</h2>
                                        <div className="uni-meta">
                                            <h5>Fulfillment Asocciate</h5>
                                            <h6 style={{color: "aquamarine"}}>Problem Solver</h6>
                                            <h6 style={{fontSize: "0.7em"}}>Oct 2018 - Mar 2019</h6>
                                        </div>
                                        <p style={{fontSize: "0.85em", paddingTop: "15px", paddingBottom: "2px"}}>
                                        Received positive remarks from supervisors, team-leads and managers on numerous occasions.
                                            Was appointed to help colleagues understanding how to work efficiently while working in a team.
                                        </p>
                                    </div>
                                    <div className="stroke"></div>
                                    <div className="tab-pane2" id="Tesonet">
                                        <h2>Tesonet</h2>
                                        <div className="uni-meta">
                                            <h5>IT Support Specialist</h5>
                                            <h6 style={{color: "aquamarine"}}>Connection Issues Department</h6>
                                            <h6 style={{fontSize: "0.7em"}}>May 2018 - Sep 2018</h6>
                                        </div>
                                        <p style={{fontSize: "0.85em", paddingTop: "15px", paddingBottom: "2px"}}>
                                        Offered support for “Tesonet” product customers who experienced
                                            technical problems with their computers, software and routers and
                                            ensure great customer experience.
                                            Efficiently managed the network infrastructure and provided desktop
                                            support to worldwide locations, with of positive rating of 98%.
                                            Charged with instructing new agents how to work, communicate with
                                            customers and tough them vital skills to solve customer problems
                                            issues.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container education">
                    <div className="container">
                        <h2 className="font-weight-bold text-left my-4 stroke" id="projects">Education</h2>
                    </div>
                    <div className="row uni">
                        <div className="col-md-9 col-sm-6">
                            <div className="tabs-left">
                                <div className="tab-content">
                                    <div className="tab-pane2" id="1">
                                        <h2>Coventry University</h2>
                                        <div className="uni-meta">
                                            <h5>Bachelor Of Computer Science</h5>
                                            <h6 style={{color: "aquamarine"}}>Software Development</h6>
                                        </div>
                                        <p style={{fontSize: "0.85em", paddingTop: "15px", paddingBottom: "2px"}}>
                                            I have studied Computer Science in Coventry University. Here I have gained strong
                                            knowledge a wide variety of subjects including data structures, networking, algorithms
                                            and other programming principles and uses.
                                        </p>
                                        <p style={{fontStyle: "italic", color: "aquamarine", fontSize: "0.75em"}}><strong
                                                style={{color: "white"}}> Graduated
                                            in: </strong>2020 July First Class Honours</p>
                                    </div>
                                    <div className="stroke"></div>
                                    <div className="tab-pane2" id="2">
                                        <h2>Vilnius Žemynos gymnasium</h2>
                                        <div className="uni-meta">
                                            <h5>High School</h5>
                                            <h6 style={{color: "aquamarine"}}>Programming and Algorithms</h6>
                                        </div>
                                        <p style={{fontSize: "0.85em", paddingTop: "15px", paddingBottom: "2px"}}>
                                            I have studied programming and algorithms. I have gained base knowledge of programming
                                            which
                                            later on I
                                            applied in University of Coventry.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;