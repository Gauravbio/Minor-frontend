import React from 'react'
import harshal from "../assets/Harshal.jfif"
import Arun from "../assets/Arun.jfif"
import gaurav from "../assets/Gaurav.jpg"
import {BsInstagram, BsLinkedin,BsGithub} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'


const About = () => {

  const {loading}=useSelector(state=> state.user)
  return (
    loading ? <Loader className="h-screen" /> :
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">"Alone we can do so little; together we can do so much."</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={harshal}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Harshal Choudhary</h2>
            <h3 className="text-gray-500 mb-3">Front-end developer</h3>
            <p className="mb-4">Student at ChameliDevi Group of Institutions</p>
            <span className="inline-flex">
              <a href="/" target="_blank" className="text-black-1000" rel="noreferrer">
                <BsGithub className='w-6 h-6'/>
              </a>
              <a href="https://www.instagram.com/harshal.mr99" target='_blank'className="ml-2 text-pink-500" rel="noreferrer">
                <BsInstagram className='w-6 h-6'/>
              </a>
              <a  href="https://www.linkedin.com/in/harshal-choudhary-0875a2223" target='_blank'className="ml-3 text-blue-500" rel="noreferrer">
                <BsLinkedin className='w-6 h-6' />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="src\assets\hanuman.png"/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Arpit Patel</h2>
            <h3 className="text-gray-500 mb-3">Machine Learning and Documentation</h3>
            <p className="mb-4">Student at ChameliDevi Group of Institutions</p>
            <span className="inline-flex">
              <a href="/" target="_blank" className="text-black-500">
                <BsGithub className='w-6 h-6'/>
              </a>
              <a href="https://www.instagram.com/_mr_unique_ap" target='_blank'className="ml-2 text-pink-500" rel="noreferrer">
                <BsInstagram className='w-6 h-6'/>
              </a>
              <a  href="https://www.linkedin.com" target='_blank' className="ml-3 text-blue-500" rel="noreferrer">
                <BsLinkedin className='w-6 h-6' />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={gaurav}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Gaurav Pathak</h2>
            <h3 className="text-gray-500 mb-3">Back-end developer </h3>
            <p className="mb-4">Student at ChameliDevi Group of Institutions</p>
            <span className="inline-flex">
              <a href="/" target="_blank" className="text-black-500">
                <BsGithub className='w-6 h-6'/>
              </a>
              <a href="https://www.instagram.com/gauravpathak5183" target='_blank'className="ml-2 text-pink-500" rel="noreferrer">
                <BsInstagram className='w-6 h-6'/>
              </a>
              <a  href="https://www.linkedin.com/in/gaurav-pathak-08a216212" target='_blank' className="ml-3 text-blue-500" rel="noreferrer">
                <BsLinkedin className='w-6 h-6' />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-full w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Arun}/>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-gray-900">Arun Choudhary</h2>
            <h3 className="text-gray-500 mb-3">Front-end developer</h3>
            <p className="mb-4">Student at ChameliDevi Group of Institutions</p>
            <span className="inline-flex">
              <a href="https://www.github.com/Choudhary-arun/" target="_blank" className="text-balck-500" rel="noreferrer">
                <BsGithub className='w-6 h-6'/>
              </a>
              <a href="https://www.instagram.com/choudhary_arun07" target='_blank' className="ml-2 text-pink-500" rel="noreferrer">
                <BsInstagram className='w-6 h-6'/>
              </a>
              <a  href="https://www.linkedin.com/in/arun-choudhary-952863228/"target='_blank' className="ml-3 text-blue-500" rel="noreferrer">
                <BsLinkedin className='w-6 h-6' />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}

export default About