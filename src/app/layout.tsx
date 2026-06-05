import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { Database, Github, Search } from "lucide-react";
import { AuthGate } from "@/components/AuthGate";
import { InstitutionalFooter } from "@/components/InstitutionalFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "MicroAtlas",
  description: "A global DADA2-derived 16S ASV atlas for microbial diversity exploration"
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/samples", label: "Samples" },
  { href: "/asvs", label: "ASVs" },
  { href: "/taxa", label: "Taxa" },
  { href: "/sequence-search", label: "Sequence Search" },
  { href: "/downloads", label: "Downloads" },
  { href: "/r-package", label: "R package" },
  { href: "/documentation", label: "Documentation" },
  { href: "/about", label: "About" }
];

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 shadow-sm backdrop-blur">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:px-6">
            <Link href="/" className="flex items-center gap-3 font-semibold text-slate-950">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-teal-600 to-accent text-primary-foreground shadow-[0_10px_22px_rgba(13,110,123,0.22)]">
                <Database className="h-5 w-5" />
              </span>
              <span className="text-lg">MicroAtlas</span>
            </Link>
            <nav className="flex gap-1 overflow-x-auto pb-1 text-sm lg:pb-0">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-slate-100 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <AuthGate>{children}</AuthGate>
        <footer className="mt-auto overflow-hidden border-t bg-white/90">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 text-sm text-muted-foreground md:grid-cols-[1.4fr_1fr_1fr] lg:px-6">
            <div>
              <div className="flex items-center gap-2 font-semibold text-foreground">
                <Search className="h-4 w-4 text-primary" />
                MicroAtlas
              </div>
              <p className="mt-2 max-w-xl leading-6">
                A global DADA2-derived 16S ASV atlas for microbial diversity exploration.
              </p>
            </div>
            <div>
              <p className="font-medium text-foreground">Prototype status</p>
              <p className="mt-2 leading-6">Frontend only. Backend services, databases, and search workers are future work.</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Contact</p>
              <p className="mt-2 flex items-center gap-2 leading-6">
                <Github className="h-4 w-4" />
                contact@microatlas.example
              </p>
            </div>
          </div>
          <InstitutionalFooter />
        </footer>
      </body>
    </html>
  );
}
