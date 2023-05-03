export default function HomePage() {
    return (
        <>
            <div className="grid h-screen place-items-center text-3xl mx-8 lg:text-4xl lg:mx-12">
                <div className="leading-tight tracking-normal cursor-default">
                    <span>hey there, i'm </span>
                    <span className="text-dark-grey hover:scale-105"> gabe</span>
                    <span className="text-green ">( )</span>
                <br/>
                    <span>i'm a </span>
                    <span className="text-blue">`</span>
                    <span className="text-orange">full-stack </span>
                    <span className="text-pink">$</span>
                    <span className="text-yellow">&#123;</span>
                    <span className="text-brown">softwareEngineer</span>
                    <span className="text-yellow">&#125;</span>
                    <span className="text-blue">`</span>
                <br/>
                    <span>based in </span>
                    <span className="text-pink">&#91;</span>
                    <span className="text-orange">'</span>
                    <span className="text-blue">portland</span>
                    <span className="text-orange">'</span>
                    <span className="text-green">, </span>
                    <span className="text-orange">'</span>
                    <span className="text-blue">oregon</span>
                    <span className="text-orange">'</span>
                    <span className="text-pink">&#93;</span>
                </div>
            </div>
        </>
    )
}