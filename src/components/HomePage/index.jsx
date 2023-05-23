import { Helmet } from "react-helmet"

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>gabe wolford | home</title>
            </Helmet>
            <div className="grid h-screen place-items-center text-xl mx-auto md:text-4xl lg:mx-12">
                <div className="leading-tight tracking-normal cursor-default">
                    <span>hey there, i'm </span>
                    <span className="text-dark-grey hover:text-blue transition ease-in-out duration-500"> gabe</span>
                    <span className="text-green hover:text-yellow transition ease-in-out duration-400">( )</span>
                <br/>
                    <span>i'm a </span>
                    <span className="text-yellow hover:text-blue">&#123;</span>
                    <span className="text-brown hover:text-pink transition ease-in-out duration-500">fullStack</span>
                    <span className="text-dark-grey">.</span>
                    <span className="text-orange hover:text-green transition ease-in-out duration-500">software</span>
                    <span className="text-dark-grey">_</span>
                    <span className="text-orange hover:text-green transition ease-in-out duration-500">engineer</span>
                    <span className="text-yellow hover:text-blue transition ease-in-out duration-500">&#125;</span>

                <br/>
                    <span>based in </span>
                    <span className="text-pink hover:text-green transition ease-in-out duration-500">&#91;</span>
                    <span className="text-orange">'</span>
                    <span className="text-blue hover:text-yellow transition ease-in-out duration-500">portland</span>
                    <span className="text-orange">'</span>
                    <span className="text-green">, </span>
                    <span className="text-orange">'</span>
                    <span className="text-blue hover:text-yellow transition ease-in-out duration-500">oregon</span>
                    <span className="text-orange">'</span>
                    <span className="text-pink hover:text-green transition ease-in-out duration-500">&#93;</span>
                </div>
            </div>
        </>
    )
}