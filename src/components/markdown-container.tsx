import React from "react";
import ReactMarkdown from "react-markdown";

type MarkdownCotainer = {
  children: string;
};

export default function MarkdownContainer({ children }: MarkdownCotainer) {
  return (
    <ReactMarkdown
      components={{
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
