"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Download, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import { DataTable } from "@/components/DataTable";
import { FilterSidebar } from "@/components/FilterSidebar";
import { SampleRecord, samples } from "@/data/samples";
import { formatNumber } from "@/lib/utils";

const columns: ColumnDef<SampleRecord>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <input type="checkbox" checked={table.getIsAllPageRowsSelected()} onChange={table.getToggleAllPageRowsSelectedHandler()} />
    ),
    cell: ({ row }) => <input type="checkbox" checked={row.getIsSelected()} onChange={row.getToggleSelectedHandler()} />
  },
  { accessorKey: "sample_id", header: "sample_id" },
  { accessorKey: "project_id", header: "project_id" },
  { accessorKey: "country", header: "country" },
  { accessorKey: "environment", header: "environment" },
  { accessorKey: "host", header: "host" },
  { accessorKey: "body_site", header: "body_site" },
  { accessorKey: "primer_region", header: "primer_region" },
  { accessorKey: "platform", header: "platform" },
  { accessorKey: "total_reads", header: "total_reads", cell: ({ row }) => formatNumber(row.original.total_reads) },
  { accessorKey: "asv_count", header: "asv_count", cell: ({ row }) => formatNumber(row.original.asv_count) }
];

export default function SamplesPage() {
  const [dialog, setDialog] = useState("");

  return (
    <section className="page-shell mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase text-primary">Sample metadata</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Samples</h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Explore harmonized metadata for mock 16S samples. Filters are frontend placeholders ready for API-backed facets.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
        <FilterSidebar onReset={() => setDialog("Filters reset in the prototype. API-backed filter state will be connected later.")} />
        <Card>
          <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <CardTitle>Sample records</CardTitle>
              <CardDescription>Mock rows with selection enabled.</CardDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => setDialog("Backend downloads will be connected later.")}>
                <Download className="h-4 w-4" />
                Download selected metadata
              </Button>
              <Button variant="secondary" onClick={() => setDialog("Filters reset in the prototype. API-backed filter state will be connected later.")}>
                <RotateCcw className="h-4 w-4" />
                Reset filters
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={samples} searchPlaceholder="Search sample records" />
          </CardContent>
        </Card>
      </div>
      <Dialog open={Boolean(dialog)} title="Prototype action" description={dialog} onClose={() => setDialog("")} />
    </section>
  );
}
