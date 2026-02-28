import { createFileRoute, Link } from "@tanstack/react-router";
import { useTitle } from "@/lib/useTitle";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  component: RootComponent,
});

function RootComponent() {
  useTitle('Projects');

  const dataProjects = projects.filter(p => p.category === "data");
  const softwareProjects = projects.filter(p => p.category === "software");

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A showcase of my data analytics and software engineering works
          </p>
        </div>

        {/* Data Analytics Projects */}
        {dataProjects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Data Analytics</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {dataProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Software Engineering Projects */}
        {softwareProjects.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Software Engineering</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {softwareProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
      {/* Image */}
      <Link to="/projects/$projectId" params={{ projectId: project.id }}>
        <div className="aspect-video bg-slate-200 dark:bg-slate-700 overflow-hidden cursor-pointer">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      
      {/* Content */}
      <div className="p-6">
        <Link to="/projects/$projectId" params={{ projectId: project.id }}>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer">
            {project.title}
          </h3>
        </Link>
        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
          >
            <Github className="w-4 h-4" />
            View Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}