import { Sparkles } from "lucide-react";

const PortalHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand shadow-md">
            <Sparkles className="h-5 w-5 text-white" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="text-lg font-bold tracking-tight">
              Rupa<span className="text-gradient-brand">One</span>
            </div>
            <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Super Portal
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#beranda" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Beranda
          </a>
          <a href="#direktori" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Direktori
          </a>
          <a href="#bantuan" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Bantuan
          </a>
        </nav>

        <button className="rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-white shadow-md transition-smooth hover:shadow-lg hover:brightness-110">
          Masuk
        </button>
      </div>
    </header>
  );
};

export default PortalHeader;
