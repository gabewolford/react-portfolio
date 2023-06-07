import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <>
        <nav className="fixed z-50">
            <Link 
                to='/'
                className="fixed text-sm top-8 left-8 px-2 py-1 bg-transparent rounded lg:top-8 lg:left-8 hover:text-pink hover:underline hover:underline-offset-8 hover:decoration-2 hover:font-bold transtion ease-in-out duration-500"
                >
                home
            </Link>

            <Link 
                to='/work'
                className="fixed fixed text-sm top-8 right-8 px-2 py-1 bg-transparent rounded lg:top-8 lg:right-8 hover:text-green hover:underline hover:underline-offset-8 hover:decoration-2 hover:font-bold transtion ease-in-out duration-500"
                >
                work
            </Link>


            <Link 
                to='/me'
                className="fixed text-sm bottom-8 left-8 px-2 py-1 bg-transparent rounded lg:bottom-8 lg:left-8 hover:text-orange hover:underline hover:underline-offset-8 hover:decoration-2 hover:font-bold transtion ease-in-out duration-500"
                >
                me
            </Link> 

            <div>
                <a href="mailto:gabewolford@gmail.com" 
                className="fixed text-sm bottom-8 right-8 px-2 py-1 bg-transparent rounded lg:bottom-8 lg:right-8 hover:text-yellow hover:underline hover:underline-offset-8 hover:decoration-2 hover:font-bold transtion ease-in-out duration-500">contact</a>
            </div>
        </nav>
        </>
    )
}