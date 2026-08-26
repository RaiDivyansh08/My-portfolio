'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { assets } from '../../../assets/assets'
import { useTheme } from '../ThemeProvider'
import Navbar from '../components/Navbar'

const skillCategories = [
  {
    title: 'Programming',
    icon: assets.programming_icon,
    description:
      'Programming languages and core concepts I use to understand problems and build reliable solutions.',
    skills: ['C', 'C++', 'JavaScript', 'Python', 'OOP', 'Data Structures'],
  },
  {
    title: 'Frontend Development',
    icon: assets.code_icon,
    description:
      'Building responsive, interactive and user-focused interfaces for modern web applications.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend Development',
    icon: assets.backend_icon,
    description:
      'Developing server-side logic, APIs and application functionality that connects the frontend with data.',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'API Integration',
      'Authentication',
      'Server-side Logic',
    ],
  },
  {
    title: 'Database',
    icon: assets.database_icon,
    description:
      'Working with databases to store, manage and retrieve application data efficiently.',
    skills: [
      'MongoDB',
      'MySQL',
      'Firebase',
      'CRUD Operations',
      'Database Design',
    ],
  },
  {
    title: 'Cloud & Deployment',
    icon: assets.cloud_icon,
    description:
      'Deploying applications and understanding the basics of modern development and production workflows.',
    skills: [
      'Git',
      'GitHub',
      'Vercel',
      'Firebase',
      'Deployment',
      'CI/CD Fundamentals',
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: assets.tools_icon,
    description:
      'Tools that help me write, test, debug and manage software efficiently.',
    skills: [
      'VS Code',
      'Git',
      'GitHub',
      'Postman',
      'Chrome DevTools',
      'npm',
    ],
  },
]

const practicalSkills = [
  {
    title: 'React.js',
    where:
      'Building interactive and component-based user interfaces.',
    canDo:
      'Create reusable components, handle user interactions, manage state and build responsive interfaces.',
    understand:
      'Components, props, hooks, state, conditional rendering and component-based architecture.',
  },
  {
    title: 'Next.js',
    where:
      'Building modern React applications with routing, optimized assets and production deployment.',
    canDo:
      'Create structured applications, responsive pages, reusable layouts and production-ready web experiences.',
    understand:
      'App Router, client components, server-side concepts, static assets, routing and deployment.',
  },
  {
    title: 'JavaScript',
    where:
      'Used as the main programming language for frontend interactions and application logic.',
    canDo:
      'Build dynamic interfaces, manipulate data, work with APIs and implement application logic.',
    understand:
      'ES6+, functions, arrays, objects, asynchronous JavaScript, promises and DOM concepts.',
  },
  {
    title: 'Node.js',
    where:
      'Used for developing backend functionality and server-side applications.',
    canDo:
      'Build APIs, handle requests, process application logic and connect backend services with databases.',
    understand:
      'Modules, asynchronous programming, APIs, HTTP concepts and server-side JavaScript.',
  },
  {
    title: 'MongoDB',
    where:
      'Used for storing application data in full-stack applications.',
    canDo:
      'Create collections, perform CRUD operations and connect application logic with stored data.',
    understand:
      'Documents, collections, queries, database relationships and backend integration.',
  },
  {
    title: 'Tailwind CSS',
    where:
      'Used to create responsive interfaces and maintain consistent styling across applications.',
    canDo:
      'Build responsive layouts, reusable UI patterns and dark/light mode interfaces.',
    understand:
      'Utility classes, responsive breakpoints, flexbox, grid, spacing and responsive design.',
  },
]

const buildCapabilities = [
  'Responsive Web Applications',
  'Interactive User Interfaces',
  'Full-Stack Applications',
  'REST APIs',
  'Database-driven Applications',
  'Responsive Landing Pages',
]

const developmentSteps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Understand the problem, requirements and expected user experience before writing code.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'Break the problem into components, features and technical requirements.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Develop reusable, maintainable and responsive components.',
  },
  {
    number: '04',
    title: 'Test',
    description:
      'Test functionality, responsiveness and user experience across different screen sizes.',
  },
  {
    number: '05',
    title: 'Deploy',
    description:
      'Deploy the application and verify that everything works correctly in production.',
  },
  {
    number: '06',
    title: 'Improve',
    description:
      'Continuously improve performance, usability, maintainability and overall experience.',
  },
]

