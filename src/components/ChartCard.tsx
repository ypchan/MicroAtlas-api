"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const colors = ["#0f7f90", "#39a78e", "#6b8fbf", "#d08b45", "#7d8b99", "#a75f7a"];

interface ChartCardProps {
  title: string;
  description?: string;
  data: Array<Record<string, unknown>>;
  type?: "bar" | "pie";
  valueKey?: string;
}

export function ChartCard({ title, description, data, type = "bar", valueKey = "samples" }: ChartCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>
        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {type === "pie" ? (
              <PieChart>
                <Pie data={data} dataKey={valueKey} nameKey="name" innerRadius={58} outerRadius={92} paddingAngle={2}>
                  {data.map((_, index) => (
                    <Cell key={index} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid rgba(148,163,184,0.18)",
                    boxShadow: "0 18px 42px rgba(15,23,42,0.12)"
                  }}
                />
              </PieChart>
            ) : (
              <BarChart data={data} margin={{ top: 10, right: 10, bottom: 10, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} />
                <Tooltip
                  cursor={{ fill: "rgba(15, 127, 144, 0.08)" }}
                  contentStyle={{
                    borderRadius: 12,
                    border: "1px solid rgba(148,163,184,0.18)",
                    boxShadow: "0 18px 42px rgba(15,23,42,0.12)"
                  }}
                />
                <Bar dataKey={valueKey} radius={[6, 6, 0, 0]}>
                  {data.map((_, index) => (
                    <Cell key={index} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
