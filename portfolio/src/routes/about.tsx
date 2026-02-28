import { createFileRoute } from "@tanstack/react-router";
import { useTitle } from "../lib/useTitle";
import { GraduationCap,  Code2, BarChart3, Heart } from "lucide-react";
//  import {Award} from "lucide-react"


export const Route = createFileRoute("/about")({
  component: RootComponent,
});

function RootComponent() {
  useTitle('About');

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About Me
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            My journey from urban planning to data-driven solutions
          </p>
        </div>

        {/* Background */}
        <section className="mb-12 bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Background</h2>
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            I'm a graduate of Urban and Regional Planning, where I first discovered my passion for data analysis. 
            Working with spatial data, demographic trends, and urban development patterns opened my eyes to the power 
            of data-driven decision making.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            This curiosity led me to pursue formal training through Coursera and Udemy certifications in Data Analysis, 
            while simultaneously building my software engineering skills to create end-to-end data solutions.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Data Analytics */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Data Analytics</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Pandas', 'NumPy', 'Seaborn', 'SQL', 'Power BI', 'Tableau', 'Excel'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Software Engineering */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Software Engineering</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'Node.js', 'Bun', 'React', 'Express', 'Redis', 'RabbitMQ', 'PostgreSQL'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        {/* <section className="mb-12 bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Certifications</h2>
          </div>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
              Data Analysis Certification - Coursera
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full"></span>
              Data Analysis Certification - Udemy
            </li>
          </ul>
        </section> */}

        {/* Beyond Work */}
        <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Beyond Work</h2>
          </div>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p className="leading-relaxed">
              ⚽ Passionate Arsenal FC supporter; I live for match days and the thrill of the beautiful game.
            </p>
            <p className="leading-relaxed">
              🎬 Movie enthusiast with a special love for Denzel Washington and Viola Davis. Fun fact: I've watched 
              almost every Denzel Washington movie and series. His work never gets old!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}