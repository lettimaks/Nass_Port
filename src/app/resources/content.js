import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Nasser',
    lastName:  'El Qouar',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Game Designer, Software Developer and 3D Artist',
    avatar:    '/images/avatar2.jpg',
    location:  'Kempton Park, Gauteng',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Afrikaans']  // optional: Leave the array empty if you don't want to display languages
}

// const newsletter = {
//     display: true,
//     title: <>Subscribe to {person.firstName}'s Newsletter</>,
//     description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
// }

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/once-ui-system/nextjs-starter',
    },
    {
        name: 'Itch.io',
        icon: 'itch',
        link: 'https://genganas.itch.io/',
    },
    {
        name: 'Artstation',
        icon: 'artstation',
        link: 'https://www.artstation.com/genganas9',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/nasser-el-qouar/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'nasserkompani15@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Game Designer, Software Developer and 3D Artist</>,
    subline: <>Dedicated game developer creating <InlineCode>immersive, player-focused</InlineCode> experiences with polished mechanics, intuitive UI, and responsive design.</>

}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Passionate game developer focused on creating immersive, player-centered experiences. I bring meticulous attention to gameplay mechanics, UI design, and event handling, ensuring smooth interactions and dynamic feedback for players. With a strong foundation in Unity, I build scalable systems—progressive difficulty, intuitive controls, interactive VFX, and responsive UI alerts—that enhance gameplay immersion. My projects reflect a commitment to polish, functionality, and user experience, with flexible, well-structured code that accommodates evolving needs. Currently expanding my skills in data visualization with Android Studio, I strive to deliver engaging, measurable experiences across digital platforms.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Realty Exact',
                timeframe: '2022 - Present',
                role: 'Senior Design Engineer',
                achievements: [
                    <>Redesigned the UI/UX for Realty Exact, resulting in a 20% increase in user engagement and 30% user referral rates.</>,
                    // <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/realty.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            // {
            //     company: 'Creativ3',
            //     timeframe: '2018 - 2022',
            //     role: 'Lead Designer',
            //     achievements: [
            //         <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
            //         <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
            //     ],
            //     images: [ ]
            // }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Vega School Pretoria',
                description: <>Bachelor of Computer and Information Sciences in Game Design</>,
            },
            // {
            //     name: 'Build the Future',
            //     description: <>Studied online marketing and personal branding.</>,
            // }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical Skills',
        skills: [
            {
                title: 'Blender',
                description: <>Able to 3D model, texture objects, and create animations.</>,
                images: [
                    // {
                    //     src: '/images/renders/img-1.png',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                    // {
                    //     src: '/images/projects/project-01/cover-03.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                ]
            },
            {
                title: '3DS Max',
                description: <>Able to 3D model, texture objects, and create animations.</>,
                images: [
                    // {
                    //     src: '/images/projects/project-01/cover-04.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                ]
            },
            {
                title: 'Studio Code',
                description: <>Proficient in using Studio Code for development tasks.</>,
                images: []
            },
            {
                title: 'Visual Studio',
                description: <>Proficient in using Visual Studio for various development projects.</>,
                images: []
            },
            {
                title: 'Photoshop',
                description: <>Able to edit images, use built-in tools, and design within the app's environment.</>,
                images: []
            },
            {
                title: 'Unity',
                description: <>Able to create games, utilize the engine, and import assets for different rendering pipelines.</>,
                images: []
            },
            {
                title: 'GitHub',
                description: <>Able to utilize the software in a team or solo-development environment.</>,
                images: []
            },
            {
                title: 'Microsoft Suite',
                description: <>Able to use Word and Excel effectively.</>,
                images: []
            }
        ]
    }    
}

// const blog = {
//     label: 'Blog',
//     title: 'Writing about design and tech...',
//     description: `Read what ${person.name} has been up to recently`
//     // Create new blog posts by adding a new .mdx file to app/blog/posts
//     // All posts will be listed on the /blog route
// }

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/renders/img-1.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-2.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-3.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-4.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-5.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-6.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-7.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-8.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-9.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-10.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-11.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-12.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-13.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-14.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-15.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-16.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-17.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-18.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-19.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-20.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-21.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-22.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-23.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-24.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-25.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/renders/img-26.png', 
            alt: 'image',
            orientation: 'horizontal'
        }
    ]
}

export { person, social, home, about, work, gallery };