import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";

interface TaxonSummaryCardProps {
  taxon: {
    name: string;
    rank: string;
    lineage: string;
    detected_samples: number;
    detected_countries: number;
    detected_habitats: number;
    associated_asvs: number;
    mean_relative_abundance: string;
  };
}

export function TaxonSummaryCard({ taxon }: TaxonSummaryCardProps) {
  const stats = [
    ["Detected samples", formatNumber(taxon.detected_samples)],
    ["Detected countries", formatNumber(taxon.detected_countries)],
    ["Detected habitats", formatNumber(taxon.detected_habitats)],
    ["Associated ASVs", formatNumber(taxon.associated_asvs)],
    ["Mean relative abundance", taxon.mean_relative_abundance]
  ];

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <CardTitle className="text-xl">{taxon.name}</CardTitle>
          <Badge>{taxon.rank}</Badge>
        </div>
        <p className="text-sm leading-6 text-muted-foreground">{taxon.lineage}</p>
      </CardHeader>
      <CardContent>
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map(([label, value]) => (
            <div key={label} className="hero-stat rounded-xl p-3">
              <dt className="text-xs text-muted-foreground">{label}</dt>
              <dd className="mt-1 text-lg font-semibold text-slate-950">{value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  );
}
