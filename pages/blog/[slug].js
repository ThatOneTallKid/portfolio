import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Image from 'next/image';
import Link from 'next/link';

export default function PostPage({ frontmatter: { title, date, }, slug, content }) {
    
    return (
        <div>
            <div className="container lg:px-72 lg:py-20 mx-auto lg:flex flex-col">
                <div className="flex items-center justify-center w-full mt-2 ">
                    <Image  src = "/me/circle.png" width="175" height="175" />
                    
                </div>

                
                <div className="mt-4 flex flex-col items-center w-full">
                <p className="text-3xl font-bold tracking-wider">Aditya Das</p>
                <p className="text-xl font-semibpld text-gray-500 tracking-wider">Software Engineer</p>
                </div>
                <div className="text-lg mt-4 flex flex-col  w-full">
                    <div className="py-6">
                        <p className="text-2xl md:text-3xl font-bold ">
                            {title}
                        </p>
                        <p className="text-sm font-semibold text-gray-500">
                            {date}
                        </p>
                        </div>
                    <div>
                        
                        <div dangerouslySetInnerHTML={{ __html: marked.parse(content)}}></div>
                    </div>
                </div>
                <div className="mt-8 text-blue-500">
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export async function getStaticPaths() {
    const files  = fs.readdirSync(path.join('posts'))
    
    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: {slug} }) {
    const markdoenWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf8')

    const {data:frontmatter, content}=  matter(markdoenWithMeta)
    return {
        props: {
            frontmatter,
            slug,
            content
        },
    }
}
