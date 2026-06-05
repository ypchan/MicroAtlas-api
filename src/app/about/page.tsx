import { Compass, FlaskConical, Mail, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const cards = [
  {
    icon: Compass,
    title: "Project overview",
    body: "MicroAtlas is designed as a scientific web portal for browsing harmonized 16S ASV metadata, taxonomic summaries, and controlled similarity-search results."
  },
  {
    icon: FlaskConical,
    title: "Data scope",
    body: "The intended atlas spans public DADA2-derived 16S studies, global sample metadata, curated habitat categories, primer regions, taxonomy, and aggregate abundance summaries."
  },
  {
    icon: Wrench,
    title: "Development status",
    body: "This repository currently implements the frontend prototype only. Real backend APIs, databases, vsearch workers, and package integrations will be connected later."
  },
  {
    icon: Mail,
    title: "Contact placeholder",
    body: "For prototype discussions, use contact@microatlas.example. Replace this with the project contact address before public release."
  }
];

export default function AboutPage() {
  return (
    <section className="page-shell mx-auto max-w-7xl space-y-6 px-4 py-10 lg:px-6">
      <div>
        <p className="text-sm font-semibold uppercase text-primary">About the atlas</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">About MicroAtlas</h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          A focused overview of the project scope, current prototype status, and intended scientific audience.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  {card.title}
                </CardTitle>
                <CardDescription>MicroAtlas frontend prototype</CardDescription>
              </CardHeader>
              <CardContent className="text-sm leading-7 text-muted-foreground">{card.body}</CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
