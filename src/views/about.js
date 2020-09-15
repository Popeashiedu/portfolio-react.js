import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import {
    Switch,
    Link,
    Route
} from 'react-router-dom';

function About() {
    return <div className="h-full">
        <Switch>
            <Route path="/about">
                <div className="mt-10 md:my-8 lg:my-12 xl:my-16">
                    <div className="bg-gray-800 p-4 md:p-8 rounded-lg" >
                        <div className="overflow-y-scroll md:overflow-y-auto text-xs sm:text-sm lg:text-base about-div">
                            {/* <p className="">A lover of problem solving, critical thinking and challenges. </p> <br /> */}
                            <p> As a first-class graduate of Electrical/Electronics Engineering,
                            I have a curious mind suited for problem solving and solution provison.
                            This propensity has transitioned nicely into my journey as a web developer.
                            I have experience in building various projects using the following languages and frameworks: </p>
                            <ul className="my-3">
                                <li> <FontAwesomeIcon icon={faAward} /> HTML5/CSS3</li>
                                <li> <FontAwesomeIcon icon={faAward} /> Javascript</li>
                                <li> <FontAwesomeIcon icon={faAward} /> Bootstrap</li>
                                <li> <FontAwesomeIcon icon={faAward} /> React</li>
                                <li> <FontAwesomeIcon icon={faAward} /> Python/Django</li>
                            </ul>
                            <p>
                                I have also trained and worked as a telecommunications engineer in multiple
                                telecommunications companies within and outside the shores of Nigeria,
                                and this has exposed me to a wide range of work experience and people from all works of life.
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="flex justify-between mt-2 items-center">

                        <Link to="/" className="cursor-pointer flex items-center bg-gray-900 h-8 rounded-lg">
                            <FontAwesomeIcon
                                icon={faLongArrowAltLeft}
                                className="mt-1"
                            />
                            <p className="pl-3">Home</p>
                        </Link>


                        <Link to="/resume" className="flex mt-2 items-center cursor-pointer bg-gray-900 h-8 rounded-lg">

                            <p className="pr-3">Resume</p>
                            <FontAwesomeIcon
                                icon={faLongArrowAltRight}
                                className="mt-1"
                            />
                        </Link>

                    </div>
                </div>
            </Route>
        </Switch>
    </div>
}

export default About