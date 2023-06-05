import leftArrow from '../../assets/left arrow.svg'
import rightArrow from '../../assets/right arrow.svg'
import launchbreakScreenshot from '../../assets/launchbreak.png'
import anonanonScreenshot from '../../assets/anonanon.png'
import islamoradaScreenshot from '../../assets/islamorada.png'
import gregslistScreenshot from '../../assets/gregslist.png'
import { Helmet } from 'react-helmet'
import greenIcon from '../../assets/green.png'


export default function WorkPage() {
    return (
        <>
            <Helmet>
                <title>gabe wolford | work</title>
                <link rel="icon" href={greenIcon} />
                <meta name="description" content="some of the work i've done" />
            </Helmet>
            <div className="mt-24 pb-36 max-w-[80vw] lg:max-w-[70vw] mx-auto">
                <header className="text-center text-3xl md:text-4xl font-bold mb-16">
                        <h1>things i've built</h1>
                </header>

                <section className="flex flex-col md:flex-row items-center gap-6 md:gap-14 mb-16 md:mb-32">
                    <div className="flex flex-col items-end md:ml-20">
                        <a href="https://github.com/gabewolford/islamorada-fishing" target="_blank">
                            <h4 className="text-2xl md:text-3xl hover:text-orange font-md leading-7 text-right mb-4 transition ease-in-out duration-300">react app</h4>
                        </a>
                    
                        <p className="text-sm mb-2 text-right">currently developing a new website for islamorada fishing guides & charters using react, node and tailwind, </p>
                        <div className="flex items-center">
                            <span className="text-blue text-md hover:text-pink hover:underline hover:underline-offset-8 hover:decoration-2">in progress</span>
                            <img className="w-6 ml-2" src={rightArrow} alt='right arrow'/>
                        </div>
                    </div>
                    
                    <div className='order-last max-h-96 overflow-auto scrollbar-hide'>
                        <img src={islamoradaScreenshot} alt="islamorada fishing screenshot" />
                    </div>
                </section>


                <section className="flex flex-col md:flex-row items-center gap-6 md:gap-14 mb-16 md:mb-32">
                    <div className='order-last md:order-first max-h-96 overflow-auto scrollbar-hide'>
                        <img src={launchbreakScreenshot} alt="launchbreak screenshot" />
                    </div>
                    
                    <div>
                        <div className="flex flex-col items-start md:mr-20 md:mb-32">
                            <a href="https://github.com/gabewolford/launchbreak" target="_blank">
                                <h4 className="text-2xl md:text-3xl hover:text-orange font-md leading-7 mb-4 transition ease-in-out duration-300">full stack react app</h4>
                            </a>
                        
                            <p className="text-sm mb-2">designed and developed a responsive MERN-stack app hosted on heroku with full CRUD capabilities, using react, express, mongoDB, node, javascript, tailwind, figma, and vs code</p>
                            <div className="flex items-center">
                                <a href="https://launchbreak.herokuapp.com/" target="_blank">
                                    <img className="w-6 mr-2" src={leftArrow} alt='left arrow'/>
                                </a>
                                <a href="https://launchbreak.herokuapp.com/" target="_blank">
                                    <span className="text-blue text-md hover:text-pink hover:underline hover:underline-offset-8 hover:decoration-2">check it out</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="flex flex-col md:flex-row items-center gap-6 md:gap-14 mb-16 md:mb-32">
                    <div className="flex flex-col items-end md:ml-20">
                        <a href="https://github.com/spbovarnick/anomalies-anonymous" target="_blank">
                            <h4 className="text-2xl md:text-3xl hover:text-orange font-md leading-7 mb-4 transition ease-in-out duration-300 text-right">full stack django app</h4>
                        </a>
                    
                        <p className="text-sm mb-2 text-right">designed and developed a responsive full-stack django app hosted on heroku with full CRUD capabilities, using python, postgreSQL, bootstrap, jQuery, geocoder, crispy forms, figma, and vs code</p>
                        <div className="flex items-center">
                            <a href="https://www.anomaliesanonymous.com/" target="_blank">
                                <span className="text-blue text-md hover:text-pink hover:underline hover:underline-offset-8 hover:decoration-2">check it out</span>
                            </a>
                            <a href="https://www.anomaliesanonymous.com/" target="_blank">
                                <img className="w-6 ml-2" src={rightArrow} alt='right arrow'/>
                            </a>
                            
                        </div>
                    </div>
                    
                    <div className='order-last overflow-auto scrollbar-hide'>
                        <img src={anonanonScreenshot} alt="anomalies anonymous screenshot" />
                    </div>
                </section>

                <section className="flex flex-col md:flex-row items-center gap-6 md:gap-14 mb-16">
                    <div className='order-last md:order-first max-h-96 overflow-auto scrollbar-hide'>
                        <img src={gregslistScreenshot} alt="gregslist screenshot" />
                    </div>
                    
                    <div>
                        <div className="flex flex-col items-start md:mr-20">
                            <a href="https://github.com/gabewolford/gregslist" target="_blank">
                                <h4 className="text-2xl md:text-3xl hover:text-orange font-md leading-7 mb-4 transition ease-in-out duration-300">full stack CRUD app</h4>
                            </a>
                        
                            <p className="text-sm mb-2">designed and developed a responsive full-stack web app hosted on heroku with full CRUD capabilities, using node, djs, mongoDB, mongoose, postman, css, bootstrap, git/github, figma, and vs code</p>
                            <div className="flex items-center">
                                <a href="https://gregslist.herokuapp.com/" target="_blank">
                                    <img className="w-6 mr-2" src={leftArrow} alt='left arrow'/>
                                </a>
                                <a href="https://gregslist.herokuapp.com/" target="_blank">
                                    <span className="text-blue text-md hover:text-pink hover:underline hover:underline-offset-8 hover:decoration-2">check it out</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
   
                <section className='mt-24 text-center'>
                    <div className="justify-end">
                        <a href="https://github.com/gabewolford" target="_blank">
                            <h1 className="text-2xl md:text-3xl overline hover:text-yellow transition ease-in-out duration-300">more coming soon!</h1>
                        </a>
                    </div>
                </section>
            </div>
        </>
    )
}