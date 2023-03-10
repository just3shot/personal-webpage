import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import AaronPhoto from '../../public/aaron_photo.jpg';
import GithubLogo from '../../public/github-logo.svg';
import LinkedinLogo from '../../public/linkedin-logo.png';
import AltNativeLogo from '../../public/alt_native.png';
import SpringBootLogo from '../../public/springboot_logo.png';
import ReactLogo from '../../public/react-icon.png';
import ReactMUILogo from '../../public/react-mui-icon.png';
import BangDiceGameLogo from '../../public/bang_dice_game_logo.png';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Aaron Personal Webpage</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/bugcat.png" />
      </Head>
      <header className="mx-auto my-8 flex h-16 w-4/5 select-none flex-col items-center justify-center font-mono sm:h-32 lg:my-0 lg:h-24 lg:flex-row lg:justify-between">
        <div className="mx-auto flex h-full items-center justify-center text-2xl font-semibold text-red-500">
          <Image alt="cat icon" src="/bugcat.png" width="40" height="40" className="mr-4" />
          <Link href="" scroll={false}>just3shot</Link>
        
        </div>
        <ul className="mx-auto hidden h-full items-center justify-center text-xl gap-x-20 sm:flex font-medium text-red-400">
          <li className="relative before:pointer-events-none before:absolute before:w-0 before:overflow-hidden whitespace-nowrap before:text-red-500 before:duration-300 before:content-['About_Me'] hover:before:w-full">
            <Link href="#about" scroll={false}>About Me</Link>
          </li>
          <li className="relative before:pointer-events-none before:absolute before:w-0 before:overflow-hidden whitespace-nowrap before:text-red-500 before:duration-300 before:content-['Projects'] hover:before:w-full">
            <Link href="#projects" scroll={false}>Projects</Link>
          </li>
          <li className="relative before:pointer-events-none before:absolute before:w-0 before:overflow-hidden whitespace-nowrap before:text-red-500 before:duration-300 before:content-['Contact'] hover:before:w-full">
            <Link href="#contact" scroll={false}>Contact</Link>
          </li>
          <li className="relative before:pointer-events-none before:absolute before:w-0 before:overflow-hidden whitespace-nowrap before:text-red-500 before:duration-300 before:content-['Resume'] hover:before:w-full">
            <a href="../../ResumeAaron.pdf" target="_blank" download="Aaron_Tan_Resume">Resume</a>
          </li>
        </ul>
      </header>
      <main className="font-mono">

        <div className="my-12 mx-auto flex flex-col w-6/12 items-center justify-center sm:my-20 lg:my-32 gap-x-20 lg:flex-row">
          <div className="gap-x-20">
            <Image alt="Photo of Aaron" src={AaronPhoto} width="300" height="300" className="rounded-full" />
            <div className="mt-4 mb-8 flex items-center justify-around">
              <Link href="https://github.com/just3shot">
                <Image alt="Github Logo" src={GithubLogo} width="32" height="32" className="sm:grayscale sm:hover:grayscale-0 sm:hover:scale-150 duration-200" />
              </Link>
              <Link href="https://https://www.linkedin.com/in/aaron-tan-81bba3203">
                <Image alt="Linkedin Logo" src={LinkedinLogo} width="32" height="32" className="sm:grayscale sm:hover:grayscale-0 sm:hover:scale-150 duration-200" />
              </Link>
            </div>
          </div>
          <div className="mb-12 px-4 text-center lg:text-left select-none">
            <h1>
              <span className=" text-red-900 text-4xl text-bold">Hi, I am</span>
              <br />
              <span className=" text-red-400 text-4xl text-bold whitespace-nowrap">Aaron Tan</span>
            </h1>
            <br />
            <h2>
              <span className=" text-red-900 text-xl text-semibold">Final Year Undergraduate at NUS</span>
              <br />
              <span className=" text-red-900 text-xl text-semibold">Information Systems</span>
            </h2>
          </div>
        </div>

        <div className="mx-auto py-4 items-center justify-center text-center bg-red-400 h-full text-white">
          
          <div className="mx-auto w-6/12 mb-8">
            <h1 id="about" className="mx-auto my-8 text-3xl">About Me</h1>
            <h1>I am an aspiring software engineer graduating from NUS Information Systems in June 2023. I like to read manga and play games in my free time. Please hire me.</h1>
          </div>

          <div className="mx-auto my-12 w-4/5 lg:w-8/12">
            <h1 id="projects" className="mb-8 text-3xl">Past Projects</h1>
            <div className="grid grid-row-2 gap-y-20 text-black">

              <Link href="https://docs.google.com/document/d/1vl-S56SAKvOvkHLCD4LuB5qup3myMa2z7MC55ShfDT4/edit?usp=sharing" target="_blank">
                <div className="flex flex-col-reverse justify-center items-center gap-y-8 lg:gap-x-20 bg-gray-100  rounded-2xl p-8 shadow-2xl lg:flex-row hover:bg-sky-100">
                  <div className="text-center lg:text-left">
                    <h1 className="text-xl mb-8">Information Systems Capstone Project</h1>
                    <ul className="text-left">
                      <li>Worked with Alt.Native to build an end-to-end refashion service platform</li>
                      <br />
                      <li>Collaborated in a team of 6 where and worked mostly on Front-End</li>
                    </ul>
                    <br />
                    <h1 className="text-xl mb-8">Main Technology Used</h1>
                    <div className="flex gap-x-4 w-16 h-16 lg:gap-x-20">
                      <Image alt="Spring Boot Logo" src={SpringBootLogo} />
                      <Image alt="React Logo" src={ReactLogo} />
                      <Image alt="React MUI Logo" src={ReactMUILogo} />
                    </div>

                  </div>
                  <div>
                    <Image alt="Alt.native Logo" src={AltNativeLogo} className="w-60 h-60 lg:w-40 lg:h-40" />
                  </div>
                </div>
              </Link>

              <Link href="https://github.com/just3shot/bang-game" target="_blank">
                <div className="flex flex-col-reverse justify-center items-center gap-y-8 lg:gap-x-20 bg-gray-100  rounded-2xl p-8 shadow-2xl lg:flex-row hover:bg-sky-100">
                  <div className="text-center lg:text-left">
                    <h1 className="text-xl mb-8">Bang! The Dice Game</h1>
                    <ul className="text-left">
                      <li>A web application trying to make a clone of the board game Bang! the Dice Game</li>
                      <li>Currently only works on local multiplayer</li>
                    </ul>
                    <br />
                    <h1 className="text-xl mb-8">Main Technology Used</h1>
                    <div className="flex gap-x-4 w-16 h-16 lg:gap-x-20">
                      <Image alt="React Logo" src={ReactLogo} />
                      <Image alt="React MUI Logo" src={ReactMUILogo} />
                    </div>

                  </div>
                  <div>
                    <Image alt="Bang Dice Game Logo" src={BangDiceGameLogo} className="w-48 h-64 lg:w-32 lg:h-44" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="mx-auto w-6/12 mb-8">
            <h1 id="contact" className="mx-auto my-8 text-3xl">Contact Me</h1>
            <ul>
              <li className="lg:text-left">I am always looking for new opportunities. Get in touch with me through my linkedin or email. Thank you!</li>
           
            </ul>
          </div>

        </div>

      </main>
      <footer className="bg-red-400 flex justify-center items-center py-4 font-mono border-t-4 border-red-300">
        <h1 className="text-white text-lg">Designed and Built by Aaron Tan</h1>
      </footer>

    </>
  );
};

export default Home;
