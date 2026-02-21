import { LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070d1f]/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-white/65 md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Tang! SMS Relay</p>
        <nav className="flex flex-wrap items-center gap-4">
          <a href={LINKS.contact} className="focus-ring hover:text-white">
            Contact
          </a>
          <a href={LINKS.privacy} className="focus-ring hover:text-white">
            Privacy
          </a>
          <a href={LINKS.terms} className="focus-ring hover:text-white">
            Terms
          </a>
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="focus-ring hover:text-white">
            GitHub
          </a>
          <a href={LINKS.changelog} target="_blank" rel="noreferrer" className="focus-ring hover:text-white">
            Releases
          </a>
        </nav>
      </div>
    </footer>
  );
}
