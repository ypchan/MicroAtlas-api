export interface SampleRecord {
  sample_id: string;
  project_id: string;
  country: string;
  environment: string;
  host: string;
  body_site: string;
  primer_region: string;
  platform: string;
  year: number;
  total_reads: number;
  asv_count: number;
}

export const samples: SampleRecord[] = [
  {
    sample_id: "MA-SMP-000184",
    project_id: "PRJNA-MA-10021",
    country: "Brazil",
    environment: "Soil",
    host: "None",
    body_site: "Not applicable",
    primer_region: "V4",
    platform: "Illumina MiSeq",
    year: 2021,
    total_reads: 64210,
    asv_count: 1824
  },
  {
    sample_id: "MA-SMP-000295",
    project_id: "PRJEB-MA-44208",
    country: "United States",
    environment: "Human-associated",
    host: "Homo sapiens",
    body_site: "Gut",
    primer_region: "V3-V4",
    platform: "Illumina NovaSeq",
    year: 2022,
    total_reads: 118420,
    asv_count: 924
  },
  {
    sample_id: "MA-SMP-000312",
    project_id: "PRJNA-MA-30087",
    country: "Japan",
    environment: "Marine",
    host: "None",
    body_site: "Not applicable",
    primer_region: "V4-V5",
    platform: "Illumina MiSeq",
    year: 2020,
    total_reads: 53490,
    asv_count: 1342
  },
  {
    sample_id: "MA-SMP-000428",
    project_id: "PRJNA-MA-61102",
    country: "Kenya",
    environment: "Freshwater",
    host: "None",
    body_site: "Not applicable",
    primer_region: "V4",
    platform: "Illumina HiSeq",
    year: 2019,
    total_reads: 78312,
    asv_count: 1540
  },
  {
    sample_id: "MA-SMP-000519",
    project_id: "PRJEB-MA-90841",
    country: "Germany",
    environment: "Built environment",
    host: "None",
    body_site: "Indoor surface",
    primer_region: "V1-V2",
    platform: "Illumina MiSeq",
    year: 2023,
    total_reads: 40311,
    asv_count: 612
  },
  {
    sample_id: "MA-SMP-000642",
    project_id: "PRJNA-MA-77415",
    country: "India",
    environment: "Plant-associated",
    host: "Oryza sativa",
    body_site: "Rhizosphere",
    primer_region: "V3-V4",
    platform: "Illumina MiSeq",
    year: 2021,
    total_reads: 95618,
    asv_count: 2119
  },
  {
    sample_id: "MA-SMP-000733",
    project_id: "PRJNA-MA-19380",
    country: "Australia",
    environment: "Animal-associated",
    host: "Bos taurus",
    body_site: "Rumen",
    primer_region: "V4",
    platform: "Illumina NovaSeq",
    year: 2022,
    total_reads: 129100,
    asv_count: 1648
  },
  {
    sample_id: "MA-SMP-000874",
    project_id: "PRJEB-MA-50277",
    country: "South Africa",
    environment: "Wastewater",
    host: "None",
    body_site: "Not applicable",
    primer_region: "V4-V5",
    platform: "Illumina MiSeq",
    year: 2023,
    total_reads: 86233,
    asv_count: 1412
  }
];
