"use client";

import { useMemo, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { DataPolicyNotice } from "@/components/DataPolicyNotice";
import { DataTable } from "@/components/DataTable";
import { AsvRecord, asvs } from "@/data/asvs";
import { formatNumber } from "@/lib/utils";

const columns: ColumnDef<AsvRecord>[] = [
  {
    id: "select",
    header: ({ table }) => <input type="checkbox" checked={table.getIsAllPageRowsSelected()} onChange={table.getToggleAllPageRowsSelectedHandler()} />,
    cell: ({ row }) => <input type="checkbox" checked={row.getIsSelected()} onChange={row.getToggleSelectedHandler()} />
  },
  { accessorKey: "asv_id", header: "asv_id" },
  { accessorKey: "taxonomy", header: "taxonomy" },
  { accessorKey: "domain", header: "domain" },
  { accessorKey: "phylum", header: "phylum" },
  { accessorKey: "class", header: "class" },
  { accessorKey: "order", header: "order" },
  { accessorKey: "family", header: "family" },
  { accessorKey: "genus", header: "genus" },
  { accessorKey: "length", header: "length" },
  { accessorKey: "sample_count", header: "sample_count", cell: ({ row }) => formatNumber(row.original.sample_count) },
  { accessorKey: "habitat_count", header: "habitat_count" },
  { accessorKey: "country_count", header: "country_count" },
  { accessorKey: "total_reads", header: "total_reads", cell: ({ row }) => formatNumber(row.original.total_reads) }
];

export default function AsvsPage() {
  const [domain, setDomain] = useState("All domains");
  const [minSamples, setMinSamples] = useState(0);

  const filtered = useMemo(
    () => asvs.filter((item) => (domain === "All domains" || item.domain === domain) && item.sample_count >= minSamples),
    [domain, minSamples]
  );

  return (
    <section className="page-shell mx-auto max-w-7xl space-y-6 px-4 py-10 lg:px-6">
      <div>
        <p className="text-sm font-semibold uppercase text-primary">Feature catalog</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">ASVs</h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Browse mock ASV summaries by taxonomy, prevalence, habitats, countries, and read support. ASV sequences are intentionally hidden.
        </p>
      </div>

      <DataPolicyNotice compact />
      <p className="rounded-lg border border-teal-200 bg-white px-4 py-3 text-sm font-medium text-teal-950">
        ASV sequences are not available for download. Sequence similarity search will be provided through controlled
        server-side queries.
      </p>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            ASV filters
          </CardTitle>
          <CardDescription>Frontend filters model future API query parameters.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-5">
          <div className="space-y-2 md:col-span-2">
            <Label>Taxonomy or habitat</Label>
            <Input placeholder="Bacteroides, soil, Nitrososphaeraceae" />
          </div>
          <div className="space-y-2">
            <Label>Domain</Label>
            <Select value={domain} onChange={(event) => setDomain(event.target.value)}>
              <option>All domains</option>
              <option>Bacteria</option>
              <option>Archaea</option>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Phylum</Label>
            <Select defaultValue="All phyla">
              <option>All phyla</option>
              <option>Bacteroidota</option>
              <option>Pseudomonadota</option>
              <option>Thermoproteota</option>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Minimum sample count</Label>
            <Input type="number" value={minSamples} onChange={(event) => setMinSamples(Number(event.target.value))} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>ASV records</CardTitle>
            <CardDescription>Sequence strings are not included in this table or mock data.</CardDescription>
          </div>
          <Badge>{filtered.length} mock ASVs</Badge>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={filtered} searchPlaceholder="Search ASV summaries" />
        </CardContent>
      </Card>
    </section>
  );
}