const currentlyLearning = [
  'Cloud Computing',
  'Docker',
  'System Design',
  'CI/CD',
  'React Native',
]

const tools = [
  'Git',
  'GitHub',
  'VS Code',
  'Postman',
  'Chrome DevTools',
  'npm',
  'Vercel',
]

const fadeUp = {
  initial: {
    y: 30,
    opacity: 0,
  },

  whileInView: {
    y: 0,
    opacity: 1,
  },

  viewport: {
    once: true,
    amount: 0.15,
  },
}

const Skills = () => {
  const { isDarkMode, setIsDarkMode } = useTheme()

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* ================= MAIN ================= */}

      <main
        id="top"
        className="
          w-full
          min-h-screen
          px-[6%]
          sm:px-[8%]
          lg:px-[10%]
          pt-32
          pb-20
          bg-white
          text-gray-800
          dark:bg-darkTheme
          dark:text-white
          transition-colors
          duration-300
        "
      >

        {/* ================= HERO ================= */}

        <motion.section
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="
            max-w-4xl
            mx-auto
            text-center
            mb-20
          "
        >
          <p className="font-ovo text-base sm:text-lg mb-2">
            What I work with
          </p>

          <h1
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-ovo
            "
          >
            My Technical Skills
          </h1>

          <p
            className="
              max-w-2xl
              mx-auto
              mt-5
              text-sm
              sm:text-base
              text-gray-600
              dark:text-white/70
              leading-7
              font-ovo
            "
          >
            A collection of the technologies, tools and concepts I use
            to build responsive, functional and user-focused digital
            experiences.
          </p>
        </motion.section>


        {/* ================= TECHNICAL SKILLS ================= */}

        <section className="max-w-6xl mx-auto mb-28">

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="font-ovo text-base sm:text-lg mb-2">
              My toolkit
            </p>

            <h2 className="text-3xl sm:text-4xl font-ovo">
              Technical Skills
            </h2>
          </motion.div>


          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5
              sm:gap-6
            "
          >

            {skillCategories.map((category, index) => (

              <motion.div
                key={category.title}

                initial={{
                  y: 40,
                  opacity: 0,
                }}

                whileInView={{
                  y: 0,
                  opacity: 1,
                }}

                viewport={{
                  once: true,
                  amount: 0.15,
                }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}

                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}

                className="
                  rounded-2xl
                  border
                  border-gray-200
                  dark:border-white/10
                  bg-white
                  dark:bg-darkHover
                  p-6
                  shadow-sm
                  hover:shadow-lg
                  hover:border-gray-400
                  dark:hover:border-white/30
                  transition-all
                  duration-300
                  cursor-default
                "
              >

                {/* ICON + TITLE */}

                <div className="flex items-center gap-4 mb-5">

                  <motion.div
                    whileHover={{
                      rotate: 5,
                      scale: 1.1,
                    }}

                    transition={{
                      duration: 0.2,
                    }}

                    className="
                      w-12
                      h-12
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      bg-gray-100
                      dark:bg-white/10
                      shrink-0
                    "
                  >

                    {category.icon && (
                      <Image
                        src={category.icon}
                        alt=""
                        className="w-6 dark:invert"
                      />
                    )}

                  </motion.div>


                  <h3 className="text-xl font-ovo">
                    {category.title}
                  </h3>

                </div>


                {/* DESCRIPTION */}

                <p
                  className="
                    text-sm
                    leading-6
                    text-gray-600
                    dark:text-white/60
                    mb-5
                  "
                >
                  {category.description}
                </p>


                {/* TECHNOLOGIES */}

                <div className="flex flex-wrap gap-2">

                  {category.skills.map((skill) => (

                    <motion.span
                      key={skill}

                      whileHover={{
                        y: -2,
                      }}

                      className="
                        px-3
                        py-1.5
                        rounded-full
                        text-xs
                        border
                        border-gray-300
                        dark:border-white/20
                        text-gray-700
                        dark:text-white/80
                        hover:border-gray-500
                        dark:hover:border-white/40
                        transition-colors
                        duration-200
                      "
                    >
                      {skill}
                    </motion.span>

                  ))}

                </div>

              </motion.div>

            ))}

          </div>

        </section>


        {/* ================= SKILLS IN PRACTICE ================= */}

        <section className="max-w-5xl mx-auto mb-28">

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >

            <p className="font-ovo text-base sm:text-lg mb-2">
              Beyond the names
            </p>

            <h2 className="text-3xl sm:text-4xl font-ovo">
              Skills in Practice
            </h2>

            <p
              className="
                max-w-2xl
                mx-auto
                mt-4
                text-sm
                sm:text-base
                text-gray-600
                dark:text-white/60
                font-ovo
              "
            >
              A closer look at how I use some of the technologies
              in actual development.
            </p>

          </motion.div>


          <div className="space-y-6">

            {practicalSkills.map((skill, index) => (

              <motion.div
                key={skill.title}

                initial={{
                  opacity: 0,
                  y: 35,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.15,
                }}

                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}

                whileHover={{
                  y: -4,
                }}

                className="
                  rounded-2xl
                  border
                  border-gray-200
                  dark:border-white/10
                  bg-white
                  dark:bg-darkHover
                  p-6
                  sm:p-8
                  hover:shadow-md
                  hover:border-gray-400
                  dark:hover:border-white/30
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    gap-6
                  "
                >

                  {/* SKILL NAME */}

                  <div className="sm:w-40 shrink-0">

                    <h3 className="text-2xl font-ovo">
                      {skill.title}
                    </h3>

                  </div>


                  {/* DETAILS */}

                  <div
                    className="
                      flex-1
                      grid
                      grid-cols-1
                      md:grid-cols-3
                      gap-6
                    "
                  >

                    <div>

                      <p className="text-sm font-semibold mb-2">
                        Where I use it
                      </p>

                      <p
                        className="
                          text-sm
                          leading-6
                          text-gray-600
                          dark:text-white/60
                        "
                      >
                        {skill.where}
                      </p>

                    </div>


                    <div>

                      <p className="text-sm font-semibold mb-2">
                        What I can do
                      </p>

                      <p
                        className="
                          text-sm
                          leading-6
                          text-gray-600
                          dark:text-white/60
                        "
                      >
                        {skill.canDo}
                      </p>

                    </div>


                    <div>

                      <p className="text-sm font-semibold mb-2">
                        What I understand
                      </p>

                      <p
                        className="
                          text-sm
                          leading-6
                          text-gray-600
                          dark:text-white/60
                        "
                      >
                        {skill.understand}
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </section>


        {/* ================= WHAT I CAN BUILD ================= */}

        <section className="max-w-5xl mx-auto mb-28">

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >

            <p className="font-ovo text-base sm:text-lg mb-2">
              My capabilities
            </p>

            <h2 className="text-3xl sm:text-4xl font-ovo">
              What I Can Build
            </h2>

          </motion.div>


          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-4
            "
          >

            {buildCapabilities.map((item, index) => (

              <motion.div
                key={item}

                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}

                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}

                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}

                className="
                  p-5
                  rounded-xl
                  border
                  border-gray-200
                  dark:border-white/10
                  bg-gray-50
                  dark:bg-darkHover
                  text-center
                  font-ovo
                  hover:shadow-md
                  hover:border-gray-400
                  dark:hover:border-white/30
                  transition-all
                  duration-300
                  cursor-default
                "
              >
                {item}
              </motion.div>

            ))}

          </div>

        </section>


        {/* ================= DEVELOPMENT APPROACH ================= */}

        <section className="max-w-6xl mx-auto mb-28">

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >

            <p className="font-ovo text-base sm:text-lg mb-2">
              How I work
            </p>

            <h2 className="text-3xl sm:text-4xl font-ovo">
              My Development Approach
            </h2>

          </motion.div>


          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >

            {developmentSteps.map((step, index) => (

              <motion.div
                key={step.number}

                initial={{
                  opacity: 0,
                  y: 35,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                whileHover={{
                  y: -6,
                  scale: 1.01,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}

                className="
                  border
                  border-gray-200
                  dark:border-white/10
                  rounded-2xl
                  p-6
                  bg-white
                  dark:bg-darkHover
                  hover:shadow-md
                  hover:border-gray-400
                  dark:hover:border-white/30
                  transition-all
                  duration-300
                "
              >

                <span
                  className="
                    text-sm
                    text-gray-400
                    dark:text-white/40
                  "
                >
                  {step.number}
                </span>

                <h3 className="text-xl font-ovo mt-3 mb-2">
                  {step.title}
                </h3>

                <p
                  className="
                    text-sm
                    leading-6
                    text-gray-600
                    dark:text-white/60
                  "
                >
                  {step.description}
                </p>

              </motion.div>

            ))}

          </div>

        </section>


        {/* ================= TOOLS ================= */}

        <section className="max-w-4xl mx-auto mb-28">

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >

            <p className="font-ovo text-base sm:text-lg mb-2">
              My workflow
            </p>

            <h2 className="text-3xl sm:text-4xl font-ovo">
              Tools I Work With
            </h2>

          </motion.div>


          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >

            {tools.map((tool, index) => (

              <motion.span
                key={tool}

                initial={{
                  opacity: 0,
                  y: 10,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}

                className="
                  px-5
                  py-2.5
                  rounded-full
                  border
                  border-gray-300
                  dark:border-white/20
                  font-ovo
                  text-sm
                  hover:border-gray-500
                  dark:hover:border-white/40
                  hover:shadow-sm
                  transition-all
                  duration-200
                  cursor-default
                "
              >
                {tool}
              </motion.span>

            ))}

          </div>

        </section>


        {/* ================= CURRENTLY LEARNING ================= */}

        <section className="max-w-4xl mx-auto mb-28">

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}

            whileHover={{
              y: -4,
            }}

            className="
              rounded-3xl
              border
              border-gray-200
              dark:border-white/10
              bg-gray-50
              dark:bg-darkHover
              p-8
              sm:p-12
              text-center
              hover:shadow-md
              hover:border-gray-400
              dark:hover:border-white/30
              transition-all
              duration-300
            "
          >

            {/* LEARNING ICON */}

            <div className="flex justify-center mb-5">

              <motion.div
                whileHover={{
                  rotate: 5,
                  scale: 1.1,
                }}

                transition={{
                  duration: 0.2,
                }}

                className="
                  w-14
                  h-14
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-white
                  dark:bg-white/10
                "
              >

                {assets.learning_icon && (
                  <Image
                    src={assets.learning_icon}
                    alt=""
                    className="w-7 dark:invert"
                  />
                )}

              </motion.div>

            </div>


            <p className="font-ovo text-base sm:text-lg mb-2">
              Always learning
            </p>

            <h2 className="text-3xl sm:text-4xl font-ovo">
              Currently Exploring
            </h2>

            <p
              className="
                max-w-xl
                mx-auto
                mt-4
                text-gray-600
                dark:text-white/60
              "
            >
              I continuously explore new technologies and concepts
              to improve the way I build and understand software.
            </p>


            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-3
                mt-7
              "
            >

              {currentlyLearning.map((item, index) => (

                <motion.span
                  key={item}

                  whileHover={{
                    y: -3,
                    scale: 1.04,
                  }}

                  transition={{
                    duration: 0.2,
                  }}

                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-gray-300
                    dark:border-white/20
                    text-sm
                    hover:border-gray-500
                    dark:hover:border-white/40
                    transition-colors
                    duration-200
                  "
                >
                  {item}
                </motion.span>

              ))}

            </div>

          </motion.div>

        </section>


        {/* ================= CTA ================= */}

        <motion.section
          {...fadeUp}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >

          <p className="font-ovo text-base sm:text-lg mb-3">
            Let's build something useful
          </p>

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-ovo
            "
          >
            Have a project in mind?
          </h2>

          <p
            className="
              max-w-xl
              mx-auto
              mt-4
              text-gray-600
              dark:text-white/60
            "
          >
            I'm always interested in learning, building and working
            on meaningful digital experiences.
          </p>


          {/* CONTACT BUTTON */}

          <motion.a
            href="/#contect"

            whileHover={{
              scale: 1.05,
              y: -2,
            }}

            whileTap={{
              scale: 0.97,
            }}

            transition={{
              duration: 0.2,
            }}

            className="
              inline-flex
              items-center
              gap-2
              px-8
              py-3
              mt-7
              rounded-full
              bg-black
              text-white
              hover:bg-gray-700
              dark:bg-white
              dark:text-black
              dark:hover:bg-gray-200
              font-ovo
              shadow-sm
              hover:shadow-md
              transition-colors
              duration-300
            "
          >

            Contact me

            <motion.div
              whileHover={{
                x: 4,
              }}

              transition={{
                duration: 0.2,
              }}
            >
              <Image
                src={assets.right_arrow_white}
                alt=""
                className="w-4 dark:invert"
              />
            </motion.div>

          </motion.a>

        </motion.section>

      </main>
    </>
  )
}

export default Skills