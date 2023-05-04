import leftArrow from '../../assets/left arrow.svg'
import rightArrow from '../../assets/right arrow.svg'
import anonanonMockup from '../../assets/anon anon mockup.png'
import launchbreakMockup from '../../assets/launchbreak mockup.png'
import gregslistMockup from '../../assets/gregslist mockup.png'

export default function WorkPage() {
    return (
        <div className="mt-24 pb-36 max-w-[65vw] mx-auto">
            <header className="text-center text-2xl md:text-4xl font-bold">
                    <h1 className="text-dark-grey">things i've built</h1>
            </header>
            
            <section className='mt-16'>
                <a href="https://github.com/gabewolford/launchbreak" target="_blank">
                    <h1 className="text-3xl md:text-4xl hover:text-yellow hover:scale-105 transition ease-in-out duration-500">full-stack react application</h1>
                </a>
                <div className="mt-2">
                    <p className="text-sm text-dark-grey w-[75%] lg:w-[50%]">designed and developed a responsive MERN-stack app hosted on Heroku with full CRUD capabilities, using React, Express, MongoDB, Node, JavaScript, TailwindCSS, Figma, and VS Code</p>
                </div>
                <div className="flex items-center my-4">
                    <a href="https://launchbreak.herokuapp.com/" target="_blank">
                        <img className="w-6 mr-2 hover:scale-105 transition ease-in-out duration-500" src={leftArrow} />
                    </a>
                    <a href="https://launchbreak.herokuapp.com/" target="_blank">
                        <span className="text-blue text-xl hover:text-pink hover:underline hover:decoration-wavy hover:underline-offset-4 hover:decoration-2">check it out</span>
                    </a>
                </div>
                <div>
                    <img className="w-[100%] md:w-[75%] lg:w-[50%] hover:scale-105 transition ease-in-out duration-500" src={launchbreakMockup}/>
                </div>
            </section>

            <section className='mt-20 text-right'>
                <div className="justify-end">
                    <a href="https://github.com/spbovarnick/anomalies-anonymous" target="_blank">
                        <h1 className="text-3xl md:text-4xl hover:text-yellow hover:scale-105 transition ease-in-out duration-500">full-stack django application</h1>
                    </a>
                    <div className="mt-2 flex items-center justify-end">
                        <p className="text-sm text-dark-grey w-[75%] lg:w-[50%]">designed and developed a responsive full-stack Django app hosted on Heroku with full CRUD capabilities, using Python, PostgreSQL, HTML JavaScript, CSS, Bootstrap, jQuery, geocoder, crispy forms, Git/GitHub, Figma, and VS Code</p>
                    </div>
                    <div className="flex items-center justify-end my-4">
                        <a href="https://www.anomaliesanonymous.com/" target="_blank">
                            <span className="text-blue text-xl hover:text-pink hover:underline hover:decoration-wavy hover:underline-offset-4 hover:decoration-2">check it out</span>
                        </a>
                        <a href="https://www.anomaliesanonymous.com/" target="_blank">
                            <img className="w-6 ml-2" src={rightArrow} />
                        </a>
                    </div>
                    <div className='flex justify-end'>
                        <img className="w-[100%] md:w-[75%] lg:w-[50%] hover:scale-105 transition ease-in-out duration-500" src={anonanonMockup}/>
                    </div>
                </div>
            </section>

            <section className='mt-20'>
                <a href="https://github.com/gabewolford/gregslist" target="_blank">
                    <h1 className="text-3xl md:text-4xl hover:text-yellow hover:scale-105 transition ease-in-out duration-500">MEN-stack CRUD application</h1>
                </a>
                <div className="mt-2">
                    <p className="text-sm text-dark-grey w-[75%] lg:w-[50%]">designed and developed a responsive full-stack web app hosted on Heroku with full CRUD capabilities, using Node.js, EJS, MongoDB, Mongoose, Postman, CSS, Bootstrap, Git/GitHub, Figma, and VS Code</p>
                </div>
                <div className="flex items-center my-4">
                    <a href="https://gregslist.herokuapp.com/" target="_blank">
                        <img className="w-6 mr-2" src={leftArrow} />
                    </a>
                    <a href="https://gregslist.herokuapp.com/" target="_blank">
                        <span className="text-blue text-xl hover:text-pink hover:underline hover:decoration-wavy hover:underline-offset-4 hover:decoration-2">check it out</span>
                    </a>
                </div>
                <div>
                    <img className="w-[100%] md:w-[75%] lg:w-[50%] hover:scale-105 transition ease-in-out duration-500" src={gregslistMockup}/>
                </div>
            </section>

            <section className='mt-24 text-right'>
                <div className="justify-end">
                    <a href="https://github.com/gabewolford" target="_blank">
                        <h1 className="text-3xl md:text-4xl overline hover:text-yellow hover:scale-105 transition ease-in-out duration-500">more coming soon!</h1>
                    </a>
                </div>
            </section>
        </div>
    )
}