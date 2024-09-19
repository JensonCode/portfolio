import React from "react";
import ReactMarkdown from "react-markdown";

type MarkdownCotainer = {
  children: string;
};

export default function MarkdownContainer({ children }: MarkdownCotainer) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => (
          <p className="mt-4 text-6xl font-bold drop-shadow" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <p className="mb-4 text-4xl font-bold drop-shadow" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <p className="mt-4 text-3xl font-bold drop-shadow-sm" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p
            className="my-4 bg-black/70 text-lg leading-relaxed text-muted-foreground"
            {...props}
          />
        ),
        ul: ({ node, ...props }) => (
          <ul
            className="my-4 grid list-inside list-disc bg-black/70 md:grid-cols-2"
            {...props}
          />
        ),
        li: ({ node, ...props }) => <li className="mb-2" {...props} />,
        a: ({ node, ...props }) => (
          <a
            className="bg-gray-700/50 text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
