import { Package, TerminalSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const code = `library(MicroAtlasR)

conn <- microatlas_connect()

microatlas_summary(conn)

samples <- microatlas_get_samples(
  conn,
  country = "Brazil",
  environment = "Soil",
  primer_region = "V4"
)

hits <- microatlas_search_sequence(
  conn,
  sequence = query_sequence,
  identity = 97,
  query_coverage = 90,
  target_coverage = 90
)

microatlas_download_metadata(conn, samples)`;

export default function RPackagePage() {
  return (
    <section className="page-shell mx-auto max-w-7xl space-y-6 px-4 py-10 lg:px-6">
      <div>
        <p className="text-sm font-semibold uppercase text-primary">Programmatic access</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">MicroAtlasR</h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          The future MicroAtlasR package will expose stable R functions for metadata queries, controlled sequence search,
          taxonomic summaries, and export workflows through the MicroAtlas API.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Planned package scope
            </CardTitle>
            <CardDescription>Frontend copy only. Package backend is not implemented here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
            <p>MicroAtlasR will use the future MicroAtlas API for authentication, query submission, pagination, and downloads.</p>
            <p>Sequence queries will return controlled hit tables and metadata summaries, not raw ASV sequence FASTA.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TerminalSquare className="h-5 w-5 text-primary" />
              Example R code
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-950 p-4 text-sm leading-6 text-slate-100 shadow-[0_20px_40px_rgba(15,23,42,0.18)]">
              <code>{code}</code>
            </pre>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
