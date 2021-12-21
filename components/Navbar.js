import Image from "next/image";

export default function Navbar() {
    return (
        <nav className=" mx-auto border sticky top-0 z-50 shadow-md h-16 bg-white">
            <div className="mx-auto max-w-6xl py-3 md:px-10 mobile:px-4" >
                <Image className='md:transform md:motion-safe:hover:scale-110' src="/me/icon.png" width={37} height={37}/>
            </div>
        </nav>
    )
}
