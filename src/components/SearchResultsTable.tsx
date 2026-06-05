"use client";

import { ColumnDef } from "@tanstack/react-table";
import { SearchResultRecord } from "@/data/searchResults";
import { DataTable } from "@/components/DataTable";
import { formatNumber } from "@/lib/utils";

const columns: ColumnDef<SearchResultRecord>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllPageRowsSelected()}
        onChange={table.getToggleAllPageRowsSelectedHandler()}
        aria-label="Select all search results"
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
        aria-label="Select search result row"
      />
    )
  },
  { accessorKey: "hit_rank", header: "Rank" },
  { accessorKey: "asv_id", header: "ASV ID" },
  { accessorKey: "identity", header: "Identity", cell: ({ row }) => `${row.original.identity}%` },
  { accessorKey: "alignment_length", header: "Alignment" },
  { accessorKey: "query_coverage", header: "Query cov.", cell: ({ row }) => `${row.original.query_coverage}%` },
  { accessorKey: "target_coverage", header: "Target cov.", cell: ({ row }) => `${row.original.target_coverage}%` },
  { accessorKey: "taxonomy", header: "Taxonomy" },
  { accessorKey: "sample_count", header: "Samples", cell: ({ row }) => formatNumber(row.original.sample_count) },
  { accessorKey: "habitat_count", header: "Habitats" },
  { accessorKey: "country_count", header: "Countries" }
];

export function SearchResultsTable({ data }: { data: SearchResultRecord[] }) {
  return <DataTable columns={columns} data={data} searchPlaceholder="Filter mock hits" />;
}
