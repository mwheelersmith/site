"use client";

import { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";

const emailAddress = () => ["miles", "mileswheelersmith.com"].join("@");
const contactPage = "https://www.mileswheelersmith.com/cv";

export function EmailReveal() {
  const [email, setEmail] = useState<string | null>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const printLinkRef = useRef<HTMLAnchorElement>(null);
  const className =
    "editorial-link email-reveal flex min-h-6 min-w-0 items-center gap-2 text-left font-mono text-sm print:hidden";
  const icon = (
    <Mail size={16} className="text-foreground shrink-0" aria-hidden="true" />
  );

  useEffect(() => {
    // Preserve keyboard focus when the reveal button becomes a link.
    if (email) linkRef.current?.focus({ preventScroll: true });
  }, [email]);

  useEffect(() => {
    // Populate only the print copy synchronously before the browser prints.
    const preparePrint = () => {
      if (!printLinkRef.current) return;
      const address = emailAddress();
      printLinkRef.current.textContent = address;
      printLinkRef.current.href = `mailto:${address}`;
    };
    const finishPrint = () => {
      if (!printLinkRef.current) return;
      printLinkRef.current.textContent = "mileswheelersmith.com/cv";
      printLinkRef.current.href = contactPage;
    };
    window.addEventListener("beforeprint", preparePrint);
    window.addEventListener("afterprint", finishPrint);
    return () => {
      window.removeEventListener("beforeprint", preparePrint);
      window.removeEventListener("afterprint", finishPrint);
    };
  }, []);

  return (
    <>
      {email ? (
        <a ref={linkRef} href={`mailto:${email}`} className={className}>
          <Mail size={16} aria-hidden="true" className="shrink-0" />
          <span className="email-reveal-address min-w-0 [overflow-wrap:anywhere]">
            {email}
          </span>
        </a>
      ) : (
        <button
          type="button"
          className={className}
          aria-label="Email me: reveal email address"
          onClick={() => setEmail(emailAddress())}
        >
          <Mail size={16} aria-hidden="true" className="shrink-0" />
          <span>Email me</span>
        </button>
      )}
      <span className="text-accent hidden min-w-0 items-center gap-2 print:flex">
        {icon}
        <a
          ref={printLinkRef}
          href={contactPage}
          className="min-w-0 [overflow-wrap:anywhere]"
        >
          mileswheelersmith.com/cv
        </a>
      </span>
    </>
  );
}
