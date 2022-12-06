import Head from 'next/head'

export default function Home() {
  return (

 
  <div className='max-w-md m-auto'>
    <Head>
      <title>A NextJS App</title>
    </Head>
    <section className='my-20'>
      <h1 className="text-3xl my-5 font-light" >A (not so) simple NextJS project</h1>
      <div className="font-extralight leading-8">
      <p className="mb-5">
        Hi! I'm Jess, a Frontend Engineer based in the Netherlands.
        React, Typescript and NextJS are my main areas currently, but I have
        also worked with many other frameworks, Content Management Systems and
        libraries.
      </p>
      <p className="mb-5">
        I created this small project in NextJS, a framework for React,
        using TailwindCSS and Typescript. Feel free to check the code for this project
        on <a href="https://github.com/jessikadg/nextjs-blog">my Git Repo</a>
      </p>
      <p className="mb-5">Thanks for your visit!</p>
      </div>
    </section>
    </div>

  )
}
