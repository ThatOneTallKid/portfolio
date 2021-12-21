import Image from "next/image"
import Link from "next/link"



export default function Blog({ posts }) {
    return (
        <div>
            <div className="container flex  mx-auto px-4 md:px-6 py-24">
                <div className="flex flex-col items-center justify-center w-full">
                    <div className="">
                        <p className="text-3xl font-bold tracking-widest text-gry">BLOGS</p>
                        <div className="px-3 mt-3">
                            <Image src="/line.svg" height={10} width={80}/>
                        </div>
                    </div>
                        
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-8">
                        {posts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.id}>
                            <div className="md:ml-10 md:px-4 py-4 md:transform md:motion-safe:hover:scale-110 ">
                            <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 ">
                                
                                <div className="pt-6 md:p-8 text-start md:text-left space-y-4">
                                    <blockquote>
                                    <p className="text-lg font-bold">
                                        {post.frontmatter.title}
                                    </p>
                                    </blockquote>
                                    <figcaption className="font-medium">
                                    <div className="text-cyan-600">
                                        {post.frontmatter.excerpt}
                                    </div>
                                    <div className="text-gray-500">
                                        {post.frontmatter.date}
                                    </div>
                                    </figcaption>
                                </div>
                            </figure>
                        </div>
                            </Link>
                        ))}
                       
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
