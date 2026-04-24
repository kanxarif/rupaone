import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import pengaduanImg from "@/assets/app-pengaduan.jpg";
import perizinanImg from "@/assets/app-perizinan.jpg";
import informasiImg from "@/assets/app-informasi.jpg";
import trackingImg from "@/assets/app-tracking.jpg";
import konsultasiImg from "@/assets/app-konsultasi.jpg";
import statistikImg from "@/assets/app-statistik.jpg";

type App = {
  name: string;
  description: string;
  category: "Layanan" | "Perizinan" | "Informasi" | "Konsultasi" | "Data";
  tags: string[];
  image: string;
  href: string;
};

const apps: App[] = [
  {
    name: "Pengaduan Masyarakat",
    description:
      "Sampaikan keluhan, aspirasi, atau laporan masalah pelayanan publik secara cepat dan terverifikasi.",
    category: "Layanan",
    tags: ["Publik", "Real-time"],
    image: pengaduanImg,
    href: "#",
  },
  {
    name: "Perizinan Online",
    description:
      "Ajukan izin usaha, dokumen, dan persetujuan administratif tanpa antre — sepenuhnya digital.",
    category: "Perizinan",
    tags: ["Izin", "Dokumen"],
    image: perizinanImg,
    href: "#",
  },
  {
    name: "Informasi Publik",
    description:
      "Pusat dokumen, pengumuman, dan rilis resmi yang transparan dan dapat diunduh kapan saja.",
    category: "Informasi",
    tags: ["Transparansi", "Berita"],
    image: informasiImg,
    href: "#",
  },
  {
    name: "Tracking Laporan",
    description:
      "Pantau status laporan dan pengaduan Anda dari pengajuan hingga penyelesaian secara live.",
    category: "Layanan",
    tags: ["Status", "Notifikasi"],
    image: trackingImg,
    href: "#",
  },
  {
    name: "Konsultasi Digital",
    description:
      "Jadwalkan sesi konsultasi langsung dengan petugas atau ahli melalui chat dan video call.",
    category: "Konsultasi",
    tags: ["Chat", "Video"],
    image: konsultasiImg,
    href: "#",
  },
  {
    name: "Data Statistik",
    description:
      "Dashboard data terbuka dengan visualisasi interaktif untuk riset, kebijakan, dan publik.",
    category: "Data",
    tags: ["Open Data", "Analitik"],
    image: statistikImg,
    href: "#",
  },
];

const categories = ["Semua", "Layanan", "Perizinan", "Informasi", "Konsultasi", "Data"] as const;

const AppDirectory = () => {
  const [active, setActive] = useState<(typeof categories)[number]>("Semua");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return apps.filter((app) => {
      const matchCat = active === "Semua" || app.category === active;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        app.name.toLowerCase().includes(q) ||
        app.description.toLowerCase().includes(q) ||
        app.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [active, query]);

  return (
    <section id="direktori" className="container py-20 md:py-28">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-gradient-brand">
            Direktori Aplikasi
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Katalog layanan <span className="text-gradient-brand">RupaOne</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Pilih aplikasi yang Anda butuhkan. Setiap layanan dirancang ringan,
            aman, dan terintegrasi dalam satu akun.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari aplikasi..."
            className="h-11 w-full rounded-full border border-border bg-background pl-10 pr-4 text-sm shadow-sm outline-none transition-smooth placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-[hsl(var(--brand-purple))]/30"
          />
        </div>
      </div>

      {/* Category pills */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-smooth ${
                isActive
                  ? "border-transparent bg-gradient-brand text-white shadow-md"
                  : "border-border bg-background text-foreground/70 hover:border-foreground/20 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* List grid */}
      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {filtered.map((app) => (
          <a
            key={app.name}
            href={app.href}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-card transition-smooth hover:-translate-y-1 hover:border-transparent hover:shadow-card-hover sm:flex-row sm:p-4"
          >
            {/* Thumbnail */}
            <div className="relative shrink-0 overflow-hidden rounded-xl sm:w-[200px]">
              <div className="aspect-[16/10] w-full bg-muted sm:aspect-[4/3] sm:h-full">
                <img
                  src={app.image}
                  alt={`${app.name} preview`}
                  loading="lazy"
                  width={800}
                  height={512}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
              </div>
              <span className="absolute left-2 top-2 rounded-full bg-background/85 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-foreground/80 backdrop-blur">
                {app.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-3 sm:pl-5 sm:pr-2">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold tracking-tight">
                    {app.name}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {app.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-white shadow-sm transition-smooth group-hover:shadow-md">
                  Buka Aplikasi
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-border p-12 text-center">
          <p className="text-sm text-muted-foreground">
            Tidak ada aplikasi yang cocok dengan pencarian Anda.
          </p>
        </div>
      )}
    </section>
  );
};

export default AppDirectory;
