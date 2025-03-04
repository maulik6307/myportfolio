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
    " In the past, [I pursued degree in computer Engineering [B.Tech]](/#education), and I'm currently a software developer [frontend development] at FiadoLabs. honestly, I want to give best of my knowledge to the world and make peoples life easier.",
  avatarUrl: "/maulik.png",
  skills: [
    "Javascript",
    "Tailwindcss",
    "React",
    "Next.js",
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
      href: "https://atomic.finance",
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
      href: "#",
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
      degree: "Bachelor of Technology in Computer Engineering",
      logoUrl: "/gtu.jpg",
      start: "2020",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Blog Website",
      href: "https://react-blog-app-phi-two.vercel.app/",
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
    {
      title: "Motiba",
      href: "https://motibagems.com/",
      dates: "April 2024 - Present",
      active: true,
      description:
        "Designed this site for Motiba Gems. it is basically a online diamond trading software in which company can add diamonds for selling.",
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
      title: "Subverse AI",
      href: "https://subverseai.com/",
      dates: "November 2024 - Present",
      active: true,
      description:
        "Developed a Website which used in various ways like for voice agent, campaigns designing, workflow designing etc.",
      technologies: [
        "Next.js",
        "Typescript",
        "ReactFlow",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://subverseai.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/subverse.png",
      video: "",
    },
  ],
} as const;
