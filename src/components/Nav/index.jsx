export default function Nav() {
    return (
        <>
            <div>
                <a href="/" className="absolute text-md top-8 left-8 lg:top-12 lg:left-12 lg:text-xl hover:text-pink">home</a>
            </div>

            <div>
                <a href="/work" className="absolute text-md top-8 right-8 lg:top-12 lg:right-12 lg:text-xl hover:text-green">work</a>
            </div>

            <div>
                <a href="/me" className="absolute text-md bottom-8 left-8 lg:bottom-12 lg:left-12 lg:text-xl hover:text-orange">me</a>
            </div>

            <div>
                <a href="/contact" className="absolute text-md bottom-8 right-8 lg:bottom-12 lg:right-12 lg:text-xl hover:text-yellow">contact</a>
            </div>


        </>
    )
}