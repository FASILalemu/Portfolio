import { motion } from "motion/react"
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{opacity: 0 }}
    whileInView={{opacity: 1 }}
    transition={{ duration: 1}}
    id='work' className="w-full px-[12%] py-10 scroll-mt-20">
        <motion.h4
        initial={{y: -20, opacity: 0 }}
        whileInView={{y: 0,  opacity: 1 }}
        transition={{ duration: 0.5 , delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo'>My portfolio</motion.h4>
        <motion.h2
        initial={{y: -20, opacity: 0 }}
        whileInView={{y: 0,  opacity: 1 }}
        transition={{ duration: 0.5 , delay: 0.5 }}
        className='text-center text-5xl font-Ovo'>My latest work</motion.h2>
        <motion.p
        initial={{opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ duration: 0.5 , delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            Welcome to my web development portfolio! Explore a collection of projects
            showcasing my expertise in full-stack web development.
        </motion.p>
        <motion.div
        initial={{opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ duration: 0.6 , delay: 0.9 }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 my-10 gap-5
        dark:text-black'>
            {workData.map((project, index) => (
                <motion.a
                whileHover={{scale: 1.05}}
                transition={{duration: 0.3}}
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    key={index}
                    className="block w-60 h-auto"
                >
                    <div className='w-full h-full aspect-square bg-no-repeat bg-cover
                        rounded relative cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage})` }}>

                        <div className='bg-white w-10/12 rounded-md absolute bottom-5
                            left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
                            justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 aspect-square flex
                                items-center justify-center shadow-[2px_2px_0px_black] 
                                group-hover:bg-lime-300 transition-all duration-300'>
                                <Image src={assets.send_icon} alt='send icon' className='w-5' />
                            </div>
                        </div>
                    </div>
                </motion.a>
            ))}
        </motion.div>
        <div className="flex justify-center">
    <motion.a
    initial={{opacity: 0 }}
    whileInView={{opacity: 1 }}
    transition={{ duration: 0.5 , delay: 1.1 }}
    href="#" className="flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold 
        border rounded-full hover:bg-lightHover duration-500  border-black/35
        dark:text-white dark:border dark:border-white dark:hover:bg-darkHover">
        Show more
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt="" className="w-5" />
    </motion.a>
</div>



    </motion.div>
  )
}

export default Work
