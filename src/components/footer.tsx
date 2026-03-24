/** Minimal footer with logo, legal links, and language labels. */
export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 border-t border-border-subtle px-6 py-10 md:flex-row md:justify-between md:px-12">
      {/* Logo + copyright */}
      <div className="flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded-[5px] bg-accent-orange text-[10px] font-black text-white">
          T
        </div>
        <span className="text-xs text-text-muted">© 2026 TrainTrack</span>
      </div>

      {/* Legal links */}
      <div className="flex gap-6">
        <span className="cursor-pointer text-xs text-text-muted transition-colors hover:text-text-body">
          Privacy
        </span>
        <span className="cursor-pointer text-xs text-text-muted transition-colors hover:text-text-body">
          Terms
        </span>
      </div>

      {/* Language labels (visual only) */}
      <div className="flex gap-2 text-[11px]">
        <span className="text-accent-orange">EN</span>
        <span className="text-text-muted transition-colors hover:text-text-body cursor-pointer">
          DE
        </span>
        <span className="text-text-muted transition-colors hover:text-text-body cursor-pointer">
          FR
        </span>
      </div>
    </footer>
  );
}
