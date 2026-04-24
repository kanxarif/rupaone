const PortalHero = () => {
  return (
    <section id="beranda" className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 bg-gradient-brand-soft" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
        aria-hidden
      />
      <div className="container relative py-20 text-center md:py-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
          Satu Gerbang. Semua Layanan.
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          Akses semua aplikasi <br className="hidden md:block" />
          <span className="text-gradient-brand">RupaOne</span> dalam satu portal
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
          Direktori aplikasi resmi untuk layanan publik, pengaduan, perizinan,
          dan informasi — terkurasi rapi seperti katalog profesional.
        </p>
      </div>
    </section>
  );
};

export default PortalHero;
