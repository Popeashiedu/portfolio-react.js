import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import {
    Switch,
    Link,
    Route
} from 'react-router-dom';

function Contact() {
    return <div className="h-full select-none">
        <Switch>
            <Route path="/contact">
                <div className="mt-10 md:my-8 lg:my-12 xl:my-16">
                    <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                        <div className="text-xs sm:text-sm lg:text-base">
                            <div className="py-4 my-4 md:my-8 rounded-lg bg-gray-900">
                                <h1 className="font-bold text-center text-base md:text-lg">Contact me via</h1>
                            </div>
                            <div className="md:flex flex-wrap justify-around">
                                <a target="_blank" href="mailto:benedictashiedu@gmail.com" className="md:w-5/12">
                                    <div className="text-center bg-gray-900 rounded-lg p-4 mb-4 shadow transform hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500">
                                        <p> <i className="fas fa-envelope mr-3"></i>benedictashiedu@gmail.com</p>
                                    </div>
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/benedict-ashiedu/" className="md:w-5/12">
                                    <div className="text-center bg-gray-900 rounded-lg p-4 mb-4 shadow transform hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500">
                                        <p> <i className="fab fa-linkedin mr-3"></i>Benedict Ashiedu</p>
                                    </div>
                                </a>
                                <a target="_blank" href="https://twitter.com/PopeAshiedu" className="md:w-5/12">
                                    <div className="text-center bg-gray-900 rounded-lg p-4 mb-4 transform hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500">
                                        <p> <i className="fab fa-twitter mr-3"></i>@PopeAshiedu</p>
                                    </div>
                                </a>
                                <a target="_blank" href="https://www.facebook.com/bennyeasy.ashiedu" className="md:w-5/12">
                                    <div className="text-center bg-gray-900 rounded-lg p-4 mb-4 transform hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500">
                                        <p> <i className="fab fa-facebook-square mr-3"></i>Benedict Ashiedu</p>
                                    </div>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/invites/contact/?i=1ek3z3ocg3w5e&utm_content=5pe6sj" className="md:w-5/12">
                                    <div className="text-center bg-gray-900 rounded-lg p-4 mb-4 transform hover:-translate-y-1 hover:scale-105 transition ease-in-out duration-500">
                                        <p> <i className="fab fa-instagram-square mr-3"></i>@pope_ashiedu</p>
                                    </div>
                                </a>

                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="flex justify-between mt-2 items-center">

                        <Link to="/gallery" className="cursor-pointer flex items-center bg-gray-900 h-8 rounded-lg pb-4">
                            <FontAwesomeIcon
                                icon={faLongArrowAltLeft}
                                className="mt-1"
                            />
                            <p className="pl-3">Gallery</p>
                        </Link>

                    </div>
                </div>
            </Route>
        </Switch>
    </div>
}

export default Contact