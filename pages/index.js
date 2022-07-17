import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Script from 'next/script'



export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>My Application</title>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      
      <header className={styles.navbar}>
    <div class="relative z-20  bg-gray-900"  >
        <div class="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-3">
          <div class="flex items-center justify-between">
            <div class="relative z-20 ">
              <a href="#" className={styles.name}>
                <img src="https://markitup.in/assets/img/logo.png" className={styles.logo}></img>
                <h1 className={styles.Name}>My Application</h1>
              </a>
            </div>

            <div class="flex items-center justify-end border-0">
              <input type="checkbox" name="hamburger" id="hamburger" class="peer" hidden/>
              <label for="hamburger" class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-white transition duration-400"></div>
                <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-400"></div>
                <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-400"></div>
              </label>

              <div class="peer-checked:translate-x-0 fixed inset-0 w-[calc(90%-4.5rem)] translate-x-[-100%]  shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 bg-gray-900">
                <div class="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                  <ul class="px-6 pt-32 text-gray-900 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0" >
                    <li>
                    <Link href="/" >
                    <a  class="group text-white relative before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:text-purple-300">
                        <span class="group-hover:text-purple-400">Home</span>
                      </a>
                    </Link>
     
                    </li>
                    <li>
                      <Link href="/blog" >
                      <a href="#" class="group relative text-white before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:text-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                        <span class="relative group-hover:text-purple-400">Tweet</span>
                      </a>
                      </Link>
      
                    </li>
                    <li>
                    <Link href="/blog" >
                    <a href="#" class="group relative text-white before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:text-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                        <span class="relative group-hover:text-purple-400">Portfolio</span>
                      </a>
                      </Link>
                    </li>
                    <li>
                    <Link href="/blog" >
                    <a href="#" class="group relative text-white before:absolute before:inset-x-0 before:bottom-0 before:h-2 before:origin-right before:scale-x-0 before:text-cyan-100 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                        <span class="relative group-hover:text-purple-400">About Us</span>
                      </a>
                      </Link>
                    </li>
                  </ul>

                  <div class="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-1 lg:py-0 lg:pr-0 lg:pl-0">
                    <a href="#" class="block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 text-center text-white">
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </header>



  <section class="text-gray-400 bg-gray-900 body-font" >
  <div class="container mx-auto flex px-5 py-28 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className={styles.Heading} >Creating Projects
        <br class="hidden lg:inline-block"/> That Create Attention
      </h1>
      <p class="mb-8 text-xl ">This is an open-source platform for the students of IGMSSS class 9. It gives you all the notes of almost any subject for absolutely free of cost!.🚀</p>
      <div class="flex justify-left">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://assets-global.website-files.com/5f1ffe42f11f7a3ad95f8d70/5fafcdb3025d1419b7127564_info%20pssdfdnkm%2Cfages%202%201%201Artboard%202-p-500.png"/>
    </div>
  </div>
</section>




<section class="text-gray-400 body-font bg-gray-800">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Pitchfork Kickstarter Taxidermy</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/>
          <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-white font-medium title-font mb-4">Chichen Itza</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content"/>
          <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-white font-medium title-font mb-4">Colosseum Roma</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content"/>
          <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-white font-medium title-font mb-4">Great Pyramid of Giza</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content"/>
          <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">SUBTITLE</h3>
          <h2 class="text-lg text-white font-medium title-font mb-4">San Francisco</h2>
          <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        </div>
      </div>
    </div>
  </div>
</section>


  

   


    </div>
  )
}

 
    
     


