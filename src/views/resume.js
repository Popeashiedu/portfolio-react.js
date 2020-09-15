import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import {
    Switch,
    Link,
    Route
} from 'react-router-dom';



function Resume() {
    const [showEngineering, setShowEngineering] = useState(false)
    const [showDeveloper, setShowDeveloper] = useState(true)

    let developerResume
    let engineerResume

    if (showDeveloper) {
        developerResume = <div className="py-4 px-2 md:px-4 bg-white text-black rounded-b-lg">
            <div>
                <h1 className="font-bold text-lg">Frontend Web Developer</h1>
                <h2 className="mt-2 text-gray-700 font-bold">HNG Internship</h2>
                <h3 className="mt-2 italic">Jun 2020 – Aug 2020</h3>
                <p className="mt-2">A 3-month intensive competition style internship that provides hands-on experience of collaborating on real-world problems and providing solution to them through building web and mobile based apps.</p>
                <ul className="mt-2">
                    <li > <FontAwesomeIcon icon={faCode} className="mr-2 text-xs" />Top 50 out of 11,000 interns</li>
                    <li> <FontAwesomeIcon icon={faCode} className="mr-2 text-xs" />HTML5, CSS3, Javascript, Bootstrap, Python, Django, Laravel</li>
                    <li> <FontAwesomeIcon icon={faCode} className="mr-2 text-xs" />Delivered multiple web pages for team and individual projects</li>
                    <li> <FontAwesomeIcon icon={faCode} className="mr-2 text-xs" />Built APIs with django rest framework</li>
                    <li> <FontAwesomeIcon icon={faCode} className="mr-2 text-xs" />Active experience working with Git and version control</li>
                    <li> <FontAwesomeIcon icon={faCode} className="mr-2 text-xs" />Acquired proper documentation skills</li>
                    <li> <FontAwesomeIcon icon={faCode} className="mr-2 text-xs" />Collaboration on several projects using Github and Clubhouse</li>
                </ul>
            </div>
            <div className="mt-4">
                <h1 className="font-bold text-lg">Web Developer</h1>
                <h2 className="mt-2 text-gray-700 font-bold">StartNG Internship</h2>
                <h3 className="mt-2 italic">Mar 2020 – Apr 2020</h3>
                <p className="mt-2">A program geared at building Tech minded individuals</p>
                <ul className="mt-2">
                    <li > <FontAwesomeIcon icon={faCode} className="mr-2 text-xs" />Gained valuable knowledge about UX/UI design</li>
                    <li> <FontAwesomeIcon icon={faCode} className="mr-2 text-xs" />Completed IBM design thinking course</li>
                    <li> <FontAwesomeIcon icon={faCode} className="mr-2 text-xs" />Built projects solely on vanilla HTML, CSS and Javascript</li>
                    <li> <FontAwesomeIcon icon={faCode} className="mr-2 text-xs" />Built APIs with django rest framework</li>
                    <li> <FontAwesomeIcon icon={faCode} className="mr-2 text-xs" />Introduction to django as a backend framework</li>
                    <li> <FontAwesomeIcon icon={faCode} className="mr-2 text-xs" />Introduction to Git and version control</li>
                </ul>

            </div>
        </div>
    }
    if (showEngineering) {
        developerResume = <div className="py-4 px-2 md:px-4 bg-white text-black rounded-b-lg">
            <div className="">
                <h1 className="font-bold text-lg">Fiber Optics Engineer</h1>
                <h2 className="mt-2 text-gray-700 font-bold">Globacom Limited</h2>
                <h3 className="mt-2 italic">Nov 2018 – Mar 2020</h3>
                <p className="mt-2">Worked as the fiber lead or the Northern-Ghana region.</p>
                <ul className="mt-2">
                    <li > <FontAwesomeIcon icon={faWrench} className="mr-2 text-xs" />Managed the fiber network of Northern-Ghana, achieving an availability of ninety-nine percent in 2019.</li>
                    <li> <FontAwesomeIcon icon={faWrench} className="mr-2 text-xs" />Performed route planning and implementation of new fiber optic routes for the network.</li>
                    <li> <FontAwesomeIcon icon={faWrench} className="mr-2 text-xs" />Supervised the quick resolution of unforeseen network-related issues.</li>
                    <li> <FontAwesomeIcon icon={faWrench} className="mr-2 text-xs" />Monitored cell sites remotely and performed timely escalations when necessary.</li>
                    <li> <FontAwesomeIcon icon={faWrench} className="mr-2 text-xs" />Analyzed network trends and provided reports recommending preventive maintenance measures.</li>
                    <li> <FontAwesomeIcon icon={faWrench} className="mr-2 text-xs" />Liaised with other departments to carry out special inter-departmental projects.</li>
                </ul>
            </div>
            <div className="mt-4">
                <h1 className="font-bold text-lg">Field Service Engineer Trainee</h1>
                <h2 className="mt-2 text-gray-700 font-bold">IHS Towers</h2>
                <h3 className="mt-2 italic">Oct 2017 – Feb 2018</h3>
                <p className="mt-2">A technical training to build field service engineers in hard and soft skills</p>
                <ul className="mt-2">
                    <li > <FontAwesomeIcon icon={faWrench} className="mr-2 text-xs" />Audited various cell sites on load consumption, diesel level and equipment integrity.</li>
                    <li> <FontAwesomeIcon icon={faWrench} className="mr-2 text-xs" />Acquired knowledge on troubleshooting problems on cell sites.</li>
                    <li> <FontAwesomeIcon icon={faWrench} className="mr-2 text-xs" />Acquired adequate knowledge about passive and active equipment on cell sites.</li>
                    <li> <FontAwesomeIcon icon={faWrench} className="mr-2 text-xs" />Participated in intensive soft skills trainings.</li>
                    <li> <FontAwesomeIcon icon={faWrench} className="mr-2 text-xs" />Remotely monitored cell sites and ensured proper escalation in cases of site shut-down.</li>
                    <li> <FontAwesomeIcon icon={faWrench} className="mr-2 text-xs" />Supervised contractors working on cell sites during maintenance period.</li>
                </ul>

            </div>
        </div>
    }

    return <div className="h-full">
        <Switch>
            <Route path="/resume">
                <div className="mt-8 md:mt-0 lg:mt-4 xl:mt-8 select-none">
                    <div className="bg-gray-800 text-grey-200 p-4 md:p-8 rounded-lg">
                        <div className="overflow-y-scroll md:overflow-y-auto text-xs sm:text-sm lg:text-base rounded-b-lg resume-div">
                            <ul className="flex border-b">
                                <li className="-mb-px mr-1 w-6/12" onClick={() => setShowEngineering(false)}>
                                    <a className="focus:bg-white focus:text-gray-900 inline-block border-l border-t border-r focus:rounded-t py-2 px-4 text-blue-700 font-semibold w-full" href="#Developer">Developer</a>
                                </li>
                                <li className="mr-1 w-6/12">
                                    <a className="bg-grey-900 border-gray-900 focus:bg-white :border-l:border-t-border-r focus:rounded-t  inline-block py-2 px-4 text-grey-200 focus:text-gray-900 font-semibold w-full" href="#education" onClick={() => setShowEngineering(true)}>Engineering</a>
                                </li>
                            </ul>
                            {developerResume}
                        </div>
                    </div>
                    <div className="flex justify-between mt-2 items-center">

                        <Link to="/about" className="cursor-pointer flex items-center bg-gray-900 h-8 rounded-lg">
                            <FontAwesomeIcon
                                icon={faLongArrowAltLeft}
                                className="mt-1"
                            />
                            <p className="pl-3">About</p>
                        </Link>


                        <Link to="/gallery" className="flex mt-2 items-center cursor-pointer bg-gray-900 h-8 rounded-lg">

                            <p className="pr-3">My work</p>
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

export default Resume