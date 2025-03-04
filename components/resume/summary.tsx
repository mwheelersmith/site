export function Summary() {
  return (
    <div className="flex flex-col gap-6 border-b border-zinc-200 pb-8 dark:border-zinc-600">
      <h2 className="text-2xl font-medium">Summary</h2>
      <p>
        Bringing 15+ years of success in web development, starting as a
        full-stack PHP developer and evolving into a specialised leader in
        front-end engineering. Passionate about creating accessible, intuitive
        user interfaces and guiding development teams to deliver high-quality,
        impactful solutions.
      </p>
      <p className="print:hidden">
        This page is available to view on{" "}
        <a
          className="text-violet-800 decoration-2 hover:text-violet-900 hover:underline hover:underline-offset-8 dark:text-violet-500 dark:hover:text-violet-300"
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
