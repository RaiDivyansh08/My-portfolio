import React from 'react'
import { assets, skillData } from '../../../assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'
const Skills = ({isDarkMode}) => {
  return (
    <motion.div id="skill" className='w-full px-[12%] py-10 scroll-mt-20'
    
     initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}>
          <motion.h4 className='text-center mb-2 text-lg font-ovo'
           initial={{y: -20 ,opacity:0}}
        whileInView={{y:0 ,opacity:1}}
        transition={{duration:0.3 ,delay:0.5}}>What I work with</motion.h4>
      <motion.h2 
       initial={{y: -20 ,opacity:0}}
        whileInView={{y:0 ,opacity:1}}
        transition={{duration:0.5 ,delay:0.5}}className='text-center text-5xl font-ovo'>My skills</motion.h2>

      <motion.p 
       initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5 ,delay:0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>A collection of the tools, technologies, and concepts I use to build reliable, responsive, and user-focused digital experiences.</motion.p>

      <motion.div 
       initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.9 ,delay:0.6}}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 '>
        {skillData.map(({ icon, title, description, technologies, link }, index) => (
          <motion.div
           whileHover={{scale:1.05}}
         key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer flex flex-col hover:bg-lightHover hover:translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
            <Image src={icon} alt='' className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
            <p className='text-sm  text-gray-600 leading-5 dark:text-white/80'>{description}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2.5 py-1 text-xs rounded-full border border-gray-300 text-gray-600 dark:text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a href="/skills" className=' flex items-center gap-2 text-sm mt-auto pt-5 justify-center'>Read more<Image src={isDarkMode?assets.right_arrow_white:assets.right_arrow} alt='' className=' w-4' /></a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Skills