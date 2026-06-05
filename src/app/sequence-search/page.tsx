"use client";

import { useState } from "react";
import { Download, Eye, TableProperties } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import { DataPolicyNotice } from "@/components/DataPolicyNotice";
import { SearchResultsTable } from "@/components/SearchResultsTable";
import { SequenceSearchForm } from "@/components/SequenceSearchForm";
import { searchResults } from "@/data/searchResults";

export default function SequenceSearchPage() {
  const [hasSearched, setHasSearched] = useState(false);
  const [dialog, setDialog] = useState("");

  return (
    <section className="page-shell mx-auto max-w-7xl space-y-6 px-4 py-10 lg:px-6">
      <div>
        <p className="text-sm font-semibold uppercase text-primary">Controlled similarity search</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-950">Sequence Search</h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          Search a 16S amplicon against internal ASV targets. This prototype returns static mock hits and does not expose the target sequences.
        </p>
      </div>

      <DataPolicyNotice compact />
      <SequenceSearchForm onSearch={() => setHasSearched(true)} />

      <Card>
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>Mock search results</CardTitle>
            <CardDescription>
              This prototype uses mock search results. Real vsearch-backed sequence search will be connected in the backend phase.
            </CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => setDialog("Selected hit table downloads will be connected to backend jobs later.")}>
              <TableProperties className="h-4 w-4" />
              Download selected hit table
            </Button>
            <Button variant="outline" onClick={() => setDialog("Associated metadata downloads will be connected to backend jobs later.")}>
              <Download className="h-4 w-4" />
              Download associated metadata
            </Button>
            <Button variant="secondary" onClick={() => setDialog("Distribution views will open an API-backed visualization later.")}>
              <Eye className="h-4 w-4" />
              View distribution
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {hasSearched ? (
            <SearchResultsTable data={searchResults} />
          ) : (
            <div className="rounded-lg border border-dashed bg-slate-50 p-10 text-center text-sm text-muted-foreground">
              Run a mock query to populate the results table.
            </div>
          )}
        </CardContent>
      </Card>
      <Dialog open={Boolean(dialog)} title="Prototype action" description={dialog} onClose={() => setDialog("")} />
    </section>
  );
}
