import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'
 
function blog() {
  return (
    <div>

<Head>
        <title>My Application</title>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
        <script src="https://cdn.tailwindcss.com"></script>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>


      </Head>
      <header>
    <div class="relative z-20 border-b bg-gray-800" >
        <div class="px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
          <div class="flex items-center justify-between">
            <div class="relative z-20">
              <a href="#">
                <h1 className={styles.Name}>My Application</h1>
              </a>
            </div>

            <div class="flex items-center justify-end border-0">
              <input type="checkbox" name="hamburger" id="hamburger" class="peer" hidden/>
              <label for="hamburger" class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                <div aria-hidden="true" class="m-auto h-0.5 w-7 rounded bg-white transition duration-300"></div>
                <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-7 rounded bg-white transition duration-300"></div>
                <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-7 rounded bg-white transition duration-300"></div>
              </label>

              <div class="peer-checked:translate-x-0 fixed inset-0 w-[calc(80%-4.5rem)] translate-x-[-100%] border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0 bg-gray-800">
                <div class="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                  <ul class="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0" >
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







        
    </div>
  )
}

export default blog