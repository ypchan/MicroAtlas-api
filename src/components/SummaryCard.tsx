import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SummaryCardProps {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
}

export function SummaryCard({ label, value, detail, icon: Icon }: SummaryCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(15,23,42,0.1)]">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium capitalize text-muted-foreground">{label}</p>
            <p className="mt-3 text-3xl font-semibold tracking-normal text-slate-950">{value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{detail}</p>
          </div>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-sky-50 text-primary ring-1 ring-teal-100">
            <Icon className="h-5 w-5" />
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
