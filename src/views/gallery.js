import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {
    Switch,
    Link,
    Route
} from 'react-router-dom';
import w1 from '../w1.png';
import w2 from '../w2.png';
import w3 from '../w3.png';
import w4 from '../w4.png';
import w5 from '../w5.png';
import w6 from '../w6.png';
import w7 from '../w7.png';
import w8 from '../w8.png';
import w9 from '../w9.png';







function Gallery() {
    const [works, setWorks] = useState(
        [{
            id: 1,
            title: "Glorious Grace Ministries",
            image: w1,
            type: "Solo project",
            language: ["HTML5/CSS3", "Javascript", "Python/Django"],
            url: "http://www.gloriousgraceministries.org.ng"
        },
        {
            id: 2,
            title: "Get Viral",
            image: w2,
            type: "Collaboration",
            language: ["HTML5/CSS3", "Javascript", "PHP/Laravel"],
            url: "https://getviral.ml/"
        },
        {
            id: 3,
            title: "Shades-nator",
            image: w3,
            type: "Solo project",
            language: ["HTML5/CSS3", "Javascript", "Python/Django"],
            url: "https://shadesnator.herokuapp.com/"
        },
        {
            id: 4,
            title: "HouseVerify",
            image: w4,
            type: "Solo project",
            language: ["HTML5/CSS3", "Javascript", "Python/Django"],
            url: "https://houseverify.herokuapp.com/"
        },
        {
            id: 5,
            title: "Flowrich Portfolio",
            image: w5,
            type: "Solo project",
            language: ["HTML5/CSS3", "Javascript", "Bootstrap"],
            url: "https://flowrich-portfolio.netlify.app/"
        },
        {
            id: 6,
            title: "Doe Portfolio",
            image: w6,
            type: "Solo project",
            language: ["HTML5/CSS3", "Javascript", "Bootstrap"],
            url: "https://doe-portfolio.netlify.app/"
        },
        {
            id: 7,
            title: "Mae Portfolio",
            image: w7,
            type: "Solo project",
            language: ["HTML5/CSS3", "Javascript", "Bootstrap"],
            url: "https://mae-portfolio.netlify.app/"
        },
        {
            id: 8,
            title: "Cosy lines furniture site",
            image: w8,
            type: "Solo project",
            language: ["HTML5/CSS3", "Javascript", "Bootstrap"],
            url: "https://cosy-furniture-site.netlify.app/"
        },
        {
            id: 9,
            title: "Edu app landing page",
            image: w9,
            type: "Solo project",
            language: ["HTML5/CSS3", "Javascript", "Bootstrap"],
            url: "https://edu-app-landing-page.netlify.app"
        },
        ]
    )

    let gallerySection = works.map(work =>
        <div className="bg-gray-900 rounded-lg lg:w-5/12 mb-8 h-full" key={work.id} yar>
            <a target="_target" href={work.url}>
                <div className="w-full h-32 md:h-48 rounded-t-lg overflow-hidden">
                    <img src={work.image} alt={work.title + " image"} className="w-full h-full rounded-t-lg transform hover:scale-125 transition duration-1000 ease-in-out object-cover object-top" />
                </div>
                <div className="p-4">
                    <h1 className="font-bold text-base sm:text-lg capitalize">{work.title}</h1>
                    <p>{work.type}</p>
                    <ul className="mt-3">
                        <li className="font-bold">Languages/Frameworks:</li>

                        <li><FontAwesomeIcon icon={faCheck} className="text-xs mr-2" /> {work.language[0]}</li>
                        <li><FontAwesomeIcon icon={faCheck} className="text-xs mr-2" />{work.language[1]}</li>
                        <li><FontAwesomeIcon icon={faCheck} className="text-xs mr-2" />{work.language[2]}</li>
                    </ul>
                </div>
            </a>
        </div>)
    return <div className="h-full">
        <Switch>
            <Route path="/gallery">
                <div className="mt-8 md:mt-0 lg:mt-4 xl:mt-8">
                    <div className="bg-gray-800 text-grey-200 p-4 md:p-8 rounded-lg">
                        <div className="text-xs sm:text-sm lg:text-base rounded-lg">
                            <div className="py-4 px-2 my-4 md:my-8 rounded-lg bg-gray-900">
                                <h1 className="font-bold text-center text-base md:text-lg">These are some of the live projects I have worked on</h1>
                            </div>
                            <div className="swiper-container md:flex flex-wrap justify-around">
                                {gallerySection}

                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-2 items-center">

                        <Link to="/resume" className="cursor-pointer flex items-center bg-gray-900 h-8 rounded-lg">
                            <FontAwesomeIcon
                                icon={faLongArrowAltLeft}
                                className="mt-1"
                            />
                            <p className="pl-3">Resume</p>
                        </Link>


                        <Link to="/contact" className="flex mt-2 items-center cursor-pointer bg-gray-900 h-8 rounded-lg">

                            <p className="pr-3">Contact</p>
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

export default Gallery