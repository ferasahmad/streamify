"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { RevenueSource } from "@/types";
import { formatNumber } from "@/utilities/helpers";
import { useMemo } from "react";
import { Label, Pie, PieChart } from "recharts";

interface RevenueSourcesProps {
  revenueSources: RevenueSource[];
}

export default function RevenueSourcesPieChart({
  revenueSources,
}: RevenueSourcesProps) {
  const chartConfig: ChartConfig = {
    Subscriptions: {
      label: "Subscriptions",
      color: "hsl(var(--chart-1))",
    },
    Advertisements: {
      label: "Advertisements",
      color: "hsl(var(--chart-2))",
    },
    Other: {
      label: "Other",
      color: "hsl(var(--chart-3))",
    },
  };

  const totalRevenue = useMemo(() => {
    return revenueSources.reduce((acc, curr) => acc + curr.amount, 0);
  }, [revenueSources]);

  const chartData = useMemo(
    () =>
      revenueSources.map((item) => ({
        name: item.source,
        value: item.amount,
        fill: chartConfig[item.source as keyof typeof chartConfig].color,
      })),
    [revenueSources, chartConfig]
  );

  const renderRevenueItems = () =>
    revenueSources.map((item) => (
      <div key={item.source} className="flex flex-col">
        <span
          className="text-2xl font-semibold"
          style={{
            color: chartConfig[item.source as keyof typeof chartConfig].color,
          }}
        >
          {formatNumber(item.amount)}
        </span>
        <span className="flex-1 pr-1">{item.source}</span>
      </div>
    ));

  const renderPieLabel = ({ viewBox }: any) => {
    if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) return null;
    return (
      <text
        x={viewBox.cx}
        y={viewBox.cy}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        <tspan
          x={viewBox.cx}
          y={viewBox.cy}
          className="fill-foreground text-3xl font-bold"
        >
          {formatNumber(totalRevenue)}
        </tspan>
        <tspan
          x={viewBox.cx}
          y={(viewBox.cy || 0) + 24}
          className="fill-muted-foreground"
        >
          Revenue
        </tspan>
      </text>
    );
  };

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-2">
        <CardTitle>Revenue Distribution</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row items-start gap-4">
        <div className="flex flex-col gap-2 text-sm h-full justify-center">
          {renderRevenueItems()}
        </div>
        <ChartContainer
          config={chartConfig}
          className="aspect-square w-full lg:w-auto h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label content={renderPieLabel} />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
