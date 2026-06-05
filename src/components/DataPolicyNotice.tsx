import { ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface DataPolicyNoticeProps {
  compact?: boolean;
}

export function DataPolicyNotice({ compact = false }: DataPolicyNoticeProps) {
  return (
    <Card className="border-teal-100 bg-gradient-to-r from-teal-50/80 via-white to-sky-50/70">
      <CardContent className={compact ? "p-4" : "p-5"}>
        <div className="flex gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <div>
            <p className="font-medium text-teal-950">Data access policy</p>
            <p className="mt-1 text-sm leading-6 text-teal-900">
              ASV sequences are stored internally for controlled search but are not downloadable. Sequence similarity
              search will be provided through server-side queries, while metadata, hit tables, taxonomic summaries, and
              aggregated abundance summaries can be prepared for download.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
