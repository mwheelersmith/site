export function Summary() {
  return (
    <div className="flex flex-col gap-6 border-b border-zinc-200 pb-8 dark:border-zinc-600">
      <h2 className="text-2xl font-medium">Summary</h2>
      <p>
        Bringing 15+ years of experience building scalable, user-centric web
        applications. My journey began as a full-stack PHP developer, and while
        I&rsquo;ve spent much of my career specialising in front-end
        engineering, I&rsquo;ve recently returned to more full-stack work, now
        using a modern JavaScript/TypeScript stack.
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
