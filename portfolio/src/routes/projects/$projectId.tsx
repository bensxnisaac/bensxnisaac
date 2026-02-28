import { createFileRoute, Link } from "@tanstack/react-router";
import { useTitle } from "@/lib/useTitle";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import MarkdownViewer from "@/lib/markdownViewer";

export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectDetail,
});

function ProjectDetail() {
  const { projectId } = Route.useParams();
  const project = projects.find(p => p.id === projectId);

  useTitle(project?.title || "Project");

  if (!project) {
    return (
      <main className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition"
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full"
          />
        </div>

        <section className="mb-12 bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Overview</h2>
          <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
            <MarkdownViewer content={project.fullDescription} />
          </div>
        </section>

     

        {project.images.length > 1 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">More Images</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.slice(1).map((image, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden shadow-md">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${idx + 2}`}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
