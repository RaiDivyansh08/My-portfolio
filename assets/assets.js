import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile_img.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import react from './react.png';
import next from './next.png';
import node from './node.png';
import mysql from './mysql.png';
import aws from './aws.png';
import footer_bg_color from './footer-bg-color.png';

export const assets = {
    user_image,
    footer_bg_color,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    node,
    mysql,
    aws,
    git,
    react,
    mongodb,
    right_arrow_white,
    logo,
    next,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};
export const experienceData = [
    {
        role: 'Web Developer Intern',
        company: 'Gyan Ganga Genesis Incubation Centre',
        location: 'Jabalpur, India',
        duration: 'February 2026 – May 2026',
        description:
            'Worked on production web applications, ERP modules and internal workflow systems.',
        technologies: [
            'Next.js',
            'React.js',
            'PHP',
            'CodeIgniter',
            'MySQL',
            'Tailwind CSS',
            'CPanel',
        ],
        work: [
            'Developed and maintained modules for the live production website ggce.co.in.',
            'Built a leadership meeting scheduling and approval workflow.',
            'Implemented automated email notifications for meeting approvals and status updates.',
            'Contributed to ERP feature development using PHP and CodeIgniter.',
            'Worked on SEO, content management and user experience improvements.',
        ],
    },
];

export const workData = [
    {
        title: 'IngredientInsight AI',
        description: 'AI-Powered Food Ingredient Analysis',
        bgImage: '/work-1.png',
    },
    {
        title: 'Remote ECG Monitoring',
        description: 'IoT-Based Real-Time ECG Monitoring',
        bgImage: '/work-2.png',
    },
    {
        title: 'Leadership Meeting System',
        description: 'Production Workflow & Approval System',
        bgImage: '/work-3.png',
    },
    {
        title: 'ERP Modules',
        description: 'PHP + CodeIgniter Business Systems',
        bgImage: '/work-4.png',
    },
];

export const serviceData = [];
export const skillData = [
    {
        icon: assets.web_icon,
        title: 'Frontend Development',
        description: 'Building responsive, interactive, and user-friendly interfaces with a focus on clean design, smooth experiences, and reusable components.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
        link: ''
    },
    {
        icon: assets.mobile_icon,
        title: 'Backend Development',
        description: 'Developing reliable server-side applications, APIs, and backend systems designed to support scalable and real-world applications.',
        technologies: ['Node.js', 'Express.js', 'PHP', 'REST API', 'Mongoose'],
        link: ''
    },
    {
        icon: assets.ui_icon,
        title: 'Database & APIs',
        description: 'Designing efficient data structures and connecting applications with reliable databases and well-structured APIs.',
        technologies: ['MongoDB', 'MySQL', 'SQL', 'Firebase'],
        link: ''
    },
    {
        icon: assets.graphics_icon,
        title: 'Tools & Deployment',
        description: 'Using modern development workflows, version control, cloud platforms, and deployment tools to build and maintain projects.',
        technologies: ['Git', 'GitHub', 'AWS', 'Vercel', 'Linux', 'Postman'],
        link: ''
    }
]
export const infoList = [
    {
        icon: assets.code_icon,
        iconDark: assets.code_icon_dark,
        title: 'Full Stack Development',
        description: 'React.js, Next.js, Node.js, Express.js, PHP, CodeIgniter',
    },
    {
        icon: assets.edu_icon,
        iconDark: assets.edu_icon_dark,
        title: 'Education',
        description: 'B.Tech in Computer Science Engineering — GGITS, Jabalpur',
    },
    {
        icon: assets.project_icon,
        iconDark: assets.project_icon_dark,
        title: 'Experience',
        description: 'Web Developer Intern — Production Website, ERP & Workflow Development',
    },
];

export const toolsData = [
    assets.vscode,
    assets.react,
    assets.next,
    assets.node,
    assets.mongodb,
    assets.mysql,
    assets.git,
    assets.aws
];