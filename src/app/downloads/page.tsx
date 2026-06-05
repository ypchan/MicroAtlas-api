import { CheckCircle2, LockKeyhole, ServerCog } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DataPolicyNotice } from "@/components/DataPolicyNotice";

const available = [
  "Selected sample metadata",
  "Selected sequence-search hit tables",
  "Taxonomic summaries",
  "Aggregated abundance summaries"
];

const restricted = ["ASV sequence FASTA", "Raw ASV sequences", "Uncontrolled full abundance matrices"];

export default function DownloadsPage() {
  return (
    <section className="page-shell mx-auto max-w-7xl space-y-6 px-4 py-10 lg:px-6">
      <div>
        <p className="text-sm font-semibold uppercase text-primary">Controlled data products</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Downloads</h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Download workflows will be connected to backend jobs in a later phase. This page defines the intended access boundaries.
        </p>
      </div>

      <DataPolicyNotice />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Downloadable products
            </CardTitle>
            <CardDescription>Designed for future API-backed export jobs.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              {available.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LockKeyhole className="h-5 w-5 text-primary" />
              Restricted products
            </CardTitle>
            <CardDescription>Not downloadable in the public portal prototype.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              {restricted.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ServerCog className="h-5 w-5 text-primary" />
            Future workflow
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">
          Frontend buttons currently open placeholder dialogs. Later, each export will create an authenticated backend job,
          poll its status, and return a scoped file when the job is complete.
        </CardContent>
      </Card>
    </section>
  );
}
