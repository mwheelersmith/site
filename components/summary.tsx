export function Summary() {
  return (
    <div className="flex flex-col gap-6 border-b border-zinc-200 pb-8 dark:border-zinc-600">
      <h2 className="text-xl font-medium">Summary</h2>
      <p>
        Hi, I&rsquo;m a front-end engineer, software architect, and team lead.
      </p>
      <p>
        I began my journey in web development over 15 years ago as a full-stack
        PHP developer, and have since evolved into a specialised UI engineering
        leader.
      </p>
      <p className="print:hidden">
        P.S - This site is available to view on{" "}
        <a
          className="text-indigo-800 hover:underline hover:underline-offset-4 dark:text-indigo-300"
          href="https://github.com/mwheelersmith/site"
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
