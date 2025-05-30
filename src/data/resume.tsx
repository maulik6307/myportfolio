import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Maulik Bhavnagariya",
  initials: "MB",
  url: "https://vercel.com/maulik-bhavnagariyas-projects",
  location: "Surat, Gujarat",
  locationLink: "",
  description:
    "As a software developer, I thrive on crafting innovative and efficient solutions to complex problems. My expertise lies in designing, developing, and deploying scalable applications that seamlessly integrate functionality with a user-friendly experience.",
  summary:
    " In the past, [I pursued degree in computer Engineering [B.E.]](/#education), and I'm currently a software developer [frontend development] at FiadoLabs. honestly, I want to give best of my knowledge to the world and make peoples life easier.",
  avatarUrl: "/maulik.png",
  skills: [
    "Javascript",
    "Typescript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Shadcn UI",
    "Typescript",
    "Node.js",
    "Python",
    "C++",
    "c",
    "css",
    "GitHub",
    "Git",
    "OOPS",
    "Webflow",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "bhavnagariyamaulik@gamil.com",
    tel: "+91 7227954196",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/maulik6307",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maulik-bhavnagariya-05468b217/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "bhavnagariyamaulik@gamil.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "FiadoLabs",
      href: "https://fiadolabs.com/en",
      badges: [],
      location: "Remote",
      title: "Frontend Develpment Engineer",
      logoUrl: "",
      start: "April 2024",
      end: "present",
      description:
        "Developed and optimized responsive,high-performance web app using modern frontend frameworks and libraries like Next.js, React, and Tailwind CSS.Implemented complex features using React and Next.js, ensuring a seamless user experience and optimal performance.implemented responsive design and cross-browser compatibility, ensuring a consistent and user-friendly experience across different devices.",
    },
    {
      company: "Pixer Digital",
      href: "https://pixer.io/",
      badges: [],
      location: "Surat, Gujarat",
      title: "Webflow Developer",
      logoUrl: "",
      start: "July 2023",
      end: "August 2023",
      description:
        "Designed and implemented a robust webflow website for a startup.make strong foundations in webflow, HTML, CSS, and JavaScript.",
    },
  ],
  education: [
    {
      school: "Gujarat Technological University",
      href: "https://www.gtu.ac.in/",
      degree: "Bachelor of Engineering in Computer Engineering",
      logoUrl: "/gtu.jpg",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Docs-Full Stack Collaboration App",
      href: "https://github.com/maulik6307/docs",
      dates: "Apr 2025",
      active: true,
      description:
        "I've developed a modern document collaboration platform similar to Google Docs, combining real-time collaboration with a rich text editing experience. This project demonstrates my ability to build complex web applications that handle real-time data synchronization while maintaining a smooth user experience.",
      technologies: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "TailwindCSS",
        "Convex",
        "Liveblocks",
        "Zustand",
        "TipTap editor",
      ],
      links: [
        {
          type: "Webapp",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Google-Docs-logo.avif",
      video: "",
    },
    {
      title: "Scrapflow",
      href: "https://github.com/maulik6307/scrape-flow",
      dates: "March 2025",
      active: true,
      description:
        "Scrapeflow is a web app that allows users to scrape data from any website. It is built using Next.js, React, and Tailwind CSS.it is full stack Saas AI app which is provide stripe payment gateway and credit system.",
      technologies: [
        "Next.js",
        "Typescript",
        "ReactFlow",
        "TailwindCSS",
        "Shadcn UI",
        "ReactQuery",
        "Clerk",
        "Stripe",
      ],
      links: [
        {
          type: "Webapp",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/scrapFlow2.jpg",
      video: "",
    },
    {
      title: "Subverse AI",
      href: "https://subverseai.com/",
      dates: "November 2024 - Present",
      active: true,
      description:
        "SubVerse AI agents have allowed us to handle a 50% increase in call volume without adding additional staff. We've also seen a 30% increase in customer satisfaction.Automate 50%+ of Incoming Calls and Improve Call Success Rates by increasing above 25%.",
      technologies: [
        "Next.js",
        "Typescript",
        "ReactFlow",
        "TailwindCSS",
        "Shadcn UI",
        "Tailadmin"
      ],
      links: [
        {
          type: "Website",
          href: "https://subverseai.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/subverseai.png",
      video: "",
    },
    {
      title: "Motiba",
      href: "https://motibagems.com/",
      dates: "April 2024 - Present",
      active: true,
      description:
        "Designed this site for Motiba Gems. it is basically a online diamond trading software.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://motibagems.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mot.png",
      video: "",
    },
    {
      title: "Blog Website",
      href: "https://github.com/maulik6307/React-Blog-App",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "This is small blog website made using react and tailwindcss.it has admin panel for add and delete blog. also it has edit mode for blog edit.use appwrite services as database.",
      technologies: [
        "React.js",
        "Appwrite",
        "TailwindCSS",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://react-blog-app-phi-two.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/blog.png",
      video:
        "",
    },


  ],
} as const;
