import { useEffect } from 'react'
import profilePhoto from '../../assets/vla.png'
import downloadButton from '../../assets/download.png'
import resume from '../../assets/resume.pdf'
import linkedInLogo from '../../assets/linkedin.png'
import emailLogo from '../../assets/email.png'
import githubLogo from '../../assets/github.png'
import { Helmet } from 'react-helmet'
import orangeIcon from '../../assets/orange.png'

export default function MePage() {
    useEffect(() => {
        const cards = document.querySelectorAll('.fade-in')
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('show', entry.isIntersecting)
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target)
                }
            })
        },
        {
            threshold: .5,
        }
    )

    cards.forEach(card => {
        observer.observe(card)
    })
    }, [])

    return (
        <>
            <Helmet>
                <title>gabe wolford | me</title>
                <link rel="icon" href={orangeIcon} />
                <meta name="description" content="a lil bit about me" />
            </Helmet>
            <div className="animate__animated animate__fadeIn mt-16 pb-24 max-w-[80vw] md:max-w-[70vw] mx-auto text-sm">
                
                <div className="fade-in show grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mt-24 md:mt-32">
                    <img className="rounded-full mx-auto" src={profilePhoto} alt="profile photo" />
                    <div className="">
                        <h1 className="text-3xl md:text-4xl mb-5">a lil bit about me</h1>
                        <p className="mb-4">i'm gabe, a junior full stack developer based in portland, oregon specializing in react applications and front-end technologies, with expertise in node.js, tailwind, and responsive design. i have a proven ability to deliver high-quality & visually appealing web applications and skilled in building robust & scalable solutions. i collaborate well with cross-functional design & product teams every step of the way. i am committed to staying up-to-date with the latest trends and delivering exceptional user experiences.</p>
                        <p className=''>in my spare time you can find me outside, riding my bike on a variety of different surfaces. if i'm not doing that, i'm probably making a mean sandwich or exploring the PNW with my dog and my partner. as a lifelong learner, space fanatic, and amateur astronomer, i love reading about the universe & the current state of space exploration.</p>
                    </div>
                </div>

                <h2 className="fade-in text-2xl md:text-3xl mb-8 mt-16 lg:mt-20">skills</h2>

                <div className="fade-in grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-14">
                    <div className="mb-10">
                        <h5 className="text-dark-grey mb-3 hover:text-green">languages</h5>
                        <p>javascript, python, html, css, sql</p>
                    </div>

                    <div className="mb-10">
                        <h5 className="text-dark-grey mb-3 hover:text-orange">frameworks</h5>
                        <p>react, node, django, express, next, tailwind, bootstrap</p>
                    </div>

                    <div className="mb-10">
                        <h5 className="text-dark-grey mb-3 hover:text-pink">databases</h5>
                        <p>mongoDB, postresql</p>
                    </div>

                    <div className="mb-20">
                        <h5 className="text-dark-grey mb-3 hover:text-yellow">tools</h5>
                        <p>vite, vercel, git, github, mongoose, postman, aws, google, figma, vs code</p>
                    </div>
                </div>
                    
                <div className="fade-in mb-4 flex items-center">
                    <a href={resume} target="_blank" className="mr-1.5">
                        <img src={downloadButton} alt="download-button"/>
                    </a>

                    <a href={resume} target="_blank" 
                    className="text-md md:text-lg text-green hover:text-blue mr-5">download resume
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
        </>
    )
}