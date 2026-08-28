'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { useParams } from 'next/navigation'

import { workData } from '../../../../assets/assets'
import Navbar from '../../components/Navbar'
import { useTheme } from '../../ThemeProvider'


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


const ProjectPage = () => {

    const { slug } = useParams()

    const { isDarkMode, setIsDarkMode } = useTheme()

    const [isBackFixed, setIsBackFixed] = useState(false)


    // Find selected project
    const project = workData.find(
        (item) => item.slug === slug
    )


    // Back button scroll behavior
    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 450) {
                setIsBackFixed(true)
            } else {
                setIsBackFixed(false)
            }

        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])


    // Dark mode
    useEffect(() => {

        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

    }, [isDarkMode])


    // Project not found
    if (!project) {

        return (
            <>
                <Navbar
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
                />

                <main
                    className="
                        min-h-screen
                        flex
                        items-center
                        justify-center
                        px-[6%]
                        bg-white
                        text-gray-800
                        dark:bg-darkTheme
                        dark:text-white
                    "
                >

                    <div className="text-center">

                        <h1 className="
                            text-4xl
                            sm:text-5xl
                            font-ovo
                        ">
                            Project Not Found
                        </h1>

                        <p className="
                            mt-4
                            text-gray-600
                            dark:text-white/60
                        ">
                            The project you're looking for doesn't exist.
                        </p>

                        <Link
                            href="/#project"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                mt-7
                                px-7
                                py-3
                                rounded-full
                                border
                                border-gray-500
                                dark:border-white/30
                                font-ovo
                                hover:bg-gray-100
                                dark:hover:bg-darkHover
                                transition
                            "
                        >
                            ← Back to Projects
                        </Link>

                    </div>

                </main>
            </>
        )
    }


    return (
        <>

            {/* =====================================================
                NAVBAR
            ===================================================== */}

            <Navbar
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
            />


            {/* =====================================================
                MAIN
            ===================================================== */}

            <main
                id="top"
                className="
                    w-full
                    min-h-screen

                    px-[6%]
                    sm:px-[8%]
                    lg:px-[10%]

                    pt-28
                    pb-20

                    bg-white
                    text-gray-800

                    dark:bg-darkTheme
                    dark:text-white

                    transition-colors
                    duration-300
                "
            >


                {/* =================================================
                    BACK TO PROJECTS
                ================================================= */}

                <div
                    className={`
                        z-40
                        transition-all
                        duration-300

                        ${
                            isBackFixed
                                ? `
                                    fixed
                                    top-24
                                    right-[6%]
                                    sm:right-[8%]
                                    lg:right-[10%]
                                  `
                                : `
                                    max-w-6xl
                                    mx-auto
                                    mb-8
                                    flex
                                    justify-end
                                  `
                        }
                    `}
                >

                    <Link
                        href="/#project"
                        className="
                            inline-flex
                            items-center
                            gap-2

                            px-5
                            py-2.5

                            rounded-full

                            border
                            border-gray-300
                            dark:border-white/20

                            bg-white/90
                            dark:bg-darkTheme/90

                            backdrop-blur-md
                            shadow-md

                            text-sm
                            font-ovo

                            text-gray-700
                            dark:text-white/80

                            hover:bg-gray-100
                            dark:hover:bg-darkHover

                            transition-all
                            duration-300
                        "
                    >
                        ← Back to Projects
                    </Link>

                </div>


                {/* =================================================
                    HERO
                ================================================= */}

                <section className="
                    max-w-6xl
                    mx-auto
                    mb-24
                ">

                    <motion.div
                        {...fadeUp}
                        transition={{
                            duration: 0.7
                        }}
                        className="text-center"
                    >

                        <p className="
                            font-ovo
                            text-base
                            sm:text-lg
                            mb-2
                        ">
                            Featured Project
                        </p>


                        <h1 className="
                            text-4xl
                            sm:text-5xl
                            lg:text-6xl
                            font-ovo
                        ">
                            {project.title}
                        </h1>


                        <p className="
                            max-w-2xl
                            mx-auto
                            mt-5

                            text-sm
                            sm:text-base

                            leading-7

                            text-gray-600
                            dark:text-white/60

                            font-ovo
                        ">
                            {project.description}
                        </p>

                    </motion.div>


                    {/* HERO IMAGE */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                        }}

                        animate={{
                            opacity: 1,
                            y: 0,
                        }}

                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                        }}

                        className="
    relative
    w-full
    max-w-3xl
    mx-auto
    aspect-square

    mt-10

    rounded-3xl
    overflow-hidden

    border
    border-gray-200
    dark:border-white/10

    shadow-sm

    bg-gray-100
    dark:bg-darkHover
