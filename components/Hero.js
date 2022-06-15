import Image from 'next/image'

export default function Hero() {
    return (
        <div >
            <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-13">
                <div className = " flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2 ">
                    <Image className= "object-cover w-full max-w-2xl rounded-md lg:h-full " src="/me/circle.png" height={270} width={270} />
                </div>
                <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2 ">
                    <div className="md:-mx-20 xl:-mx-40 max-w-lg text-center md:text-left">
                        <p className=" md:text-3xl text-2xl font-bold tracking-wide  text-gray-800 lg:text-3xl ">Aditya Das</p>
                        <p className="mt-1 text-sm font-normaltext-gray-300 text-gray-600">Computer Science Junior at KIIT, Bhubaneshwar  </p>
                        <p className="mobile:texl-xl md:text-2xl  mt-1  text-black font-semibold ">Self-learning software engineering through<br/>
research and development.  </p>
                        <div className='flex gap-x-6 py-2'>
                            <div className="md:transform md:motion-safe:hover:scale-110">
                                <a href="https://twitter.com/ThatOneBugDude?s=08">
                                <Image className="object-cover w-full max-w-2xl rounded-md lg:h-full " src="/socials/twitter.png" height={30} width={30} />
                                </a>
                            </div>
                            <div className="md:transform md:motion-safe:hover:scale-110">
                                <a href="https://www.linkedin.com/in/aditya-das-619a5019b/">
                                <Image className="object-cover w-full max-w-2xl rounded-md lg:h-full " src="/socials/linkedin.png" height={30} width={30} />
                                </a>
                            </div>
                            <div className="md:transform md:motion-safe:hover:scale-110">
                                <a href="https://github.com/ThatOneTallKid">
                                <Image className= "object-cover w-full max-w-2xl rounded-md lg:h-full " src="/socials/github.png" height={30} width={30} />
                                </a>
                            </div>
                            <div className="md:transform md:motion-safe:hover:scale-110">
                                <a href="https://www.twitch.tv/thatonetal1kid">
                                <Image className= "object-cover w-full max-w-2xl rounded-md lg:h-full " src="/socials/twitch.png" height={30} width={30} />
                                </a>
                            </div>
                            <div className="md:transform md:motion-safe:hover:scale-110">
                                <a href="mailto:1905222@kiit.ac.in?Subject=Hello%20User">
                                <Image className= "object-cover w-full max-w-2xl rounded-md lg:h-full " src="/socials/mail.png" height={30} width={30} />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            
            </div>

            <div className=' blog overflow-hidden' >
                <Image className=' imgg ' src="/blob.svg" height={328.5} width={1920} />
            </div>
             <style jsx>
                {`.blog{
                    position: absolute;
                    background-size: cover;
                    
                    height: 272px;
                    overflow-x: hidden;
                    

                }`}
                
            </style> 
        </div>
    )
}
