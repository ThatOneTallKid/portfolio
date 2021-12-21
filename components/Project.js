import Image from 'next/image';

export default function Project() {
    return (
        <div className='bg-gry'>
            <div className="container px-2 md:px-32 py-24 flex-col mx-auto w-full">
                <div className="mb-14 md:mb-24">
                    <p className="text-white text-4xl tracking-widest ">FEATURED PROJECTS</p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10">
                    <div className="md:px-4 ">
                    <a href="https://github.com/ThatOneTallKid/kiit_archives">
                            <figure className=" bg-gray-100 rounded-xl p-8 md:p-0">
                            <Image className="rounded-t-lg "  src="/projects/flyer2.jpeg" height={280} width={520} />
                                <div className="pt-6 md:p-8  md:text-left space-y-4">
                                    <blockquote>
                                    <p className="text-2xl font-semibold">
                                        KIIT Archives
                                    </p>
                                    </blockquote>
                                    <figcaption className="font-medium">
                                    <div className=" text-sm md:text-base text-cyan-600">
                                    KiiT Archives is a Notes sharing platform app specifically for the students of KiiT University, Bhubaneshwar. Providing Engineering students notes for each and every subjects.
                                    </div>
                                    <div className="mt-4">
                                        <button className="mb-2 mr-2 bg-gray-300  text-gry  py-2 px-4 rounded-lg">
                                            Dart
                                        </button>
                                    </div>
                                    </figcaption>
                                </div>
                            </figure>
                            </a>
                    </div>
                    
                    <div className="md:px-4 p">
                    <a href="https://github.com/ThatOneTallKid/theGeekBot">
                            <figure className=" bg-gray-100 rounded-xl p-8 md:p-0">
                            <Image className="rounded-t-lg "  src="/projects/gfgpic_1.jpg" height={280} width={520} />
                                <div className="pt-6 md:p-8  md:text-left space-y-4">
                                    <blockquote>
                                    <p className="text-2xl font-semibold">
                                        The GeekBot
                                    </p>
                                    </blockquote>
                                    <figcaption className="font-medium">
                                    <div className="text-cyan-600 text-sm md:text-base">
                                        An AI-powered Discord bot built from scratch to help thousands of students in GFG_KIIT Server to learn to code with Topic Search and live Hackathon feature to keep them posted.   
                                    </div>
                                    <div className="mt-4">
                                        
                                            <button className="bg-gray-300 mr-2 mb-2 text-gry  py-2 px-4  rounded-lg">
                                            Python
                                            </button>
                                            <button className="bg-gray-300 mr-2 mb-2 text-gry  py-2 px-4  rounded-lg">
                                            Herouku
                                            </button>
                                            <button className="bg-gray-300 mr-2 mb-2 text-gry  py-2 px-4  rounded-lg">
                                            Discord
                                            </button>
                                            
                                        </div>
                                        
                                    </figcaption>
                                </div>
                            </figure>
                    </a>
                    </div>
                    <div className="md:px-4 p">
                        <a href="https://github.com/ThatOneTallKid/TimeLapse">
                            <figure className=" bg-gray-100 rounded-xl p-8 md:p-0">
                            <Image className="rounded-t-lg "  src="/projects/time.png" height={280} width={520} />
                                <div className="pt-6 md:p-8  md:text-left space-y-4">
                                    <blockquote>
                                    <p className="text-2xl font-semibold">
                                        Elapso
                                    </p>
                                    </blockquote>
                                    <figcaption className="font-medium">
                                    <div className="text-cyan-600 text-sm md:text-base">
                                    Elapso is a CLI tool to automate and optimize the process of making a Timelapse video by adjusting various properties of subsequent images that leads amazing results in difficult lighting.
                                    </div>
                                    <div className="mt-4">
                                        <button className="bg-gray-300 mr-2 mb-2 text-gry  py-2 px-4 rounded-lg">
                                            C++
                                            </button>
                                            <button className="bg-gray-300 mr-2 mb-2 text-gry  py-2 px-4 rounded-lg">
                                            OpenCV
                                            </button>
                                            <button className="bg-gray-300 mr-2 mb-2 text-gry  py-2 px-4 rounded-lg">
                                            CMake
                                        </button>
                                    </div>
                                    </figcaption>
                                </div>
                            </figure>
                            </a>
                    </div>
                    <div className="md:px-4 p">
                        <a href="https://github.com/ThatOneTallKid/Cryptex">
                            <figure className=" bg-gray-100 rounded-xl p-8 md:p-0">
                            <Image className="rounded-t-lg "  src="/projects/Cryptex.png" height={280} width={520} />
                                <div className="pt-6 md:p-8  md:text-left space-y-4">
                                    <blockquote>
                                    <p className="text-2xl font-semibold">
                                        Cryptex
                                    </p>
                                    </blockquote>
                                    <figcaption className="font-medium">
                                    <div className="text-cyan-600 text-sm md:text-base">
                                    A command line Crypto-currency ticker made using Golang and Wazirx Api. Cryptex allows you to easily check on the price of the top cryptocurrencies in the market. Supported cryptocurrencies are Bitcoin, Ethereum, Dogecoin and many more.
                                    </div>
                                    <div className="mt-4">
                                        <button className="bg-gray-300 mr-2 mb-2 text-gry  py-2 px-4 rounded-lg">
                                            Go
                                            </button>
                                            <button className="bg-gray-300 mr-2 mb-2 text-gry  py-2 px-4 rounded-lg">
                                            WazirX-Api
                                        </button>
                                    </div>
                                    </figcaption>
                                </div>
                            </figure>
                            </a>
                    </div>
                    <div className="md:px-4 p">
                        <a href="https://github.com/ThatOneTallKid/inshorts-clone">
                            <figure className=" bg-gray-100 rounded-xl p-8 md:p-0">
                            <Image className="rounded-t-lg "  src="/projects/inshorts.png" height={280} width={520} />
                                <div className="pt-6 md:p-8  md:text-left space-y-4">
                                    <blockquote>
                                    <p className="text-2xl font-semibold">
                                        Inshorts-clone
                                    </p>
                                    </blockquote>
                                    <figcaption className="font-medium">
                                    <div className="text-cyan-600 text-sm md:text-base">
                                    A clone of news reading app Inshorts made in React. Implemented Admin Dashboard to provide the functionality to easily add or remove more news (Crud operations). Used firebase cloudfirestore as the main data base. Deployed on Netlify.
                                    </div>
                                    <div className="mt-4">
                                        <button className="bg-gray-300 mr-2 mb-2 text-gry  py-2 px-4 rounded-lg">
                                            React
                                            </button>
                                            <button className="bg-gray-300 mr-2 mb-2 text-gry  py-2 px-4 rounded-lg">
                                            firebase
                                            </button>
                                            <button className="bg-gray-300 mr-2 mb-2 text-gry  py-2 px-4 rounded-lg">
                                            Netlify
                                        </button>
                                    </div>
                                    </figcaption>
                                </div>
                            </figure>
                            </a>
                        </div>
                </div>
                
            </div>
        </div>
    )
}
