import { LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070d1fcc] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="focus-ring text-sm font-semibold tracking-wide text-white/90">
          Tang! SMS Relay
        </a>
        <nav className="hidden items-center gap-4 md:flex">
          <a href="#what" className="focus-ring text-sm text-white/70 hover:text-white">
            What it does
          </a>
          <a href="#download" className="focus-ring text-sm text-white/70 hover:text-white">
            Download
          </a>
          <a href={LINKS.releases} target="_blank" rel="noreferrer" className="focus-ring text-sm text-white/70 hover:text-white">
            Releases
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={LINKS.macDownload}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-xl border border-cyan-200/30 bg-cyan-300/10 px-3 py-2 text-xs font-semibold text-cyan-100 hover:bg-cyan-300/20"
          >
            macOS
          </a>
          <a
            href={LINKS.androidApk}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-3 py-2 text-xs font-semibold text-white shadow-[0_0_22px_rgba(65,180,255,0.35)] hover:brightness-110"
          >
            Android
          </a>
        </div>
      </div>
    </header>
  );
}
