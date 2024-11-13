export function Summary() {
  return (
    <div className="flex flex-col gap-6 border-b border-zinc-200 pb-8 dark:border-zinc-600">
      <h2 className="text-2xl font-medium">Summary</h2>
      <p>
        Hi, I&rsquo;m a front-end engineer, software architect, and team lead.
      </p>
      <p>
        I began my journey in web development over 15 years ago as a full-stack
        PHP developer, and have since evolved into a specialised UI engineering
        leader. Driven by a passion for creating accessible, intuitive user
        interfaces and leading development teams to deliver high-quality,
        impactful solutions.
      </p>
      <p className="print:hidden">
        This page is available to view on{" "}
        <a
          className="text-violet-800 decoration-2 hover:text-violet-900 hover:underline hover:underline-offset-8 dark:text-violet-300 dark:hover:text-violet-400"
          href="https://github.com/mwheelersmith/site/blob/main/app/resume/page.tsx"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
