/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <div className="space-y-4 text-slate-700 dark:text-slate-300">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4" {...props} />,
          h3: ({node, ...props}) => <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-3" {...props} />,
          p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
          li: ({node, ...props}) => <li className="ml-4" {...props} />,
          strong: ({node, ...props}) => <strong className="font-bold text-slate-900 dark:text-white" {...props} />,
          a: ({node, ...props}) => <a className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}