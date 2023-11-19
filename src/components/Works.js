import React from 'react';
import Carousel from 'nuka-carousel';
import content from '../content';
const Works = () => {
    return (
        <div className=" grid md:grid-cols-4 sm:grid-cols-6 gap-3" id="mywork">
            <div className=" w-full items-center dark:bg-gray-900 py-12 px-6 flex justify-center ">
                <div>
                    <div className="max-w-xs  h-80 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4 shadow-lg">
                        <div className="w-50 h-auto">
                            <Carousel autoplay={true} wrapAround={true}
                                renderCenterLeftControls={({ previousSlide }) => (
                                    null
                                )}
                                renderCenterRightControls={({ nextSlide }) => (
                                    null
                                )}
                            >
                                <img src="https://i.ibb.co/Nxc4yWt/time2.png" alt="time2" border="0" />
                                <img src="https://i.ibb.co/2YRR4c1/time0.png" alt="time0" border="0" />
                                <img src="https://i.ibb.co/Hgd0MGv/time1.png" alt="time1" border="0" />
                            </Carousel>
                        </div>
                        <div>
                            <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">Time Tracer</h4>
                            <p className="text-gray-800 dark:text-gray-100 text-sm">Time Tracer a website to promote different branded wrist watches.this is a full stack website using react, bootstrap, nodejs, express & mongoDb.<br />This is a demo project.</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-between text-gray-800">
                                <p className="text-sm dark:text-gray-400 font-extrabold text-lg tracking-wider">
                                    <i class="fab fa-react"></i>
                                    <i class="fab fa-node-js"></i>
                                    <i class="fab fa-bootstrap"></i>
                                    <i class="fab fa-envira"></i>
                                </p>
                                <button className=" bg-blue-400 rounded px-5 text-white font-bold"><a href="https://time-tracer-c1237.web.app/" target="_new">visit</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full items-center dark:bg-gray-900 py-12 px-6 flex justify-center ">
                <div>
                    <div className="max-w-xs  h-80 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4 shadow-lg">
                        <div className="w-50 h-auto">
                            <Carousel autoplay={true} wrapAround={true}
                                renderCenterLeftControls={({ previousSlide }) => (
                                    null
                                )}
                                renderCenterRightControls={({ nextSlide }) => (
                                    null
                                )}
                            >
                                <img src="https://i.ibb.co/PwnbJny/Tele-Tale-Home1.png" alt="time2" border="0" />
                                <img src="https://i.ibb.co/9yPFpZV/Teletale-Product1.png" alt="time0" border="0" />
                                <img src="https://i.ibb.co/vQq0BG4/Teletale-Register.png" alt="time1" border="0" />
                            </Carousel>
                        </div>
                        <div>
                            <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">Teletale</h4>
                            <p className="text-gray-800 dark:text-gray-100 text-sm">Teletale  a web-app to promote custom designed phones.this is a full stack web-app using react, Tailwindcss, nodejs, express & mongoDb.<br />This is a demo project.</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-between text-gray-800">
                                <p className="text-sm dark:text-gray-400 font-extrabold text-lg tracking-wider">
                                    <i class="fab fa-react"></i>
                                    <i class="fab fa-node-js"></i>
                                    <i class="fab fa-css3-alt"></i>
                                    <i class="fab fa-envira"></i>
                                </p>
                                <button className=" bg-blue-400 rounded px-5 text-white font-bold"><a href="https://teletale-7c144.web.app/" target="_new">visit</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full dark:bg-gray-900 py-12 px-6 flex justify-center items-center ">
                <div>
                    <div className="max-w-xs  h-80 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4 shadow-lg">
                        <div className="w-50 h-auto">
                            <Carousel autoplay={true} wrapAround={true}
                                renderCenterLeftControls={({ previousSlide }) => (
                                    null
                                )}
                                renderCenterRightControls={({ nextSlide }) => (
                                    null
                                )}
                            >
                                <img src="https://i.ibb.co/Yjycjym/scratch2.png" alt="scratch2" border="0" />
                                <img src="https://i.ibb.co/hF92kR6/scratch1.png" alt="scratch1" border="0" />
                                <img src="https://i.ibb.co/vH5SMkR/scratch0.png" alt="scratch0" border="0" />
                            </Carousel>
                        </div>
                        <div>
                            <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">Scratch Academy</h4>
                            <p className="text-gray-800 dark:text-gray-100 text-sm">Scratch Academy a educational website where anyone from all over the world can enroll their desired courses, build with React, Nodejs, Bootstrap.<br /> This is a demo project </p>
                        </div>
                        <div>
                            <div className="flex items-center justify-between text-gray-800">
                                <p className="text-sm dark:text-gray-400 font-extrabold text-lg tracking-wider">
                                    <i class="fab fa-react"></i>
                                    <i class="fab fa-node-js"></i>
                                    <i class="fab fa-bootstrap"></i>
                                </p>
                                <button className=" bg-blue-400 rounded px-5 text-white font-bold"><a href="https://scratch-academy.netlify.app/" target="_new">visit</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full items-center dark:bg-gray-900 py-12 px-6 flex justify-center ">
                <div>
                    <div className="max-w-xs  h-80 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4 shadow-lg">
                        <div className="w-50 h-auto">
                            <Carousel autoplay={true} wrapAround={true}
                                renderCenterLeftControls={({ previousSlide }) => (
                                    null
                                )}
                                renderCenterRightControls={({ nextSlide }) => (
                                    null
                                )}
                            >
                                <img src="https://i.ibb.co/Svsq7NM/ahar2.png" alt="ahar2" border="0" />
                                <img src="https://i.ibb.co/PMs4ZrV/ahar1.png" alt="ahar1" border="0" />
                                <img src="https://i.ibb.co/NsYGKtp/ahar0.png" alt="ahar0" border="0" />
                            </Carousel>
                        </div>
                        <div>
                            <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">Ahaar Food Delivery</h4>
                            <p className="text-gray-800 dark:text-gray-100 text-sm">Food Delivery a website to promote a delivery system where there will be less hassle and zero fuss.this is a full stack website using react, bootstrap, nodejs, express & mongoDb.<br />This is a demo project.</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-between text-gray-800">
                                <p className="text-sm dark:text-gray-400 font-extrabold text-lg tracking-wider">
                                    <i class="fab fa-react"></i>
                                    <i class="fab fa-node-js"></i>
                                    <i class="fab fa-bootstrap"></i>
                                    <i class="fab fa-envira"></i>
                                </p>
                                <button className=" bg-blue-400 rounded px-5 text-white font-bold"><a href="https://fooddelivery-edf73.web.app/" target="_new">visit</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-full dark:bg-gray-900 py-12 px-6 flex justify-center items-center ">
                <div>
                    <div className="max-w-xs  h-80 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4 shadow-lg">
                        <div className="w-50 h-auto">
                            <Carousel autoplay={true} wrapAround={true}
                                renderCenterLeftControls={({ previousSlide }) => (
                                    null
                                )}
                                renderCenterRightControls={({ nextSlide }) => (
                                    null
                                )}
                            >
                                <img src="https://i.ibb.co/rpJTyLh/health2.png" alt="health2" border="0" />
                                <img src="https://i.ibb.co/PjPTph8/health1.png" alt="health1" border="0" />
                                <img src="https://i.ibb.co/KLnMs7J/health0.png" alt="health0" border="0" />
                            </Carousel>
                        </div>
                        <div>
                            <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">Health Care Website</h4>
                            <p className="text-gray-800 dark:text-gray-100 text-sm">This is a website where anyone can book a appointment for their health issue.this is a website built using react, bootstrap, nodejs.<br />This is a demo project.</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-between text-gray-800">
                                <p className="text-sm dark:text-gray-400 font-extrabold text-lg tracking-wider">
                                    <i class="fab fa-react"></i>
                                    <i class="fab fa-node-js"></i>
                                    <i class="fab fa-bootstrap"></i>
                                </p>
                                <button className=" bg-blue-400 rounded px-5 text-white font-bold"><a href="https://a-sound-health-medical-h-da9e4.web.app/" target="_new">visit</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full dark:bg-gray-900 py-12 px-6 flex justify-center items-center">
                <div>
                    <div className="max-w-xs  h-80 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4 shadow-lg">
                        <div className="m-auto w-40">
                            <img src={content.git.img}></img>
                        </div>
                        <div>
                            <h3 className='font-bold text-center text-lg font-serif italic my-2'>{content.git.title}</h3>
                            <p className="text-gray-800 dark:text-gray-100 text-sm font-semibold italic">{content.git.desc}</p>
                        </div>
                        <h1 className="text-5xl text-center animate-bounce text-blue-400">
                            <a href="https://github.com/jahidulislamjahid" target='new'>
                            <i class="fa fa-paper-plane hover:translate-x-40" aria-hidden="false"></i>
                            </a>
                        
                        </h1>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;