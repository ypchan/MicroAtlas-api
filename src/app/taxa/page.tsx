"use client";

import { useMemo, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChartCard } from "@/components/ChartCard";
import { DataTable } from "@/components/DataTable";
import { TaxonSummaryCard } from "@/components/TaxonSummaryCard";
import { AsvRecord } from "@/data/asvs";
import { exampleTaxa, taxa } from "@/data/taxa";
import { habitatDistribution, primerDistribution, topProjects } from "@/data/chartData";
import { formatNumber } from "@/lib/utils";

const columns: ColumnDef<AsvRecord>[] = [
  { accessorKey: "asv_id", header: "asv_id" },
  { accessorKey: "taxonomy", header: "taxonomy" },
  { accessorKey: "domain", header: "domain" },
  { accessorKey: "phylum", header: "phylum" },
  { accessorKey: "sample_count", header: "sample_count", cell: ({ row }) => formatNumber(row.original.sample_count) },
  { accessorKey: "habitat_count", header: "habitat_count" },
  { accessorKey: "country_count", header: "country_count" },
  { accessorKey: "total_reads", header: "total_reads", cell: ({ row }) => formatNumber(row.original.total_reads) }
];

export default function TaxaPage() {
  const [query, setQuery] = useState("Bacteroides");
  const selectedTaxon = useMemo(
    () => taxa.find((taxon) => taxon.name.toLowerCase().includes(query.toLowerCase())) ?? taxa[1],
    [query]
  );

  return (
    <section className="page-shell mx-auto max-w-7xl space-y-6 px-4 py-10 lg:px-6">
      <div>
        <p className="text-sm font-semibold uppercase text-primary">Taxonomic exploration</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Taxa</h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Inspect mock prevalence, habitat range, primer coverage, and associated ASV summaries for selected taxa.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            Taxon search
          </CardTitle>
          <CardDescription>Example taxa: Pacearchaeales, Bacteroides, Nitrososphaeraceae.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search taxa" />
          <div className="flex flex-wrap gap-2">
            {exampleTaxa.map((taxon) => (
              <Button key={taxon} variant="outline" size="sm" onClick={() => setQuery(taxon)}>
                {taxon}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <TaxonSummaryCard taxon={selectedTaxon} />

      <div className="grid gap-6 lg:grid-cols-3">
        <ChartCard title="Habitat distribution" data={habitatDistribution} type="pie" valueKey="value" />
        <ChartCard title="Primer region distribution" data={primerDistribution} type="pie" valueKey="value" />
        <ChartCard title="Top projects" data={topProjects} valueKey="samples" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Associated ASVs</CardTitle>
          <CardDescription>Mock ASV summaries only. Sequence strings are not exposed.</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={selectedTaxon.asvRows} searchPlaceholder="Search associated ASVs" />
        </CardContent>
      </Card>
    </section>
  );
}
