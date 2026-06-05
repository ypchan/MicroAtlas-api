"use client";

import { useState } from "react";
import { Play, RotateCcw, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog } from "@/components/ui/dialog";
import { exampleSequence } from "@/data/searchResults";

interface SequenceSearchFormProps {
  onSearch: () => void;
}

export function SequenceSearchForm({ onSearch }: SequenceSearchFormProps) {
  const [sequence, setSequence] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5 text-primary" />
          Sequence query
        </CardTitle>
        <CardDescription>Paste a 16S amplicon sequence. Results are mock records in this frontend prototype.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="sequence">Amplicon sequence</Label>
          <Textarea
            id="sequence"
            value={sequence}
            onChange={(event) => setSequence(event.target.value)}
            placeholder="Paste sequence here"
            spellCheck={false}
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-2">
            <Label htmlFor="identity">Identity threshold</Label>
            <Input id="identity" type="number" defaultValue={97} min={80} max={100} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="query-coverage">Query coverage</Label>
            <Input id="query-coverage" type="number" defaultValue={90} min={0} max={100} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="target-coverage">Target coverage</Label>
            <Input id="target-coverage" type="number" defaultValue={90} min={0} max={100} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="max-hits">Max hits</Label>
            <Input id="max-hits" type="number" defaultValue={25} min={1} max={500} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="domain">Domain filter</Label>
            <Select id="domain" defaultValue="All domains">
              <option>All domains</option>
              <option>Bacteria</option>
              <option>Archaea</option>
            </Select>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => {
              onSearch();
              setDialogOpen(true);
            }}
          >
            <Play className="h-4 w-4" />
            Search ASVs
          </Button>
          <Button variant="outline" onClick={() => setSequence("")}>
            <RotateCcw className="h-4 w-4" />
            Clear
          </Button>
          <Button variant="secondary" onClick={() => setSequence(exampleSequence)}>
            Load example
          </Button>
        </div>
      </CardContent>
      <Dialog
        open={dialogOpen}
        title="Mock search complete"
        description="This prototype uses mock search results. Real vsearch-backed sequence search will be connected in the backend phase."
        onClose={() => setDialogOpen(false)}
      />
    </Card>
  );
}
