import Head from 'next/head'
import About from '../components/about'
import Blog from '../components/blog'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Project from '../components/Project'
import Footer from '../components/Footer'


export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Aditya Das</title>
        <link rel="icon" href="/me/circle.png" />
      </Head>

      

      {/* Navbar */}
      <Navbar/>
      {/* Hero */}
      <Hero/>
      {/* My Work */}
      <About />
      {/* Blogs */}
      <Blog posts={posts} />
      
      {/* Projects */}
      <Project />
      
      {/* Footer */}
      <Footer/>
      
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the post directory
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and front matter from the post
  const posts = files.map(filename => {
    //  Create slug
    const slug = filename.replace('.md', '')

    // get front matter
    const markdoenWithMeta = fs.readFileSync(path.join('posts', filename), 'utf8')

    // Parse front matter
    const { data: frontmatter } = matter(markdoenWithMeta)
    

    return {
      slug,
      frontmatter
    }
  })
  
  console.log(posts)
  return {
    props: {
      posts,
    },
  }
}