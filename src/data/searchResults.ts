export interface SearchResultRecord {
  hit_rank: number;
  asv_id: string;
  identity: number;
  alignment_length: number;
  query_coverage: number;
  target_coverage: number;
  taxonomy: string;
  sample_count: number;
  habitat_count: number;
  country_count: number;
}

export const searchResults: SearchResultRecord[] = [
  {
    hit_rank: 1,
    asv_id: "ASV-00000041",
    identity: 99.6,
    alignment_length: 252,
    query_coverage: 99.2,
    target_coverage: 100,
    taxonomy: "Bacteria; Bacteroidota; Bacteroidia; Bacteroidales; Bacteroidaceae; Bacteroides",
    sample_count: 184230,
    habitat_count: 9,
    country_count: 72
  },
  {
    hit_rank: 2,
    asv_id: "ASV-00022008",
    identity: 98.8,
    alignment_length: 251,
    query_coverage: 98.7,
    target_coverage: 98.9,
    taxonomy: "Bacteria; Bacillota; Clostridia; Lachnospirales; Lachnospiraceae; Roseburia",
    sample_count: 132450,
    habitat_count: 6,
    country_count: 61
  },
  {
    hit_rank: 3,
    asv_id: "ASV-00010438",
    identity: 97.9,
    alignment_length: 248,
    query_coverage: 97.3,
    target_coverage: 98.4,
    taxonomy: "Bacteria; Pseudomonadota; Gammaproteobacteria; Burkholderiales; Comamonadaceae",
    sample_count: 87534,
    habitat_count: 18,
    country_count: 83
  }
];

export const exampleSequence =
  "CCTACGGGNGGCWGCAGTAGTGGGAATATTGCACAATGGGCGAAAGCCTGATGCAGCGACGCCGCGTGAGGGATGAAGGCCTTCGGGTTGTAAACCTCTTT";
