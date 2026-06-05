"use client";

import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

const filters = [
  { label: "Country", options: ["All countries", "Brazil", "United States", "Japan", "Kenya", "Germany"] },
  { label: "Environment", options: ["All environments", "Soil", "Human-associated", "Marine", "Freshwater", "Plant-associated"] },
  { label: "Host", options: ["Any host", "None", "Homo sapiens", "Oryza sativa", "Bos taurus"] },
  { label: "Body site", options: ["Any body site", "Gut", "Rhizosphere", "Rumen", "Indoor surface"] },
  { label: "Project", options: ["All projects", "PRJNA-MA-10021", "PRJEB-MA-44208", "PRJNA-MA-61102"] },
  { label: "Primer region", options: ["All primer regions", "V4", "V3-V4", "V4-V5", "V1-V2"] },
  { label: "Platform", options: ["All platforms", "Illumina MiSeq", "Illumina NovaSeq", "Illumina HiSeq"] },
  { label: "Year", options: ["Any year", "2023", "2022", "2021", "2020", "2019"] }
];

interface FilterSidebarProps {
  onReset?: () => void;
}

export function FilterSidebar({ onReset }: FilterSidebarProps) {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-primary" />
          Filters
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {filters.map((filter) => (
          <div key={filter.label} className="space-y-2">
            <Label>{filter.label}</Label>
            <Select defaultValue={filter.options[0]}>
              {filter.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </Select>
          </div>
        ))}
        <Button variant="outline" className="w-full" onClick={onReset}>
          Reset filters
        </Button>
      </CardContent>
    </Card>
  );
}
