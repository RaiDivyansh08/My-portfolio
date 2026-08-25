import React from 'react'
import { experienceData } from '../../../assets/assets'
import { motion } from 'motion/react'

const Experience = () => {
  return (
    <motion.div
      id="experience"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h4
        className="text-center mb-2 text-lg font-ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        My journey
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Experience
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-16 font-ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        My professional experience and the work I have done while
        developing my skills as a software developer.
      </motion.p>

      {/* Experience */}
      <div className="max-w-5xl mx-auto">
        {experienceData.map(
          (
            {
              role,
              company,
              location,
              duration,
              description,
              technologies,
              work,
            },
            index
          ) => (
            <motion.div
              key={index}
              className="relative flex gap-5 sm:gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              {/* Timeline */}
              <div className="relative flex flex-col items-center">
                {/* Dot */}
                <div className="relative z-10 mt-2 w-3 h-3 rounded-full border-2 border-gray-500 bg-white dark:bg-black dark:border-white shrink-0" />

                {/* Line */}
                <div className="absolute top-5 bottom-0 w-px bg-gray-300 dark:bg-white/20" />
              </div>

              {/* Content */}
              <div className="flex-1 pb-16">

                {/* Duration */}
                <p className="text-sm text-gray-500 dark:text-white/60 mb-2">
                  {duration}
                </p>

                {/* Role */}
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
                  {role}
                </h3>

                {/* Company */}
                <p className="mt-1 text-base text-gray-700 dark:text-white/80">
                  {company}
                </p>

                {/* Location */}
                <p className="mt-1 text-sm text-gray-500 dark:text-white/60">
                  {location}
                </p>

                {/* Description */}
                <p className="mt-5 max-w-3xl text-sm leading-6 text-gray-600 dark:text-white/70">
                  {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 text-xs rounded-full border border-gray-300 text-gray-600 dark:border-white/30 dark:text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Work */}
                <ul className="mt-6 space-y-3">
                  {work.map((item, workIndex) => (
                    <li
                      key={workIndex}
                      className="flex gap-3 text-sm leading-6 text-gray-600 dark:text-white/70"
                    >
                      <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-gray-500 dark:bg-white/70" />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  )
}

export default Experience