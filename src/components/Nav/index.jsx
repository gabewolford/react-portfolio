import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <>
        <nav className="fixed">
            <Link 
                to='/'
                className="fixed text-md top-8 left-8 lg:top-12 lg:left-12 lg:text-xl hover:text-pink hover:underline hover:decoration-wavy hover:underline-offset-4 hover:decoration-2 hover:font-bold hover:scale-110 transtion ease-in-out duration-500"
                >
                home
            </Link>

            <Link 
                to='/work'
                className="fixed fixed text-md top-8 right-8 lg:top-12 lg:right-12 lg:text-xl hover:text-green  hover:underline hover:decoration-wavy hover:underline-offset-4 hover:decoration-2 hover:font-bold hover:scale-110 transtion ease-in-out duration-500"
                >
                work
            </Link>


            <Link 
                to='/me'
                className="fixed text-md bottom-8 left-8 lg:bottom-12 lg:left-12 lg:text-xl hover:text-orange  hover:underline hover:decoration-wavy hover:underline-offset-4 hover:decoration-2 hover:font-bold hover:scale-110 transtion ease-in-out duration-500"
                >
                me
            </Link> 

            <div>
                <a href="mailto:gabewolford@gmail.com" 
                className="fixed text-md bottom-8 right-8 lg:bottom-12 lg:right-12 lg:text-xl hover:text-yellow  hover:underline hover:decoration-wavy hover:underline-offset-4 hover:decoration-2 hover:font-bold hover:scale-110 transtion ease-in-out duration-500">contact</a>
            </div>
        </nav>
        </>
    )
}