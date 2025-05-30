import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
  };
  className?: string;
  href?: string;
}

export function ProjectCard({ title, description, href, image, technologies, links, className }: any) {
  return (
    <Card className={`project-card ${className} !p-4`}>
      <CardContent className="space-y-6">
        <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          </Link>
        </div>
        <div className="space-y-4">
          <div>
            <CardTitle className="text-xl sm:text-2xl font-bold text-primary">{title}</CardTitle>
            <CardDescription className="text-base sm:text-lg text-muted-foreground mt-2">
              {description}
            </CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech: any) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-sm hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4">
            {links.github && (
              <Link
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover-button"
              >
                <Github className="size-5" />
              </Link>
            )}
            {links.demo && (
              <Link
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover-button"
              >
                <ExternalLink className="size-5" />
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
