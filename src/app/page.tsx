import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between container-spacing">
      <section className="w-full min-h-screen flex flex-col items-center justify-center section-spacing">
        <div className="flex flex-col items-center text-center space-y-8">
          <Avatar className="size-24 sm:size-32 md:size-40 border-4 border-primary/20 animate-float">
            <AvatarImage src="/maulik.png" alt="Maulik's avatar" />
            <AvatarFallback>MB</AvatarFallback>
          </Avatar>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold gradient-text">
              Maulik Bhavnagariya
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground">
              Full Stack Developer
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild className="hover-button">
              <Link href="#contact">Contact Me</Link>
            </Button>
            <Button variant="outline" asChild className="hover-button">
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="w-full section-spacing">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text text-center">
            About Me
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <Markdown>{DATA.summary}</Markdown>
          </div>
        </div>
      </section>

      <section id="work" className="w-full section-spacing">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text text-center">
            Work Experience
          </h2>
          <div className="space-y-6">
            {DATA.work.map((work) => (
              <ResumeCard key={work.company} {...work} />
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="w-full section-spacing">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text text-center">
            Education
          </h2>
          <div className="space-y-6">
            {DATA.education.map((education) => (
              <ResumeCard key={education.school} {...education} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="w-full section-spacing">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text text-center">
            Skills
          </h2>
          <div className="skills-container">
            {DATA.skills.map((skill) => (
              <div key={skill} className="skill-item">
                <span className="skill-text">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="w-full section-spacing">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text text-center">
            Projects
          </h2>
          <div className="responsive-grid">
            {DATA.projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="w-full section-spacing">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text text-center">
            Contact Me
          </h2>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-lg sm:text-xl text-muted-foreground text-center">
              Feel free to reach out to me at:
            </p>
            <div className="flex gap-4">
              <Button asChild className="hover-button">
                <Link href="mailto:bhavnagariyamaulik@gmail.com">Email</Link>
              </Button>
              <Button variant="outline" asChild className="hover-button">
                <Link href="https://www.linkedin.com/in/maulik-bhavnagariya-05468b217/" target="_blank">
                  LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
