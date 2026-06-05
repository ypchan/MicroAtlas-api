import { BookOpen, Quote } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataPolicyNotice } from "@/components/DataPolicyNotice";

const sections = [
  {
    title: "What is MicroAtlas?",
    body: "MicroAtlas is a prototype portal for exploring global, DADA2-derived 16S ASV diversity across public microbial community datasets."
  },
  {
    title: "What is an ASV?",
    body: "An amplicon sequence variant is a high-resolution sequence feature inferred from amplicon reads. In this portal, ASVs are exposed by stable identifiers and taxonomy, not by raw sequence strings."
  },
  {
    title: "How were data processed with DADA2?",
    body: "The intended processing model is DADA2-based denoising, quality control, chimera removal, taxonomy assignment, and harmonized metadata curation. This frontend uses mock records only."
  },
  {
    title: "How to interpret ASV prevalence and abundance?",
    body: "Prevalence-like fields count samples, habitats, and countries where a feature is detected. Relative abundance summaries should be interpreted as aggregated, study-aware indicators after backend normalization is implemented."
  },
  {
    title: "How sequence search will work?",
    body: "Users will submit query amplicons to a controlled server-side vsearch workflow. The API will return hit identifiers, similarity metrics, taxonomy, and distribution summaries without exposing target ASV sequences."
  },
  {
    title: "Data access policy",
    body: "Metadata and aggregate summaries are designed for download. ASV sequence FASTA, raw ASV sequences, and uncontrolled full abundance matrices are restricted."
  }
];

export default function DocumentationPage() {
  return (
    <section className="page-shell mx-auto max-w-7xl space-y-6 px-4 py-10 lg:px-6">
      <div>
        <p className="text-sm font-semibold uppercase text-primary">User guide</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Documentation</h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Scientific and product-facing copy for the frontend prototype. Final methods text will be revised once the backend pipeline is finalized.
        </p>
      </div>

      <DataPolicyNotice compact />

      <div className="grid gap-5 md:grid-cols-2">
        {sections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">{section.body}</CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Quote className="h-5 w-5 text-primary" />
            Citation placeholder
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm leading-7 text-muted-foreground">
          MicroAtlas Consortium. MicroAtlas: a global DADA2-derived 16S ASV atlas for microbial diversity exploration.
          Manuscript in preparation.
        </CardContent>
      </Card>
    </section>
  );
}
