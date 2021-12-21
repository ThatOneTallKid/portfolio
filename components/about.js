

export default function About() {
    return (
        <div className="cont bg-gry mt-20  md:mt-40 xl:mt-60">
            <div className="bg-gry cont-color px-8 md:px-28 py-20 text-white">
                <div className="container flex px-1  mx-auto lg:h-132 lg:py-16">
                    <div className="flex flex-col items-start w-full lg:flex-row ">
                        <div className="">
                            <p className="text-3xl text-bold tracking-widest text-white  lg:text-4xl">MY WORK</p>
                            <p className="mt-8 text-sm md:text-lg  text-white">I was never the best at school or academics, I am just a supper curious guy. I struggle at my work but then this
is life I guess. I love to share these ideas and theories that interests me. I spend a lot of time doing Leetcode 
and building software but there is a lot more into it. I have been planning to work on a video format to document
the logic, reasoning and struggles  behind learning software engineering.
<br/> <br/>
A combination of  innovation and story telling.</p>
                            
                        </div>
                    </div>

                    
                </div>
                <div>
                    <div className="mt-6 container flex-col  flex px-3 lg:flex-row  w-full justify-between">
                        <div className="py-8 md:py-10">
                            <p className="text-2xl md:text-3xl">Software Development</p>
                            <div className="mt-3 text-sm md:text-lg">

                            <ul type="circle" >
                                
                                <li>-   Algorithms, Distributed Systems</li>
                                <li>-   Golang ,Microservices, APIs</li>
                                <li>-   Cloud Computing, full stack <br/>    applications</li>
                            </ul>
                            </div>
                        </div>
                        <div className="py-8 md:py-10">
                            <p className="text-2xl md:text-3xl">Content</p>
                            <div className='mt-3 text-sm md:text-lg'>

                            <ul type="circle" >
                                
                                <li>-   Software Engineering, Technology</li>
                                <li>-   Blockchain, Cryptocurrency</li>
                                <li>-   Finance and Economics</li>
                                <li>-   Psychology</li>
                            </ul>
                            </div>
                        </div>
                        <div className="py-8 md:py-10">
                            <p className="text-2xl md:text-3xl">Video Production</p>
                            <div className="mt-3 text-sm md:text-lg">

                            <ul type="circle" >
                                
                                <li>-  Planning on documenting
                                    <br/>the learning process of engineering
                                </li>
                                
                                <li>-   Occasional live streams
                                        <br /> on Twitch
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
