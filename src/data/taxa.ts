import { asvs } from "@/data/asvs";

export const exampleTaxa = ["Pacearchaeales", "Bacteroides", "Nitrososphaeraceae"];

export const taxa = [
  {
    name: "Pacearchaeales",
    rank: "Order",
    lineage: "Archaea; Nanoarchaeota; Pacearchaeia; Pacearchaeales",
    detected_samples: 9044,
    detected_countries: 18,
    detected_habitats: 4,
    associated_asvs: 118,
    mean_relative_abundance: "0.018%",
    asvRows: asvs.filter((item) => item.order === "Pacearchaeales")
  },
  {
    name: "Bacteroides",
    rank: "Genus",
    lineage: "Bacteria; Bacteroidota; Bacteroidia; Bacteroidales; Bacteroidaceae; Bacteroides",
    detected_samples: 184230,
    detected_countries: 72,
    detected_habitats: 9,
    associated_asvs: 8420,
    mean_relative_abundance: "2.86%",
    asvRows: asvs.filter((item) => item.genus === "Bacteroides")
  },
  {
    name: "Nitrososphaeraceae",
    rank: "Family",
    lineage: "Archaea; Thermoproteota; Nitrososphaeria; Nitrososphaerales; Nitrososphaeraceae",
    detected_samples: 42988,
    detected_countries: 48,
    detected_habitats: 12,
    associated_asvs: 3240,
    mean_relative_abundance: "0.42%",
    asvRows: asvs.filter((item) => item.family === "Nitrososphaeraceae")
  }
];
