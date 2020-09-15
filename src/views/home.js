import React from 'react';
import pope from '../pope.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Switch, Route, Link } from 'react-router-dom';

function Home() {
    return <div className="h-full select-none">
        <Switch>
            <Route exact path="/">
                <div className="mt-12 md:my-8 lg:my-12 xl:my-16">
                    <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
                        <div className="flex flex-col md:flex-row items-center md:items-center">
                            <div className="w-6/12 sm:w-4/12 md:w-8/12 rounded-full bg-white">
                                <img src={pope} alt="pope ashiedu image" className="rounded-full w-full h-full" />
                            </div>
                            <div className="mt-3 md:ml-4 w-full text-center md:text-left md:pl-4">
                                <h1 className="md:text-2xl lg:text-4xl xl:text-5xl">Hi there, <br /> I am <strong>Benedict Ashiedu.</strong> </h1>
                                <div className="flex justify-between lg:w-11/12 xl:w-10/12 text-xs md:text-sm lg:text-base xl:text-lg md:mt-4 lg:mt-6">
                                    <div>
                                        <p className="my-4"><FontAwesomeIcon
                                            icon={faCheck}
                                            className="" /> Engineer </p>
                                    </div>
                                    <div>
                                        <p className="my-4"><FontAwesomeIcon
                                            icon={faCheck}
                                            className="" /> Developer </p>
                                    </div>
                                    <div>
                                        <p className="my-4"><FontAwesomeIcon
                                            icon={faCheck}
                                            className="" /> Human </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="flex justify-end mt-2 items-center">
                        <Link to="/about" className="flex mt-2 items-center cursor-pointer bg-gray-900 h-8 rounded-lg">

                            <p className="pr-3">Continue</p>
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

export default Home