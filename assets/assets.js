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
import programming_icon from './programming_icon.png';
import backend_icon from './backend_icon.png';
import database_icon from './database.png';
import cloud_icon from './cloud_icon.png';
import tools_icon from './tools_icon.png';
import learning_icon from './learning.png';

export const assets = {
    user_image,
    cloud_icon,
    learning_icon,
    programming_icon,
    tools_icon,
    database_icon,
    footer_bg_color,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    backend_icon,
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
        slug: 'ingredient-insight-ai',
        description: 'AI-Powered Food Ingredient Analysis',
        bgImage: '/ingredient-insight/ingredient-insight.png',

        overview:
            'IngredientInsight AI is a web-based food ingredient analysis platform that helps users understand packaged food products by scanning their ingredient labels. The system uses OCR to extract ingredient information from an uploaded image and analyzes the detected ingredients to provide risk levels, categories, a safety score, and an easy-to-understand health summary.',

        problem:
            'Food product labels often contain long and complicated ingredient lists with preservatives, artificial colors, sweeteners, emulsifiers, and other additives. For an average consumer, understanding what these ingredients mean and whether they should be concerned about them can be difficult and time-consuming.',

        solution:
            'IngredientInsight AI simplifies food label analysis by allowing users to capture or upload an ingredient-label image. The application extracts the text using OCR, identifies individual ingredients, compares them against an ingredient knowledge base, classifies their potential risk, and generates an overall safety score with a clear visual summary.',

        features: [
            'Food ingredient label image upload',
            'Camera-based ingredient scanning',
            'OCR-based text extraction',
            'Automatic ingredient extraction and cleaning',
            'Ingredient classification',
            'Preservative and additive detection',
            'Artificial color and flavor detection',
            'Sweetener, stabilizer and emulsifier detection',
            'Allergen identification',
            'Ingredient risk-level analysis',
            'Overall food safety score',
            'Visual safety and risk indicators',
            'Ingredient-wise explanations',
            'AI-generated food analysis summary',
            'Scan history',
            'Mobile responsive interface'
        ],

        technologies: [
            'React.js',
            'Vite',
            'Tailwind CSS',
            'Node.js',
            'Express.js',
            'Multer',
            'Tesseract.js',
            'REST API',
            'JavaScript',
            'MongoDB'
        ],

        role:
            'Designed and developed the full-stack application, including the responsive frontend, image-upload workflow, backend REST APIs, OCR processing pipeline, ingredient analysis logic, safety-score calculation, and result visualization.',

        challenges: [
            'Extracting accurate text from food labels with different fonts, layouts and image quality',
            'Cleaning and separating OCR output into individual ingredients',
            'Handling ingredient names, INS/E-numbers and different naming formats',
            'Designing a meaningful and understandable ingredient risk classification system',
            'Calculating an overall safety score from multiple ingredient risk levels',
            'Creating a mobile-friendly scanning experience',
            'Connecting the frontend image-upload workflow with the backend processing pipeline'
        ],

        results:
            'The project provides a simple workflow for turning a food ingredient-label image into structured and understandable information. Users can quickly view detected ingredients, their categories and risk levels, along with an overall safety score and analysis summary.',

        screenshots: [
           
            '/ingredient-insight/igscan2.png',
            '/ingredient-insight/igscan3.png',
            '/ingredient-insight/igscan4.png',
            '/ingredient-insight/igscan5.png',
             '/ingredient-insight/igscan6.png',
        ],

        github: 'https://github.com/RaiDivyansh08/Ai-ingredient-insight.git',
        liveDemo: 'https://ai-ingredient-insight-2cxd.vercel.app/'
    },

    {
        title: 'Remote ECG Monitoring',
        slug: 'remote-ecg-monitoring',
        description: 'IoT-Based Real-Time ECG Monitoring',
        bgImage: '/ingredient-insight/ecgmone.png',

        overview:
            'A real-time IoT-based ECG monitoring system built using ESP32 and the AD8232 ECG sensor. The system captures ECG signals, processes the analog data, and transmits live readings over Wi-Fi to a web-based monitoring interface where the ECG waveform can be visualized in real time.',

        problem:
            'Traditional ECG monitoring systems can be expensive, bulky, and difficult to use for continuous remote observation. There was a need for a compact and low-cost solution capable of capturing ECG signals and making the data available remotely through a simple digital interface.',

        solution:
            'The system uses an AD8232 ECG sensor to acquire the electrical activity of the heart and an ESP32 microcontroller to sample the signal. The ESP32 connects to Wi-Fi and streams ECG data through WebSocket communication to a browser-based dashboard. The dashboard plots the incoming samples as a continuously updating ECG waveform.',

        features: [
            'Real-time ECG signal acquisition',
            'AD8232 ECG sensor integration',
            'ESP32-based data processing',
            'Wi-Fi connectivity',
            'Real-time WebSocket data streaming',
            'Live ECG waveform visualization',
            'Browser-based monitoring dashboard',
            '250 Hz ECG sampling',
            'Lead-off detection support',
            'Low-cost and compact hardware design'
        ],

        technologies: [
            'ESP32',
            'AD8232',
            'Arduino IDE',
            'C/C++',
            'Wi-Fi',
            'WebSocket',
            'HTML',
            'CSS',
            'JavaScript',
            'Chart.js'
        ],

        role:
            'Designed and developed the complete system, including hardware integration, ESP32 firmware, ECG signal acquisition, Wi-Fi communication, WebSocket-based real-time data transmission, and the web-based ECG visualization interface.',

        challenges: [
            'Obtaining a stable ECG signal from the AD8232 sensor',
            'Maintaining a consistent 250 Hz sampling rate on the ESP32',
            'Handling real-time data transmission over Wi-Fi',
            'Reducing waveform latency during live visualization',
            'Managing noisy ECG signals and baseline fluctuations',
            'Creating a responsive and easy-to-use monitoring interface'
        ],

        results:
            'Successfully developed a working prototype capable of acquiring ECG signals using the AD8232 and ESP32, transmitting the readings over Wi-Fi, and displaying the ECG waveform in real time through a web interface. The architecture provides a foundation for further improvements such as digital filtering, cloud storage, patient history, alerts, and remote monitoring.',

        screenshots: [
            '/ingredient-insight/ecg-dashboard.png',
            '/ingredient-insight/esp32-ad8232.png',
            '/ingredient-insight/ecg-hardware.png'
        ],

        github: 'https://github.com/RaiDivyansh08/remote-ecg-monitor.git',
        liveDemo: 'https://youtu.be/f7-gTM13H8U?si=BMhz3FK2Rd_Rg5NT'
    },

    {
        title: 'Leadership Meeting System',
        slug: 'leadership-meeting-system',
        description: 'Production Workflow & Approval System',
        bgImage: '/work-3.png',

        overview:
            'A workflow and approval management system designed to streamline production-related activities, leadership reviews, task tracking, and approval processes. The system helps organize operational information in a structured workflow and provides better visibility into the status of different activities.',

        problem:
            'Production and leadership activities required a structured system for managing tasks, reviewing information, tracking progress, and maintaining approval workflows. Handling these activities manually or across different communication channels made it difficult to maintain visibility and follow the complete workflow.',

        solution:
            'Developed and maintained a centralized workflow system that organizes production activities, meeting-related information, task statuses, and approval processes. The system provides structured data handling, role-based workflow management, and better visibility into pending and completed activities.',

        features: [
            'Production workflow management',
            'Leadership meeting management',
            'Task creation and status tracking',
            'Approval workflow',
            'Pending and completed task tracking',
            'Structured data management',
            'Role-based access and workflow handling',
            'Production activity monitoring',
            'Status-based workflow updates',
            'Backend API and database integration'
        ],

        technologies: [
            'PHP',
            'CodeIgniter',
            'MySQL',
            'JavaScript',
            'HTML',
            'CSS',
            'Bootstrap',
            'REST APIs',
            'Git'
        ],

        role:
            'Worked as a software developer on the development and maintenance of the system. Responsibilities included implementing workflow-related features, working with backend logic and database operations, debugging existing functionality, integrating APIs, and improving the overall reliability of the application.',

        challenges: [
            'Understanding and implementing complex production workflows',
            'Maintaining consistency between different workflow states',
            'Handling approval and status-based operations',
            'Debugging existing production issues',
            'Working with existing backend and database structures',
            'Ensuring that changes did not affect existing business workflows'
        ],

        results:
            'Improved the organization and visibility of production and leadership workflows by providing a centralized system for task management, approvals, and status tracking. The system helped structure operational activities and made it easier to monitor ongoing and completed work.',

        screenshots: [
            '/ingredient-insight/leadership2.png',
            '/ingredient-insight/leadership1.png',
            '/ingredient-insight/leadership3.png',
            
        ],

        github: 'https://github.com/GyanGangaGroup/GGITS-WEBSITE.git',
        liveDemo: 'https://www.ggce.co.in/management-board/#management-outreach'
    },

    {
        title: 'ERP Modules',
        slug: 'erp-modules',
        description: 'PHP + CodeIgniter Business Systems',
        bgImage: '/work-4.png',

        overview:
            'A collection of business-oriented ERP modules developed and maintained using PHP and CodeIgniter. The modules support different operational processes by providing structured interfaces, database-driven workflows, data management, and business-specific functionality.',

        problem:
            'Different business operations required dedicated modules to manage data, workflows, and day-to-day activities efficiently. Existing processes involved multiple operations and dependencies, making it important to maintain reliable database interactions, consistent business logic, and easy-to-use interfaces.',

        solution:
            'Developed and maintained ERP modules using PHP and CodeIgniter with MySQL as the database layer. Implemented business logic, CRUD operations, database queries, form handling, validations, API integrations, and debugging of existing functionality according to project requirements.',

        features: [
            'Business data management',
            'CRUD operations',
            'Database-driven modules',
            'Form creation and validation',
            'Business workflow implementation',
            'Search and filtering functionality',
            'Data listing and reporting',
            'API integration',
            'Backend business logic',
            'User and role-based functionality',
            'Error handling and debugging',
            'Existing module maintenance and improvements'
        ],

        technologies: [
            'PHP',
            'CodeIgniter',
            'MySQL',
            'JavaScript',
            'jQuery',
            'HTML',
            'CSS',
            'Bootstrap',
            'REST APIs',
            'Git'
        ],

        role:
            'Worked as a software developer responsible for developing, modifying, and maintaining ERP modules. My work included implementing new features, developing CRUD functionality, writing and modifying database queries, handling forms and validations, integrating APIs, debugging issues, and making improvements to existing modules.',

        challenges: [
            'Understanding existing ERP business logic',
            'Working with large and interconnected database structures',
            'Maintaining existing functionality while introducing changes',
            'Debugging backend and database-related issues',
            'Implementing business-specific validations and workflows',
            'Handling dependencies between different modules',
            'Working with legacy code and improving existing functionality'
        ],

        results:
            'Contributed to the development and maintenance of business-oriented ERP functionality, improving module reliability, data management, and operational workflows. Implemented required features and fixes while maintaining compatibility with existing business processes.',

        screenshots: [],

        github: 'https://github.com/GyanGangaGroup/GGITS-WEBSITE.git',
        liveDemo: ''
    }
]

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