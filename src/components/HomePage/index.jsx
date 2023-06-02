import { Helmet } from "react-helmet"
import pinkIcon from '../../assets/pink.png'

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>gabe wolford</title>
                <link rel="icon" href={pinkIcon} />
                <meta name="description" content="Hey there, I'm Gabe. I'm a full stack developer based in Portland, OR. " />
            </Helmet>
            <div className="grid flex h-screen place-items-center text-3xl mx-auto md:text-4xl ml-10 md:mx-12">
                <div className="leading-tight tracking-normal cursor-default">
                    <span>hey there, i'm </span>
                    <span className="text-dark-grey hover:text-blue transition ease-in-out duration-500"> gabe</span>
                    <span className="text-green hover:text-yellow transition ease-in-out duration-400">( )</span>
                <br/>
                    <span>i'm a </span>
                    <span className="text-yellow hover:text-blue">&#123;</span>
                    <span className="text-brown hover:text-green transition ease-in-out duration-500">fullStack</span>
                    <span className="text-dark-grey">.</span>
                    <span className="text-orange hover:text-pink transition ease-in-out duration-500">developer</span>
                    <span className="text-dark-grey"></span>
                    <span className="text-yellow hover:text-blue transition ease-in-out duration-500">&#125;</span>
                    <span> based in </span>
                    <br/>
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