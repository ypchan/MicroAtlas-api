import Link from "next/link";
import {
  Activity,
  Dna,
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
import { homeHighlights, summaryMetrics } from "@/data/summary";
import { samplesByHabitat, samplesByPrimer, topPhyla } from "@/data/chartData";

const icons = [Microscope, Layers3, Dna, Globe2, FlaskConical, Map];

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-12">
          <div className="microatlas-hero overflow-hidden rounded-2xl border p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase text-primary">Scientific data portal</p>
                <h1 className="mt-4 text-4xl font-semibold tracking-normal text-slate-950 md:text-6xl">MicroAtlas</h1>
                <p className="mt-5 max-w-3xl text-xl leading-8 text-muted-foreground">
                  A global DADA2-derived 16S ASV atlas for microbial diversity exploration
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/samples">
                      <Activity className="h-4 w-4" />
                      Browse samples
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/sequence-search">
                      <Search className="h-4 w-4" />
                      Search sequence
                    </Link>
                  </Button>
                  <Button variant="secondary" asChild>
                    <Link href="/taxa">
                      <Tags className="h-4 w-4" />
                      Explore taxa
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="section-panel rounded-2xl p-5">
                <p className="text-sm font-medium text-slate-950">Portal readiness</p>
                <div className="mt-4 space-y-3">
                  {homeHighlights.map((item) => (
                    <div key={item} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-10 lg:px-6">
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
