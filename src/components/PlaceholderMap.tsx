import { MapPinned } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const points = [
  { left: "25%", top: "40%", label: "North America" },
  { left: "48%", top: "37%", label: "Europe" },
  { left: "56%", top: "51%", label: "East Africa" },
  { left: "74%", top: "48%", label: "East Asia" },
  { left: "36%", top: "67%", label: "South America" },
  { left: "81%", top: "72%", label: "Oceania" }
];

export function PlaceholderMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPinned className="h-5 w-5 text-primary" />
          Global sample map
        </CardTitle>
        <CardDescription>Placeholder component ready for MapLibre or API-backed geospatial tiles.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="portal-grid relative h-80 overflow-hidden rounded-lg border bg-gradient-to-br from-sky-50 via-white to-teal-50">
          <div className="absolute inset-6 rounded-[48%] border border-teal-200/70 bg-white/45" />
          {points.map((point) => (
            <span
              key={point.label}
              title={point.label}
              className="absolute flex h-4 w-4 items-center justify-center rounded-full bg-primary shadow-lg shadow-teal-900/20"
              style={{ left: point.left, top: point.top }}
            >
              <span className="h-2 w-2 rounded-full bg-white" />
            </span>
          ))}
          <div className="absolute bottom-4 left-4 rounded-md border bg-white/90 px-3 py-2 text-xs text-muted-foreground shadow-sm">
            180 countries/regions represented in mock summary data
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
