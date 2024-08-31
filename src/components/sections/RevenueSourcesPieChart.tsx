"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import CardTitleAndDescription from "../custom/CardTitleAndDescription";

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
      <div key={item.source} className={classes.revenueItemContainer}>
        <span
          className={classes.revenueItemValue}
          style={{
            color: chartConfig[item.source as keyof typeof chartConfig].color,
          }}
        >
          {formatNumber(item.amount)}
        </span>
        <span className={classes.revenueItemSource}>{item.source}</span>
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
        <tspan x={viewBox.cx} y={viewBox.cy} className={classes.pieLabelValue}>
          {formatNumber(totalRevenue)}
        </tspan>
        <tspan
          x={viewBox.cx}
          y={(viewBox.cy || 0) + 24}
          className={classes.pieLabelSubtitle}
        >
          Revenue
        </tspan>
      </text>
    );
  };

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.cardHeader}>
        <CardTitleAndDescription
          title="Revenue Distribution"
          description="The total revenue generated from subscriptions, advertisements and other sources."
        />
      </CardHeader>
      <CardContent className={classes.cardContent}>
        <div className={classes.revenueItemsContainer}>
          {renderRevenueItems()}
        </div>
        <ChartContainer config={chartConfig} className={classes.chartContainer}>
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

const classes = {
  card: "flex flex-col h-full",
  cardHeader: "pb-2",
  cardContent: "flex flex-row justify-center gap-4",
  revenueItemsContainer:
    "lg:flex hidden flex-col gap-2 text-sm h-full justify-center",
  revenueItemContainer: "flex flex-col",
  revenueItemValue: "text-2xl font-semibold",
  revenueItemSource: "flex-1 pr-1",
  chartContainer:
    "aspect-square w-full xl:w-auto xl:h-[300px] lg:h-[200px] h-[250px]",
  pieLabelValue: "fill-foreground text-3xl font-bold",
  pieLabelSubtitle: "fill-muted-foreground",
};
