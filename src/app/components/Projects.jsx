import React from 'react'
import { assets, workData } from '../../../assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'
import Link from 'next/link'
const Projects = ({isDarkMode}) => {
  return (
     <motion.div id="project"className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1 }}
        ><motion.h4 
         initial={{y: -20 ,opacity:0}}
        whileInView={{y:0 ,opacity:1}}
        transition={{duration:0.5 ,delay:0.3}}className='text-center mb-2 text-lg font-ovo'>What I've built</motion.h4>
        <motion.h2   initial={{y: -20 ,opacity:0}}
        whileInView={{y:0 ,opacity:1}}
        transition={{duration:0.5 ,delay:0.5}}
        className='text-center text-5xl font-ovo'>My projects</motion.h2>

        <motion.p 
         initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5 ,delay:0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>A selection of projects where I’ve turned ideas into practical, user-focused solutions through thoughtful design and development.</motion.p>
        <motion.div  className='grid grid-cols-auto my-10 gap-5 dark:text-black'
         initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6 ,delay:0.9}}>
      {workData.map((project, index) => (
    <motion.div
        key={project.slug}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative"
    >
        <Link
            href={`/projects/${project.slug}`}
            className="block aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{
                backgroundImage: `url(${project.bgImage})`
            }}
        >

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 text-sm">

                <div>
                    <h2 className="font-semibold">
                        {project.title}
                    </h2>

                    <p className="text-sm text-gray-700">
                        {project.description}
                    </p>
                </div>

                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <Image
                        src={assets.send_icon}
                        alt=""
                        className="w-5"
                    />
                </div>

            </div>

        </Link>
    </motion.div>
))}
        </motion.div>
        <motion.a 
         initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5 ,delay:1.1}}
        href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700  rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover '>Show more <Image src={isDarkMode?assets.right_arrow_bold_dark:assets.right_arrow_bold} alt='' className='w-4'/></motion.a>
</motion.div>
  )
}

export default Projects