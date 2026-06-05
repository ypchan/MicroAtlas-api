export interface AsvRecord {
  asv_id: string;
  taxonomy: string;
  domain: string;
  phylum: string;
  class: string;
  order: string;
  family: string;
  genus: string;
  length: number;
  sample_count: number;
  habitat_count: number;
  country_count: number;
  total_reads: number;
}

export const asvs: AsvRecord[] = [
  {
    asv_id: "ASV-00000041",
    taxonomy: "Bacteria; Bacteroidota; Bacteroidia; Bacteroidales; Bacteroidaceae; Bacteroides",
    domain: "Bacteria",
    phylum: "Bacteroidota",
    class: "Bacteroidia",
    order: "Bacteroidales",
    family: "Bacteroidaceae",
    genus: "Bacteroides",
    length: 253,
    sample_count: 184230,
    habitat_count: 9,
    country_count: 72,
    total_reads: 98213421
  },
  {
    asv_id: "ASV-00001492",
    taxonomy: "Archaea; Thermoproteota; Nitrososphaeria; Nitrososphaerales; Nitrososphaeraceae",
    domain: "Archaea",
    phylum: "Thermoproteota",
    class: "Nitrososphaeria",
    order: "Nitrososphaerales",
    family: "Nitrososphaeraceae",
    genus: "Unclassified",
    length: 251,
    sample_count: 42988,
    habitat_count: 12,
    country_count: 48,
    total_reads: 21499002
  },
  {
    asv_id: "ASV-00010438",
    taxonomy: "Bacteria; Pseudomonadota; Gammaproteobacteria; Burkholderiales; Comamonadaceae",
    domain: "Bacteria",
    phylum: "Pseudomonadota",
    class: "Gammaproteobacteria",
    order: "Burkholderiales",
    family: "Comamonadaceae",
    genus: "Unclassified",
    length: 252,
    sample_count: 87534,
    habitat_count: 18,
    country_count: 83,
    total_reads: 63210881
  },
  {
    asv_id: "ASV-00022008",
    taxonomy: "Bacteria; Bacillota; Clostridia; Lachnospirales; Lachnospiraceae; Roseburia",
    domain: "Bacteria",
    phylum: "Bacillota",
    class: "Clostridia",
    order: "Lachnospirales",
    family: "Lachnospiraceae",
    genus: "Roseburia",
    length: 254,
    sample_count: 132450,
    habitat_count: 6,
    country_count: 61,
    total_reads: 74920012
  },
  {
    asv_id: "ASV-00100972",
    taxonomy: "Bacteria; Cyanobacteriota; Cyanophyceae; Synechococcales; Cyanobiaceae",
    domain: "Bacteria",
    phylum: "Cyanobacteriota",
    class: "Cyanophyceae",
    order: "Synechococcales",
    family: "Cyanobiaceae",
    genus: "Synechococcus",
    length: 251,
    sample_count: 51241,
    habitat_count: 8,
    country_count: 39,
    total_reads: 32140011
  },
  {
    asv_id: "ASV-00448210",
    taxonomy: "Archaea; Nanoarchaeota; Pacearchaeia; Pacearchaeales",
    domain: "Archaea",
    phylum: "Nanoarchaeota",
    class: "Pacearchaeia",
    order: "Pacearchaeales",
    family: "Unclassified",
    genus: "Unclassified",
    length: 248,
    sample_count: 9044,
    habitat_count: 4,
    country_count: 18,
    total_reads: 4108820
  }
];
