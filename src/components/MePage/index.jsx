import profilePhoto from '../../assets/vla.png'
import downloadButton from '../../assets/download.png'
import resume from '../../assets/resume.pdf'
import linkedInLogo from '../../assets/linkedin.png'
import emailLogo from '../../assets/email.png'
import githubLogo from '../../assets/github.png'
import { Helmet } from 'react-helmet'
import orangeIcon from '../../assets/orange.png'

export default function MePage() {
    return (
        <>
            <Helmet>
                <title>gabe wolford | me</title>
                <link rel="icon" href={orangeIcon} />
            </Helmet>
            <div className="mt-16 pb-24 max-w-[70vw] mx-auto">
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-32">
                    <img class="rounded-full mx-auto" src={profilePhoto} />
                    <div className="border-4 rounded-3xl border-t-green border-r-orange border-b-pink border-l-yellow p-4">
                        <h1 className="text-dark-grey text-4xl mb-5">a lil bit about me</h1>
                        <p class="mb-4">i'm gabe, a full stack developer based in portland, oregon. prior to making the transition to tech, i spent nearly a decade in the music industry, where i worked in live production, touring, labels, streaming, startups, and experiential agencies. combining my sharp eye for detail and strong analytical skills, i have a knack for operations and thrive on crafting awesome internal tools. my ultimate goal is to ensure exceptional user experiences, whether in the digital or physical realm.</p>
                        <p>in my spare time you can find me outside, riding my bike on a variety of different surfaces. if i'm not doing that, i enjoy cooking, baking, hiking, and exploring the PNW with my dog and my partner. as a lifelong learner, space fanatic, and amateur astronomer, i love reading about the universe & the current state of space exploration.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 mt-16 lg:mt-20">
                    <h2 className="text-3xl font-bold mb-8">skills</h2>
                    
                    <div className="mb-10">
                        <h5 className="text-dark-grey mb-3 hover:text-green">languages</h5>
                        <p>javascript, python, html, css, sql</p>
                    </div>

                    <div className="mb-10">
                        <h5 className="text-dark-grey mb-3 hover:text-orange">frameworks</h5>
                        <p>react, django, express, node, tailwind, bootstrap, materialize</p>
                    </div>

                    <div className="mb-10">
                        <h5 className="text-dark-grey mb-3 hover:text-pink">databases</h5>
                        <p>mongoDB, postresql, sqllite</p>
                    </div>

                    <div className="mb-20">
                        <h5 className="text-dark-grey mb-3 hover:text-yellow">tools</h5>
                        <p>git, github, heroku, docker, vite, terminal, mongoose, postman, figma, visual studio code</p>
                    </div>
                    
                    <div className="mb-10 flex items-center">
                        <a href={resume} target="_blank" className="mr-1.5">
                            <img src={downloadButton} alt="download-button"/>
                        </a>

                        <a href={resume} target="_blank" 
                        className="text-sm md:text-xl text-green hover:text-blue mr-5">download resume
                        </a>

                        <a href="mailto:gabewolford@gmail.com" target='_blank' className="mr-2">
                            <img src={emailLogo} alt="email"/>
                        </a>

                        <a href="https://www.linkedin.com/in/gabe-wolford/" target='_blank' className="mr-2">
                            <img src={linkedInLogo} alt="linked-in"/>
                        </a>

                        <a href="https://github.com/gabewolford" target='_blank'>
                            <img src={githubLogo} alt="github"/>
                        </a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}