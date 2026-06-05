import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Dna,
  Download,
  FlaskConical,
  Globe2,
  Layers3,
  Map,
  Microscope,
  Search,
  Tags
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SummaryCard } from "@/components/SummaryCard";
import { ChartCard } from "@/components/ChartCard";
import { PlaceholderMap } from "@/components/PlaceholderMap";
import { DataPolicyNotice } from "@/components/DataPolicyNotice";
import { MicrobiomeAtlasVisual } from "@/components/MicrobiomeAtlasVisual";
import { homeHighlights, summaryMetrics } from "@/data/summary";
import { samplesByHabitat, samplesByPrimer, topPhyla } from "@/data/chartData";

const icons = [Microscope, Layers3, Dna, Globe2, FlaskConical, Map];

const portalActions = [
  {
    href: "/samples",
    icon: Activity,
    title: "Browse metadata",
    body: "Filter sample records by geography, habitat, primer, host, and study."
  },
  {
    href: "/sequence-search",
    icon: Search,
    title: "Search ASVs",
    body: "Run controlled similarity search against internal ASV targets."
  },
  {
    href: "/downloads",
    icon: Download,
    title: "Export summaries",
    body: "Prepare metadata, hit tables, and aggregated abundance products."
  },
  {
    href: "/documentation",
    icon: BookOpen,
    title: "Read methods",
    body: "Review the intended DADA2, taxonomy, and access-policy model."
  }
];

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="microatlas-home-hero">
        <div className="mx-auto grid min-h-[620px] max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-6">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-cyan-100 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Global 16S ASV data resource
            </div>
            <h1 className="mt-6 text-5xl font-semibold tracking-normal text-white md:text-7xl">MicroAtlas</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-cyan-50/85 md:text-xl">
              A curated portal for exploring DADA2-derived 16S ASV diversity across public studies, environments, taxa,
              and controlled sequence-search results.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="bg-white text-slate-950 hover:bg-cyan-50" asChild>
                <Link href="/samples">
                  Browse compendium
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button className="border-white/20 bg-white/10 text-white hover:bg-white/15 hover:text-white" variant="outline" asChild>
                <Link href="/sequence-search">
                  <Search className="h-4 w-4" />
                  Sequence search
                </Link>
              </Button>
              <Button className="bg-cyan-300 text-slate-950 hover:bg-cyan-200" variant="secondary" asChild>
                <Link href="/taxa">
                  <Tags className="h-4 w-4" />
                  Explore taxa
                </Link>
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {summaryMetrics.slice(0, 4).map((metric) => (
                <div key={metric.label} className="hero-metric">
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-1 text-xs capitalize text-cyan-100/80">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <MicrobiomeAtlasVisual />
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-white/90">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 md:grid-cols-3 lg:px-6">
          {homeHighlights.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-primary ring-1 ring-teal-100">
                <Dna className="h-4 w-4" />
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-10 lg:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {portalActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.href} href={action.href} className="portal-action">
                <span className="portal-action__icon">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="block text-base font-semibold text-slate-950">{action.title}</span>
                <span className="mt-2 block text-sm leading-6 text-muted-foreground">{action.body}</span>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Open
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {summaryMetrics.map((metric, index) => (
            <SummaryCard key={metric.label} {...metric} icon={icons[index]} />
          ))}
        </div>

        <DataPolicyNotice />

        <div className="grid gap-6 lg:grid-cols-3">
          <ChartCard title="Samples by habitat" description="Mock distribution across curated habitat categories." data={samplesByHabitat} />
          <ChartCard title="Samples by primer region" description="Primer-region coverage in the prototype summary." data={samplesByPrimer} />
          <ChartCard title="Top detected phyla" description="Percent of ASV observations in mock aggregate data." data={topPhyla} type="pie" valueKey="value" />
        </div>

        <PlaceholderMap />
      </section>
    </div>
  );
}