">

                        <Image
                            src={project.bgImage}
                            alt={project.title}
                            fill
                            priority
                            className="object-cover"
                        />

                    </motion.div>

                </section>


                {/* =================================================
                    OVERVIEW
                ================================================= */}

                <section className="
                    max-w-5xl
                    mx-auto
                    mb-28
                ">

                    <motion.div
                        {...fadeUp}
                        transition={{
                            duration: 0.7
                        }}
                    >

                        <p className="
                            font-ovo
                            text-base
                            sm:text-lg
                            mb-2
                        ">
                            About the project
                        </p>


                        <h2 className="
                            text-3xl
                            sm:text-4xl
                            font-ovo
                        ">
                            Project Overview
                        </h2>


                        <p className="
                            mt-5

                            text-sm
                            sm:text-base

                            leading-8

                            text-gray-600
                            dark:text-white/60
                        ">
                            {project.overview}
                        </p>

                    </motion.div>

                </section>


                {/* =================================================
                    PROBLEM + SOLUTION
                ================================================= */}

                <section className="
                    max-w-6xl
                    mx-auto
                    mb-28
                ">

                    <div className="
                        grid
                        grid-cols-1
                        lg:grid-cols-2
                        gap-6
                    ">


                        {/* PROBLEM */}

                        <motion.div
                            {...fadeUp}
                            transition={{
                                duration: 0.6
                            }}

                            whileHover={{
                                y: -5
                            }}

                            className="
                                rounded-3xl

                                border
                                border-gray-200
                                dark:border-white/10

                                bg-gray-50
                                dark:bg-darkHover

                                p-7
                                sm:p-9

                                hover:shadow-md

                                transition-all
                                duration-300
                            "
                        >

                            <p className="
                                text-sm
                                text-gray-400
                                dark:text-white/40
                                mb-3
                            ">
                                01
                            </p>


                            <h2 className="
                                text-2xl
                                sm:text-3xl
                                font-ovo
                            ">
                                The Problem
                            </h2>


                            <p className="
                                mt-5
                                text-sm
                                leading-7
                                text-gray-600
                                dark:text-white/60
                            ">
                                {project.problem}
                            </p>

                        </motion.div>


                        {/* SOLUTION */}

                        <motion.div
                            {...fadeUp}
                            transition={{
                                duration: 0.7
                            }}

                            whileHover={{
                                y: -5
                            }}

                            className="
                                rounded-3xl

                                border
                                border-gray-200
                                dark:border-white/10

                                bg-white
                                dark:bg-darkHover

                                p-7
                                sm:p-9

                                hover:shadow-md

                                transition-all
                                duration-300
                            "
                        >

                            <p className="
                                text-sm
                                text-gray-400
                                dark:text-white/40
                                mb-3
                            ">
                                02
                            </p>


                            <h2 className="
                                text-2xl
                                sm:text-3xl
                                font-ovo
                            ">
                                The Solution
                            </h2>


                            <p className="
                                mt-5
                                text-sm
                                leading-7
                                text-gray-600
                                dark:text-white/60
                            ">
                                {project.solution}
                            </p>

                        </motion.div>

                    </div>

                </section>


                {/* =================================================
                    FEATURES
                ================================================= */}

                <section className="
                    max-w-6xl
                    mx-auto
                    mb-28
                ">

                    <motion.div
                        {...fadeUp}
                        transition={{
                            duration: 0.7
                        }}

                        className="
                            text-center
                            mb-12
                        "
                    >

                        <p className="
                            font-ovo
                            text-base
                            sm:text-lg
                            mb-2
                        ">
                            What it offers
                        </p>


                        <h2 className="
                            text-3xl
                            sm:text-4xl
                            font-ovo
                        ">
                            Key Features
                        </h2>

                    </motion.div>


                    <div className="
                        grid
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-3
                        gap-5
                    ">

                        {project.features.map(
                            (feature, index) => (

                                <motion.div
                                    key={feature}

                                    initial={{
                                        opacity: 0,
                                        y: 30,
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
                                        duration: 0.5,
                                        delay: index * 0.05,
                                    }}

                                    whileHover={{
                                        y: -5,
                                    }}

                                    className="
                                        rounded-2xl

                                        border
                                        border-gray-200
                                        dark:border-white/10

                                        bg-white
                                        dark:bg-darkHover

                                        p-6

                                        hover:shadow-md

                                        hover:border-gray-400
                                        dark:hover:border-white/30

                                        transition-all
                                        duration-300
                                    "
                                >

                                    <span className="
                                        text-sm
                                        text-gray-400
                                        dark:text-white/40
                                    ">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>


                                    <p className="
                                        mt-4

                                        text-sm
                                        leading-6

                                        text-gray-700
                                        dark:text-white/70
                                    ">
                                        {feature}
                                    </p>

                                </motion.div>

                            )
                        )}

                    </div>

                </section>


                {/* =================================================
                    TECHNOLOGIES
                ================================================= */}

                <section className="
                    max-w-5xl
                    mx-auto
                    mb-28
                ">

                    <motion.div
                        {...fadeUp}
                        transition={{
                            duration: 0.7
                        }}

                        className="
                            text-center
                            mb-10
                        "
                    >

                        <p className="
                            font-ovo
                            text-base
                            sm:text-lg
                            mb-2
                        ">
                            Built with
                        </p>


                        <h2 className="
                            text-3xl
                            sm:text-4xl
                            font-ovo
                        ">
                            Technologies Used
                        </h2>

                    </motion.div>


                    <div className="
                        flex
                        flex-wrap
                        justify-center
                        gap-3
                    ">

                        {project.technologies.map(
                            (technology, index) => (

                                <motion.span
                                    key={technology}

                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}

                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}

                                    viewport={{
                                        once: true,
                                    }}

                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.04,
                                    }}

                                    whileHover={{
                                        y: -3,
                                        scale: 1.04,
                                    }}

                                    className="
                                        px-5
                                        py-2.5

                                        rounded-full

                                        border
                                        border-gray-300
                                        dark:border-white/20

                                        text-sm

                                        text-gray-700
                                        dark:text-white/80

                                        hover:border-gray-500
                                        dark:hover:border-white/40

                                        transition-all
                                        duration-200
                                    "
                                >
                                    {technology}
                                </motion.span>

                            )
                        )}

                    </div>

                </section>


                {/* =================================================
                    MY ROLE
                ================================================= */}

                <section className="
                    max-w-5xl
                    mx-auto
                    mb-28
                ">

                    <motion.div
                        {...fadeUp}
                        transition={{
                            duration: 0.7
                        }}

                        className="
                            rounded-3xl

                            border
                            border-gray-200
                            dark:border-white/10

                            bg-gray-50
                            dark:bg-darkHover

                            p-8
                            sm:p-10
                        "
                    >

                        <p className="
                            font-ovo
                            text-base
                            sm:text-lg
                            mb-2
                        ">
                            My contribution
                        </p>


                        <h2 className="
                            text-3xl
                            sm:text-4xl
                            font-ovo
                        ">
                            My Role
                        </h2>


                        <p className="
                            mt-5

                            text-sm
                            sm:text-base

                            leading-8

                            text-gray-600
                            dark:text-white/60
                        ">
                            {project.role}
                        </p>

                    </motion.div>

                </section>


                {/* =================================================
                    CHALLENGES
                ================================================= */}

                <section className="
                    max-w-6xl
                    mx-auto
                    mb-28
                ">

                    <motion.div
                        {...fadeUp}
                        transition={{
                            duration: 0.7
                        }}

                        className="
                            text-center
                            mb-12
                        "
                    >

                        <p className="
                            font-ovo
                            text-base
                            sm:text-lg
                            mb-2
                        ">
                            What I solved
                        </p>


                        <h2 className="
                            text-3xl
                            sm:text-4xl
                            font-ovo
                        ">
                            Challenges
                        </h2>

                    </motion.div>


                    <div className="space-y-4">

                        {project.challenges.map(
                            (challenge, index) => (

                                <motion.div
                                    key={challenge}

                                    initial={{
                                        opacity: 0,
                                        x: -20,
                                    }}

                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}

                                    viewport={{
                                        once: true,
                                    }}

                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.05,
                                    }}

                                    className="
                                        flex
                                        gap-5
                                        items-start

                                        border-b
                                        border-gray-200
                                        dark:border-white/10

                                        pb-5
                                    "
                                >

                                    <span className="
                                        text-sm
                                        text-gray-400
                                        dark:text-white/40
                                        pt-1
                                    ">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>


                                    <p className="
                                        flex-1

                                        text-sm
                                        sm:text-base

                                        leading-7

                                        text-gray-600
                                        dark:text-white/60
                                    ">
                                        {challenge}
                                    </p>

                                </motion.div>

                            )
                        )}

                    </div>

                </section>


                {/* =================================================
                    RESULTS
                ================================================= */}

                <section className="
                    max-w-5xl
                    mx-auto
                    mb-28
                ">

                    <motion.div
                        {...fadeUp}
                        transition={{
                            duration: 0.7
                        }}

                        className="text-center"
                    >

                        <p className="
                            font-ovo
                            text-base
                            sm:text-lg
                            mb-2
                        ">
                            Outcome
                        </p>


                        <h2 className="
                            text-3xl
                            sm:text-4xl
                            font-ovo
                        ">
                            Results & Outcome
                        </h2>


                        <p className="
                            max-w-3xl
                            mx-auto
                            mt-5

                            text-sm
                            sm:text-base

                            leading-8

                            text-gray-600
                            dark:text-white/60
                        ">
                            {project.results}
                        </p>

                    </motion.div>

                </section>


                {/* =================================================
                    SCREENSHOTS
                ================================================= */}

                {project.screenshots.length > 0 && (

                    <section className="
                        max-w-6xl
                        mx-auto
                        mb-28
                    ">

                        <motion.div
                            {...fadeUp}
                            transition={{
                                duration: 0.7
                            }}

                            className="
                                text-center
                                mb-12
                            "
                        >

                            <p className="
                                font-ovo
                                text-base
                                sm:text-lg
                                mb-2
                            ">
                                Inside the project
                            </p>


                            <h2 className="
                                text-3xl
                                sm:text-4xl
                                font-ovo
                            ">
                                Project Screenshots
                            </h2>

                        </motion.div>


                        <div className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            gap-6
                        ">

                            {project.screenshots.map(
                                (screenshot, index) => (

                                    <motion.div
                                        key={screenshot}

                                        initial={{
                                            opacity: 0,
                                            y: 30,
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
                                            delay: index * 0.08,
                                        }}

                                        whileHover={{
                                            y: -5,
                                        }}

                                        className="
                                            relative
                                            w-full
                                            aspect-video

                                            overflow-hidden

                                            rounded-2xl

                                            border
                                            border-gray-200
                                            dark:border-white/10

                                            bg-gray-100
                                            dark:bg-darkHover

                                            shadow-sm
                                        "
                                    >

                                        <Image
                                            src={screenshot}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            fill
                                            className="
                                                object-cover

                                                transition-transform
                                                duration-500

                                                hover:scale-105
                                            "
                                        />

                                    </motion.div>

                                )
                            )}

                        </div>

                    </section>

                )}


                {/* =================================================
                    PROJECT LINKS
                ================================================= */}

                {(project.github || project.liveDemo) && (

                    <section className="
                        max-w-4xl
                        mx-auto
                        mb-24
                    ">

                        <motion.div
                            {...fadeUp}
                            transition={{
                                duration: 0.7
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
                            "
                        >

                            <p className="
                                font-ovo
                                text-base
                                sm:text-lg
                                mb-2
                            ">
                                Explore the project
                            </p>


                            <h2 className="
                                text-3xl
                                sm:text-4xl
                                font-ovo
                            ">
                                Project Links
                            </h2>


                            <div className="
                                flex
                                flex-wrap
                                justify-center
                                gap-4
                                mt-7
                            ">


                                {/* GITHUB */}

                                {project.github && (

                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"

                                        whileHover={{
                                            scale: 1.04,
                                            y: -2,
                                        }}

                                        whileTap={{
                                            scale: 0.97,
                                        }}

                                        className="
                                            px-7
                                            py-3

                                            rounded-full

                                            border
                                            border-gray-500
                                            dark:border-white/30

                                            font-ovo

                                            hover:bg-white
                                            dark:hover:bg-white/10

                                            transition
                                        "
                                    >
                                        View GitHub
                                    </motion.a>

                                )}


                                {/* LIVE DEMO */}

                                {project.liveDemo && (

                                    <motion.a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"

                                        whileHover={{
                                            scale: 1.04,
                                            y: -2,
                                        }}

                                        whileTap={{
                                            scale: 0.97,
                                        }}

                                        className="
                                            px-7
                                            py-3

                                            rounded-full

                                            bg-black
                                            text-white

                                            dark:bg-white
                                            dark:text-black

                                            font-ovo

                                            hover:opacity-80

                                            transition
                                        "
                                    >
                                        Live Demo
                                    </motion.a>

                                )}

                            </div>

                        </motion.div>

                    </section>

                )}


                {/* =================================================
                    BOTTOM CTA
                ================================================= */}

                <motion.section
                    {...fadeUp}
                    transition={{
                        duration: 0.7
                    }}

                    className="
                        max-w-3xl
                        mx-auto
                        text-center
                    "
                >

                    <p className="
                        font-ovo
                        text-base
                        sm:text-lg
                        mb-3
                    ">
                        Explore more
                    </p>


                    <h2 className="
                        text-3xl
                        sm:text-4xl
                        lg:text-5xl
                        font-ovo
                    ">
                        Want to see more projects?
                    </h2>


                    <p className="
                        max-w-xl
                        mx-auto
                        mt-4

                        text-gray-600
                        dark:text-white/60
                    ">
                        Take a look at the other projects I've built
                        and explored.
                    </p>


                    <motion.div
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

                        className="inline-block"
                    >

                        <Link
                            href="/#project"
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

                                dark:bg-white
                                dark:text-black

                                font-ovo

                                shadow-sm

                                hover:shadow-md

                                transition
                            "
                        >
                            View All Projects
                        </Link>

                    </motion.div>

                </motion.section>


            </main>

        </>
    )
}


export default ProjectPage