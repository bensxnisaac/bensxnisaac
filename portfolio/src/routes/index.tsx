import { createFileRoute, Link } from "@tanstack/react-router";
import { useTitle } from "../lib/useTitle";
import { GithubIcon, LinkedinIcon, Mail, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: RootComponent,
});

function RootComponent() {
  useTitle("Home");

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
     

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        {/* Avatar */}
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
              alt="Benson Isaac"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Benson Isaac
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-2">
            Data & Business Analyst
          </p>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Transforming data into actionable insights to drive business growth and strategic decisions
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition shadow-md hover:shadow-lg"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 font-medium rounded-lg transition"
          >
            Learn More About Me
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/bensxnisaac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/bensxnisaac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
            title="GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
          <a
            href="mailto:bensxnisaac@gmail.com"
            className="text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition"
            title="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </main>
  );
}
