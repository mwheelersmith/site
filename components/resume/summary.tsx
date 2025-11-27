export function Summary() {
  return (
    <div className="flex flex-col gap-6 border-b border-zinc-200 pb-8 dark:border-zinc-600">
      <h2 className="text-2xl font-semibold">Summary</h2>
      <p>
        I&rsquo;m a Lead Developer with 15+ years building scalable,
        user-centric web applications. Originally a full-stack PHP developer, I
        later specialised in front-end engineering before returning to
        full-stack leadership with a modern TypeScript stack. I now guide teams
        through architecture, delivery and quality to ship reliable products
        with clarity and confidence.
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
