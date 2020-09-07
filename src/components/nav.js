import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring'
import {
    Link,
} from 'react-router-dom';

function Nav() {
    const [menu, setMenu] = useState(false);

    const transitions = useTransition(menu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })
    let icons = faBars
    let navList = null

    if (menu) {
        icons = faTimes
        navList = <div className="bg-gray-800 h-full w-full fixed left-0 top-0 z-10 transition duration-3000 ease-in-out">
            <ul className="flex flex-col items-center h-full justify-around">
                <li className="mb-4 text-gray-200 md:text-xl lg:text-3xl" onClick={() => setMenu(!menu)}>
                    <Link to="/"  >Home</Link>

                </li>
                <li className="mb-4 text-gray-200 md:text-xl lg:text-3xl" onClick={() => setMenu(!menu)}>
                    <Link to="/about">About Me</Link>
                </li>
                <li className="mb-4 text-gray-200 md:text-xl lg:text-3xl" onClick={() => setMenu(!menu)}>
                    <Link to="/resume" >Resume</Link>
                </li>
                <li className="mb-4 text-gray-200 md:text-xl lg:text-3xl" onClick={() => setMenu(!menu)}>
                    <Link to="/gallery">My Work</Link>
                </li>
                <li className="mb-4 text-gray-200 md:text-xl lg:text-3xl" onClick={() => setMenu(!menu)}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>

    }


    let smallScreenNav = <nav className="flex lg:px-0 justify-between items-center pt-2 transition duration-500 ease-in-out">
        <div>
            <h1>popeAshiedu</h1>
        </div>
        {navList}
        <div className="cursor-pointer text-3xl xl:text-5xl z-20 text-gray-200">
            <FontAwesomeIcon
                icon={icons}
                onClick={() => setMenu(
                    !menu
                )}
            />
        </div>

    </nav>


    return (
        <div>
            {
                transitions.map(({ item, props, key }) =>
                    <animated.div
                        key={key}
                        style={props}>
                        {navList}
                        {/* {smallScreenNav} */}
                    </animated.div>
                )
            }
            {smallScreenNav}
            {navList}


        </div>
    );
}
export default Nav